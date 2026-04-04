import joblib
import numpy as np

model = joblib.load("python/risk_model.pkl")

def predict_risk(rainfall, temp, humidity):
    input_data = np.array([[rainfall, temp, humidity]])
    prob = model.predict_proba(input_data)[0][1]
    return float(prob)
