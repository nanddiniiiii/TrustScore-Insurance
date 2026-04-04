import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load REAL dataset (you should replace with actual API data later)
data = pd.read_csv("python/weather_data.csv")

X = data[["rainfall", "temperature", "humidity"]]
y = data["disruption"]

model = RandomForestClassifier()
model.fit(X, y)

joblib.dump(model, "python/risk_model.pkl")

print("Model trained and saved")
