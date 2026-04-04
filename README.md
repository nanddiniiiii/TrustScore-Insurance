# 🛡️ TrustScore Insurance

### AI-Assisted Parametric Insurance for Gig Workers
**Real-time risk evaluation • Behavioral validation • Confidence-based payouts**

---

## 🎯 Theme: *Protect Your Worker*

TrustScore is a parametric insurance system designed for gig workers, where payouts are triggered based on real-world signals such as environmental conditions and validated using behavioral and fraud-detection mechanisms.

Unlike traditional insurance workflows, TrustScore minimizes manual intervention by combining **external triggers + system-level validation**.

---

## 🚨 Problem Statement

Gig workers face frequent income disruption due to:

- Heavy rainfall and floods
- Extreme heat or poor air quality
- Localized delivery slowdowns

Existing parametric insurance systems:

- Rely heavily on **GPS-based validation**
- Are vulnerable to **GPS spoofing and coordinated fraud**
- Lack **behavioral verification mechanisms**

👉 The challenge is enabling **fast payouts while maintaining robustness against adversarial behavior**.

---

## 💡 System Overview

TrustScore implements a **multi-signal decision system** integrating:

- Environmental risk signals (weather APIs)
- Behavioral metrics (movement and activity patterns)
- Fraud indicators (device and sensor anomalies)

👉 Core shift:
**From "Where are you?" → to "Are you behaving like a real worker?"**

---

## 🔄 System Workflow

1. **User Registration** — Name, city, platform, hourly income
2. **Signal Collection** — Weather data (OpenWeatherMap API) + behavioral indicators (activity consistency, route patterns)
3. **Risk Estimation** — Environmental data → normalized risk score
4. **Trigger Detection** — Disruption events detected using thresholds
5. **Validation Layer** — Trust, behavior, fraud signals evaluated
6. **Decision Engine** — Confidence score computed → payout determined

---

## ⚙️ Core Decision Model

Confidence Score = (Trust × 0.4) + (Behavior × 0.2) + (Zone × 0.3) − Fraud Penalty

### Signal Definitions

| Signal | Factors |
|---|---|
| **Trust Score** | GPS consistency, work activity patterns, historical reliability |
| **Behavior Score** | Speed variance, route deviation |
| **Zone Score** | Active workers in area, average activity |
| **Fraud Signals** | GPS jumps (>1000m), sensor mismatch, duplicate device |

---

## 💰 Premium & Payout Model

### Weekly Premium

Calculated dynamically using:

- Environmental risk
- Worker activity
- Historical behavior

👉 Aligned with **weekly gig income cycles**

### Income Loss Formula

Income Loss = Hourly Income × Hours Lost

### Payout Logic

| Confidence Score | Outcome |
|---|---|
| > 75 | ✅ Full payout |
| 50 – 75 | 🟡 Partial payout (~70%) |
| < 50 | 🚫 Flagged / No payout |

👉 Payout is also scaled using **risk intensity**

---

## ⚡ Parametric Triggers

Claims are triggered when:

- Rainfall exceeds threshold
- Flood alerts active
- Extreme temperature recorded
- Drop in delivery activity detected

---

## 🔒 Fraud Detection Architecture

### Behavioral Validation
- Detects unrealistic movement patterns
- Route deviation detection

### Device & Sensor Checks
- Duplicate device detection
- Sensor mismatch flagging

### GPS Integrity
- Detects large location jumps (>1000m)

### Zone-Level Consensus
- Cross-validates disruptions across multiple users in the same zone

👉 Fraud signals directly impact confidence score and payout decision.

---

## 🧱 System Architecture

### Frontend
- React Native (Expo)
- Multi-screen mobile app
- Dark / Light mode support

### Backend
- Python Flask API
- Handles weather data, risk calculation, and telemetry

### ML Component
- Scikit-learn (Random Forest)
- Risk prediction model

### External APIs
- OpenWeatherMap

---

## 🚀 Phase 1 — System Design & Architecture

**Focus:** Problem understanding, system design, fraud-resistant architecture

**Key Outputs:**

- Parametric insurance workflow
- Weekly premium model
- Multi-signal validation design
- Confidence-based decision logic
- Anti-spoofing strategy

👉 **Outcome:** A complete architecture capable of handling risk, validation, and payouts

---

## 🚀 Phase 2 — Prototype Implementation

**Focus:** Functional system demonstration

### 📱 Mobile Application
- User registration
- Dashboard (risk + premium display)
- Claim screen (decision engine output)
- Analytics screen

### 🌦️ Weather Integration
- Real-time data via OpenWeatherMap
- Used for risk computation

### 🧠 Decision Engine
- Modular scoring functions combining risk, trust, behavior, and fraud signals
- Outputs: confidence score + payout amount

### 🔍 Fraud Detection (Demonstrated)
- GPS anomaly detection
- Device duplication checks
- Sensor mismatch analysis

👉 Fraud signals directly affect confidence and payout.

### 📊 Analytics
- Earnings protected
- Premiums paid
- Decision transparency

### 🎨 User Experience
- Mobile-first design
- Dark / Light mode
- Clear decision visibility

---

## 🧠 Key Differentiators

- ✅ Behavior-based validation — not GPS-only
- ✅ Confidence-based decision engine — not binary approval
- ✅ Multi-layer fraud detection
- ✅ Explainable, transparent outputs

---

## 📌 Summary

TrustScore demonstrates a structured parametric insurance system combining:

- Environmental signals
- Behavioral analytics
- Fraud detection

👉 Focused on **accuracy**, **transparency**, and **scalability**.

---

## 🎥 Demo

https://youtube.com/shorts/d_PMy_tHb40?si=9c7H-AeNmtd9ftH9


---

## ❤️ Built for Hackathon

Exploring how real-world signals can power **reliable insurance systems for gig workers**.

