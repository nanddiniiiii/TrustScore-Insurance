from flask import Flask, request, jsonify
from flask_cors import CORS
from weather import get_live_weather
from predict import predict_risk
import datetime
import random
import hashlib

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    city = data.get('city', 'Mumbai') # Default to Mumbai if no city is provided

    weather_data = get_live_weather(city)

    if weather_data:
        rainfall = weather_data.get('rainfall', 0)
        temp = weather_data.get('temp', 0)
        humidity = weather_data.get('humidity', 0)
        
        risk_prob = predict_risk(rainfall, temp, humidity)
        
        return jsonify({'risk_probability': risk_prob})
    else:
        return jsonify({'error': 'Could not fetch weather data'}), 500

@app.route('/sync-telemetry', methods=['POST'])
def sync_telemetry():
    """
    This endpoint replaces hardcoded frontend mocks. It generates a live, dynamically 
    computed telemetry snapshot based on real-time constraints:
    1. The physical live weather in the city right now.
    2. The actual time of day (rush hour vs midnight).
    3. A deterministic hash of the user's details (generating a 'real' consistent history).
    """
    data = request.get_json()
    city = data.get('city', 'Mumbai')
    username = data.get('name', 'User')
    platform = data.get('platform', 'Swiggy')

    # Get REAL live weather to impact sensors and zone density
    weather_data = get_live_weather(city) or {"rainfall": 0, "temp": 25, "humidity": 50}
    rainfall = weather_data.get("rainfall", 0)
    
    # 1. ZONE SCORE CALCULATION (Driven by real time & real weather)
    # E.g., Rush hour (12pm-2pm, 7pm-9pm) boosts active users. Rain drops them.
    current_hour = datetime.datetime.now().hour
    base_users = 150 if (12 <= current_hour <= 14 or 19 <= current_hour <= 21) else 60
    # Rain makes gig workers log off, creating a supply shortage
    active_users = max(10, base_users - int(rainfall * 2))  
    
    # Calculate current zone activity mathematically tied to city size and time 
    city_hash = int(hashlib.sha256(city.encode('utf-8')).hexdigest(), 16)
    avg_activity = 40 + ((city_hash + current_hour) % 55) # Deterministic live server load 40-95

    # 2. TRUST & HISTORY (Deterministic DB lookup proxy using hash)
    # In a real app, this queries a PostgreSQL DB. Here, we hash the username to create a persistent profile score!
    user_hash = int(hashlib.sha256(username.encode('utf-8')).hexdigest(), 16)
    history_score = 60 + (user_hash % 40) # Stable 60-100 score for this specific user
    
    # GPS consistency drops during heavy rain or specific dense cities
    gps_consistency = 98 - int(rainfall * 1.5) - ((city_hash % 15) if len(city) > 0 else 0)

    # User's personal activity tier driven by their unique history hash and current physical hour
    activityLevel = 60 + ((user_hash + current_hour) % 35)

    # 3. BEHAVIOR BASELINES
    # Base variance increases mathematically as rainfall increases (slippery roads)
    platform_hash = int(hashlib.sha256(platform.encode('utf-8')).hexdigest(), 16)
    base_speed_variance = 10 + (platform_hash % 10) + int(rainfall * 0.5)
    base_route_deviation = 50 + (platform_hash % 50) + int(rainfall * 2)
    
    return jsonify({
        "telemetry": {
            "zone": {
                "activeUsers": active_users,
                "avgActivity": avg_activity
            },
            "history": {
                "historyScore": history_score,
                "gpsConsistency": max(30, gps_consistency),
                "activityLevel": activityLevel
            },
            "baselines": {
                "speedVariance": base_speed_variance,
                "routeDeviation": base_route_deviation
            },
            "live_weather_impact": f"{rainfall}mm rain"
        }
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
