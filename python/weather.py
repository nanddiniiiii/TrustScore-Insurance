import requests
import os

# Prevent Hardcoding/Leaking on GitHub!
# Load from environment variables, or read from a local hidden text file.
API_KEY = os.environ.get("OPENWEATHER_API_KEY")
if not API_KEY and os.path.exists("python/secret.txt"):
    with open("python/secret.txt", "r") as f:
        API_KEY = f.read().strip()
        
BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

def get_weather(city_name):
    """
    Fetches live weather data from OpenWeatherMap.
    """
    params = {
        'q': city_name,
        'appid': API_KEY,
        'units': 'metric' 
    }
    try:
        response = requests.get(BASE_URL, params=params)
        response.raise_for_status()  # Raises an HTTPError for bad responses (4xx or 5xx)
        data = response.json()
        
        # Extract relevant information
        # OpenWeatherMap provides rain in 'rain.1h' (last 1 hour) or 'rain.3h'
        rainfall = data.get('rain', {}).get('1h', 0) # Rainfall in mm
        temp = data.get('main', {}).get('temp', 0)
        humidity = data.get('main', {}).get('humidity', 0)

        return {
            "rainfall": rainfall,
            "temp": temp,
            "humidity": humidity
        }
    except requests.exceptions.RequestException as e:
        print(f"Error fetching weather data: {e}")
        print("⚠️ HACKATHON DEMO FALLBACK: API Key not active yet. Using mock data.")
        # Fallback data so the demo isn't blocked while the API key activates
        return {
            "rainfall": 15,
            "temp": 42,
            "humidity": 80
        }

def detect_disruption(weather):
    rainfall = weather.get("rainfall", 0)
    temp = weather.get("temp", 0)

    if rainfall > 10:
        return "Heavy Rain"
    elif temp > 40:
        return "Extreme Heat"
    return "Normal"

if __name__ == '__main__':
    # Example usage
    weather = get_live_weather("Mumbai")
    if weather:
        print("Live Weather:", weather)
        
        disruption = detect_disruption(weather)
        print("Disruption Level:", disruption)
