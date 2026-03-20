🧠 TrustScore
Proof-of-Work Based Parametric Insurance for Gig Workers
🚨 Problem

Delivery partners form the backbone of India’s gig economy, yet their income is highly unstable. External disruptions such as heavy rain, floods, extreme heat, or pollution can suddenly halt deliveries — cutting off their daily earnings.

Current parametric insurance solutions attempt to address this, but they rely heavily on GPS-based validation, which is easy to manipulate. This makes them vulnerable to large-scale fraud, where attackers spoof locations and trigger false payouts.

👉 The real challenge is not just insuring workers, but building a system that can distinguish genuine claims from fraudulent ones at scale.

👤 User Persona

Ravi, 23 — Swiggy Delivery Partner

Works 8–12 hours daily

Income depends entirely on completed deliveries

Faces frequent income loss during heavy rain or floods

Needs fast, reliable, and fair compensation

💡 Proposed Solution

We propose TrustScore, an AI-powered parametric insurance platform designed specifically for delivery workers.

Instead of relying only on location, our system introduces behavior-based verification, ensuring payouts are given only when real-world activity aligns with disruption conditions.

Key Capabilities

Detect real-world disruptions using external data

Track delivery activity patterns

Automatically trigger payouts

Prevent fraud using multi-layer verification

👉 Core Idea:
Shift from “Where are you?” → to “Are you actually working like a real delivery partner?”

🔄 Workflow

User registers and selects coverage

System continuously monitors:

Weather / environmental conditions

Worker activity patterns

AI calculates risk and weekly premium

When disruption occurs:

Claim is automatically triggered

Fraud detection runs in parallel

Based on confidence score:

Payout is processed

💰 Weekly Premium Model

Premium is dynamically calculated based on:

Location risk (e.g., flood-prone zones)

Worker activity levels

Historical claims

TrustScore (behavior reliability)

👉 Weekly pricing aligns with gig workers’ earning cycles.

⚡ Parametric Triggers

Rainfall exceeding threshold

Flood alerts

AQI beyond safe limits

Zone-level drop in delivery activity

🤖 AI & Intelligence Layer
1. Risk Prediction

Predicts likelihood of disruptions in specific areas

2. Dynamic Pricing

Adjusts weekly premium based on risk + behavior

3. Fraud Detection

Behavioral analysis

Sensor data

Pattern clustering

4. TrustScore System ⭐

Work consistency

Movement realism

Historical reliability

👉 Directly influences premium and payout decisions

🧱 System Architecture

Mobile App: React Native

Backend: Node.js (Express)

AI/ML Engine: Python

Database: MongoDB

APIs: Weather API, Maps API

🔒 Adversarial Defense & Anti-Spoofing Strategy
1️⃣ Differentiation: Real vs Fake Workers

We move from location-based trust → behavior-based trust

Real Workers

Continuous and natural movement

Irregular working patterns

Active delivery behavior

Fraudulent Actors

Static or unrealistic movement

Sudden location jumps

Repetitive patterns across accounts

2️⃣ Data Used Beyond GPS
📍 Location Data

GPS continuity

Route consistency

📱 Sensor Data

Accelerometer (movement detection)

Speed patterns

⏱️ Behavioral Data

Work hours

Delivery frequency

Break patterns

🌦️ External Data

Weather APIs

Zone-level disruption signals

📊 System Data

Device fingerprinting

Duplicate accounts

Historical claim patterns

3️⃣ Proof-of-Work Validation ⭐

Claims are validated using actual delivery activity patterns

Workers must demonstrate realistic behavior

Fake users cannot replicate delivery patterns at scale

4️⃣ Zone Consensus Validation

Disruptions are validated at a community level

Multiple workers in same area must show reduced activity

Delivery volume must drop

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
7️⃣ UX Balance (Protecting Genuine Workers)

No immediate bans

Multi-step verification

Manual review for edge cases

👉 We prioritize minimizing false positives to protect genuine delivery partners

8️⃣ Economic Defense Layer

Suspicious claims → delayed or reduced payout

Makes fraud financially unattractive

🛠️ Tech Stack
Layer	Technology
Frontend	React Native
Backend	Node.js
AI/ML	Python
Database	MongoDB
APIs	Weather API, Maps API
🚀 Development Plan
Phase 1

Ideation and architecture design

Phase 2

Core system development

AI model integration

Phase 3

Advanced fraud detection

Optimization and scaling

✨ Conclusion

TrustScore is not just an insurance platform — it is a trust-driven system for fair payouts.

By combining:

AI-based risk prediction

Behavioral validation

Multi-layer fraud detection

👉 We ensure a solution that is secure, fair, and scalable for gig workers.

🎥 Demo Video

(Add your video link here)
