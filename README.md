# 🛡️ TrustScore Insurance

### AI-Assisted Parametric Insurance for Gig Workers  
**Real-time risk. Behavior-based validation. Fair payouts.**

---

## 🎯 Theme: *Protect Your Worker*

TrustScore is designed to provide **income protection for gig workers** when external disruptions — such as heavy rain or extreme conditions — prevent them from working.

Instead of traditional claim-based insurance, TrustScore uses a **parametric model**, where payouts are triggered based on real-world signals and validated through behavioral analysis.

---

## 🚨 Problem

Gig workers face **frequent income disruption** due to weather and environmental conditions, but lack accessible and reliable insurance.

Existing parametric systems:
- rely heavily on **GPS-based validation**
- are vulnerable to **spoofing and coordinated fraud**
- lack **behavioral verification**

👉 The challenge is not just fast payouts — but ensuring **accurate, fair, and fraud-resistant payouts at scale**.

---

## 💡 Solution Overview

TrustScore introduces a **multi-signal insurance system** that combines:

- Environmental risk (weather conditions)  
- Worker behavior (activity patterns)  
- Fraud detection (multi-layer validation)  

👉 Core shift:  
**From “Where are you?” → to “Are you behaving like a real worker?”**

---

## 🔄 System Workflow

1. Worker registers with:
   - Name, city, platform, hourly income  

2. System continuously evaluates:
   - Environmental conditions (weather API)  
   - Worker behavior (activity, consistency)  

3. Weekly premium is calculated dynamically  

4. When disruption thresholds are crossed:
   - Claim is triggered  
   - Validation layer evaluates signals  

5. Based on computed confidence:
   - Payout is processed (full / partial / flagged)

---

## ⚙️ Core Decision Logic



### Components:
- **Trust Score:** GPS consistency, work patterns, historical reliability  
- **Behavior Score:** Speed variance, route deviation  
- **Zone Score:** Area-level delivery activity  
- **Fraud Signals:** Device duplication, sensor mismatch, GPS anomalies  

---

## 💰 Weekly Premium Model

Premiums are calculated weekly to align with gig worker earnings.

Factors include:
- Location-based environmental risk  
- Worker activity patterns  
- Historical behavior  
- TrustScore  

👉 Ensures pricing is **dynamic, personalized, and fair**

---

## ⚡ Parametric Triggers

Claims are triggered when external conditions exceed thresholds:

- High rainfall  
- Flood alerts  
- Extreme temperature  
- Drop in delivery activity within a zone  

---

## 🔒 Fraud Detection Strategy

TrustScore implements a **multi-layer fraud detection system**:

### Behavioral Validation
- Detects unrealistic movement patterns  
- Identifies route deviations  

### Device & Sensor Checks
- Duplicate device detection  
- Sensor mismatch (GPS vs accelerometer)  

### GPS Integrity
- Flags sudden location jumps (>1000m anomalies)  

### Zone-Level Consensus
- Validates disruption across multiple users  

👉 Fraud signals directly reduce confidence and can block payouts  

---

## 🧱 Tech Stack

- **Frontend:** React Native (Expo)  
- **Backend:** Python (Flask)  
- **ML Model:** Scikit-learn (Random Forest for risk scoring)  
- **APIs:** OpenWeatherMap  
- **Navigation:** React Navigation Stack  

---

# 🚀 Phase 1 — Foundation & Architecture

Phase 1 focused on building a **functional, end-to-end system design**.

### Key Capabilities

- Parametric insurance logic (risk → trigger → payout)  
- Weekly premium model aligned with gig income cycles  
- Multi-signal fraud detection framework  
- Confidence-based claim processing  
- User persona and workflow design  
- Integration plan for weather APIs and ML models  

👉 Outcome:  
A complete system architecture capable of handling **risk, validation, and payouts**

---

# 🚀 Phase 2 — Implementation & Demonstration

Phase 2 focuses on building a **working prototype** demonstrating system behavior.

---

## 📱 Mobile Application

- Registration with personalized inputs  
- Dashboard displaying:
  - Risk Score  
  - Weekly Premium  
  - Coverage status  

- Claim screen showing:
  - Trust, Behavior, Zone scores  
  - Confidence score  
  - Decision (instant / partial / review)  
  - Final payout  

---

## 🌦️ Weather Integration

- Fetches live weather data via OpenWeatherMap  
- Used to derive environmental risk signals  

---

## 🧠 Risk & Decision Engine

- Combines multiple signals to compute:
  - RiskScore  
  - Confidence Score  
  - Payout  

- No fixed payout tables — values are computed dynamically  

---

## 🔍 Fraud Detection (Demonstrated)

- GPS anomaly detection (large jumps)  
- Device duplication scenarios  
- Sensor mismatch logic  

👉 Fraud signals visibly affect:
- Confidence  
- Payout decision  

---

## 📊 Analytics & Transparency

- Displays:
  - Earnings protected  
  - Premiums paid  
  - Last payout  

- Provides insight into:
  - TrustScore  
  - Fraud signals  
  - System decisions  

---

## 🎨 User Experience

- Mobile-first design (Android + iOS via Expo)  
- Dark / Light mode support  
- Clear visibility of system decisions  

---

# 🧠 Key Differentiators

- Behavior-based validation (not GPS-dependent)  
- Confidence-based decision system (not binary)  
- Explainability layer (users see why decisions are made)  
- Fraud-resistant architecture designed for coordinated attacks  

---

# 📌 Summary

TrustScore demonstrates a practical approach to parametric insurance by combining:

- Environmental data  
- Behavioral analysis  
- Fraud detection  

👉 The system prioritizes:
- Fairness  
- Transparency  
- Scalability  

---

## 🎥 Demo

*(Add your video link here)*

---

# ❤️ Built for Hackathon

Designed to explore how **real-world signals can power reliable insurance systems for gig workers**.
