🧠 TrustScore
Proof-of-Work Based Parametric Insurance for Gig Workers
🚨 Problem

Delivery partners are a critical part of India’s gig economy, but their income is highly unpredictable. External disruptions such as heavy rain, flooding, extreme heat, or poor air quality can suddenly halt deliveries and cut off earnings.

Existing parametric insurance systems attempt to solve this, but rely heavily on GPS-based validation — which is easily spoofed. This enables large-scale fraud where fake users simulate disruptions and trigger payouts.

👉 The real challenge is building a system that ensures fast payouts for genuine users while preventing fraud at scale.

👤 User Persona

Ravi, 23 — Swiggy Delivery Partner

Works 8–12 hours daily

Income depends on completed deliveries

Loses income during heavy rain/floods

Needs fast, reliable, and fair compensation

💡 Proposed Solution

We propose TrustScore, an AI-powered parametric insurance platform designed specifically for delivery workers.

Instead of relying only on location, our system introduces behavior-based validation, ensuring payouts are triggered only when real-world disruptions align with actual delivery activity.

🔑 Key Idea

Shift from “Where are you?” → to “Are you behaving like a real delivery worker?”

Core Capabilities

Detect real-world disruptions using external data

Track delivery activity patterns

Automatically trigger payouts

Prevent fraud using multi-layer verification

🔄 Workflow

Onboarding
Worker registers and selects coverage

Monitoring

Environmental conditions (weather, AQI)

Worker activity patterns

Risk & Pricing
AI calculates risk and adjusts weekly premium

Disruption Trigger
When thresholds are met → claim auto-triggered

Validation Layer
Fraud detection runs using multiple signals

Payout Decision
Based on confidence score:

High → instant payout

Medium → partial payout

Low → verification

💰 Weekly Premium Model

Premium is calculated weekly to match gig workers’ earning cycles.

Factors considered:

Location risk (e.g., flood-prone zones)

Activity consistency

Historical claims

TrustScore (user reliability)

👉 More reliable users benefit from lower premiums.

⚡ Parametric Triggers

Payouts are automatically triggered when:

Rainfall exceeds threshold

Flood alerts are issued

AQI crosses safe limits

Delivery activity drops significantly in a zone

🤖 AI & Intelligence Layer

Our AI system focuses on three key areas:

1. Risk Prediction

Predicts likelihood of disruptions in specific areas

2. Dynamic Pricing

Adjusts weekly premium based on risk + behavior

3. Fraud Detection

Uses:

Behavioral analysis

Sensor data

Pattern clustering

⭐ TrustScore (Core Innovation)

Each user is assigned a dynamic score based on:

Work consistency

Movement realism

Historical reliability

👉 Directly impacts premium and payouts.

🧱 System Architecture

Mobile App: React Native

Backend: Node.js (Express)

AI/ML Engine: Python

Database: MongoDB

APIs: Weather API, Maps API

🔒 Adversarial Defense & Anti-Spoofing Strategy
1️⃣ Differentiation: Real vs Fake Users

We move from location-based trust → behavior-based trust

Real Workers

Continuous, natural movement

Irregular work patterns

Active delivery behavior

Fraudulent Actors

Static or unrealistic movement

Sudden location jumps

Repetitive patterns across accounts

👉 AI detects these differences to flag suspicious users.

2️⃣ Multi-Source Data Validation

We validate claims using multiple signals:

Location: GPS continuity, route consistency

Sensors: Accelerometer, speed patterns

Behavior: Work hours, delivery frequency

External: Weather and zone-level disruptions

System: Device fingerprinting, claim history

👉 This makes spoofing significantly harder.

3️⃣ Proof-of-Work Validation ⭐

Claims are tied to actual delivery activity

Workers must show realistic delivery behavior

Fake users cannot replicate this at scale

4️⃣ Zone Consensus Validation

A disruption is validated only if:

Multiple workers in the same area show reduced activity

Delivery volumes drop

👉 Prevents isolated fake claims

5️⃣ Trust Graph (Fraud Ring Detection)

We analyze relationships between users to detect:

Coordinated fraud groups

Synchronized behavior patterns

6️⃣ Confidence-Based Claim Processing
Confidence Level	Action
High	Instant payout
Medium	Partial payout + verification
Low	Flag for review
7️⃣ UX Balance (Fairness)

No immediate bans

Multi-step verification

Manual review for edge cases

👉 We prioritize minimizing false positives to protect genuine users

8️⃣ Economic Defense Layer

Suspicious claims → delayed or reduced payout

Reduces financial incentive for fraud

🛠️ Tech Stack

Frontend: React Native

Backend: Node.js

AI/ML: Python

Database: MongoDB

APIs: Weather API, Maps API

🚀 Development Plan
Phase 1

Ideation and architecture

Phase 2

Core system + AI integration

Phase 3

Advanced fraud detection + optimization

✨ Conclusion

TrustScore is not just an insurance platform — it is a trust-driven system for fair payouts.

By combining:

AI-based risk prediction

Behavioral validation

Multi-layer fraud detection

👉 We ensure a solution that is secure, fair, and scalable for gig workers.

🎥 Demo Video

(Add your video link here)
