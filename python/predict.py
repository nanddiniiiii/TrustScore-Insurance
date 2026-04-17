import joblib
import numpy as np
import pandas as pd

model = joblib.load("python/risk_model.pkl")

def predict_risk(rainfall, temp, humidity):
    # Create a DataFrame with the correct feature names
    input_data = pd.DataFrame([[rainfall, temp, humidity]], columns=['rainfall', 'temperature', 'humidity'])
    prob = model.predict_proba(input_data)[0][1]
    return float(prob)
