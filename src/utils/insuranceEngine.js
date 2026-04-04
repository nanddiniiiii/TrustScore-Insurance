// ---------------- RISK SCORE (FROM ML) ----------------
export async function getRiskScore(city = 'Mumbai') {
  try {
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ city }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.risk_probability || 0;
  } catch (error) {
    console.error("Failed to fetch risk score:", error);
    // Return a default/fallback risk score in case of API failure
    return 0.5;
  }
}

// ---------------- TELEMETRY SERVER SYNC ----------------
export async function getLiveTelemetry(user) {
  try {
    const response = await fetch('http://127.0.0.1:5000/sync-telemetry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        city: user.city,
        name: user.name,
        platform: user.platform
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.telemetry;
    }
  } catch (error) {
    console.warn("Telemetry offline, falling back to cached profile.", error);
  }
  
  // Offline hackathon backup so the app never crashes during demo
  return {
    zone: { activeUsers: 80, avgActivity: 65 },
    history: { historyScore: 78, gpsConsistency: 90, activityLevel: 80 },
    baselines: { speedVariance: 20, routeDeviation: 100 }
  };
}

// ---------------- TRUST SCORE ----------------
export function getTrustScore({ gpsConsistency, activityLevel, historyScore }) {
  return (
    gpsConsistency * 0.4 +
    activityLevel * 0.3 +
    historyScore * 0.3
  );
}

// ---------------- BEHAVIOR SCORE ----------------
export function getBehaviorScore({ speedVariance, routeDeviation }) {
  let score = 100;

  if (speedVariance > 50) score -= 30;
  if (routeDeviation > 500) score -= 30;

  return Math.max(score, 0);
}

// ---------------- FRAUD DETECTION ----------------
export function detectFraud({
  speed,
  gpsJump,
  sensorMismatch,
  duplicateDevice
}) {
  let flags = [];

  if (gpsJump > 1000) flags.push("GPS Jump Detected");
  if (speed > 120) flags.push("Unrealistic Speed");
  if (sensorMismatch) flags.push("Sensor Mismatch");
  if (duplicateDevice) flags.push("Duplicate Device");

  return {
    isFraud: flags.length > 0,
    reasons: flags
  };
}

// ---------------- ZONE CONSENSUS ----------------
export function getZoneScore({ activeUsers, avgActivity }) {
  return activeUsers * 0.6 + avgActivity * 0.4;
}

// ---------------- CONFIDENCE ENGINE ----------------
export function getConfidenceScore({
  trust,
  behavior,
  zone,
  fraud
}) {
  let confidence =
    trust * 0.4 +
    behavior * 0.2 +
    zone * 0.3;

  if (fraud.isFraud) confidence -= 30;

  return Math.max(0, confidence);
}

// ---------------- PREMIUM ----------------
export function calculatePremium(risk, hourlyIncome) {
  // Assuming a standard 40-hour work week, we calculate base earnings
  const weeklyEarnings = hourlyIncome * 40;
  // A dynamic base rate of 1% scaling up to an additional 5% based strictly on AI environmental risk
  const dynamicRate = 0.01 + (risk * 0.05);
  
  return Math.round(weeklyEarnings * dynamicRate);
}

// ---------------- INCOME LOSS ----------------
export function calculateIncomeLoss({ hoursLost, hourlyRate }) {
  return hoursLost * hourlyRate;
}

// ---------------- INTENSITY BASED PAYOUT ----------------
export function calculatePayout({
  confidence,
  risk,
  incomeLoss
}) {
  const intensityFactor = risk;

  if (confidence > 75)
    return incomeLoss * intensityFactor;

  if (confidence > 50)
    return incomeLoss * intensityFactor * 0.7;

  return 0;
}

// ---------------- DECISION LABEL ----------------
export function getDecision(confidence) {
  if (confidence > 75) return "Instant Payout";
  if (confidence > 50) return "Partial + Verify";
  return "Flagged for Review";
}

// ---------------- TRUST BREAKDOWN (WOW) ----------------
export function getTrustBreakdown(inputs) {
  return {
    gpsImpact: inputs.gpsConsistency * 0.4,
    activityImpact: inputs.activityLevel * 0.3,
    historyImpact: inputs.historyScore * 0.3
  };
}
