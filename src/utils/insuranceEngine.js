export const calculateRiskScore = (rainfall, areaRisk, pollution) => {
  const riskScore = (0.5 * rainfall) + (0.3 * areaRisk) + (0.2 * pollution);
  return Math.min(Math.max(riskScore, 0), 1); 
};

export const calculateTrustScore = (movementConsistency, workActivity, claimHistory, deviceReliability) => {
  const trustScore = (0.4 * movementConsistency) + (0.3 * workActivity) + (0.2 * claimHistory) + (0.1 * deviceReliability);
  return Math.min(Math.max(trustScore, 0), 100);
};

export const calculateWeeklyPremium = (riskScore, trustScore) => {
  const premium = 20 + (riskScore * 40) - (trustScore * 0.2);
  return Math.max(premium, 0);
};

export const calculateIncomeLoss = (hourlyIncome, hoursLost) => {
  return hourlyIncome * hoursLost;
};

export const getPayoutDecision = (trustScore, incomeLoss, intensityFactor) => {
  let confidence = 0;
  let decision = "Rejected";

  if (trustScore > 80) {
    confidence = 1.0;
    decision = "Approved";
  } else if (trustScore >= 60) {
    confidence = 0.7;
    decision = "Partially Approved";
  }

  const payout = incomeLoss * confidence * intensityFactor;
  return { decision, payout, confidence };
};
