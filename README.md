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

*(Add your video link here)*

---

## ❤️ Built for Hackathon

Exploring how real-world signals can power **reliable insurance systems for gig workers**.
