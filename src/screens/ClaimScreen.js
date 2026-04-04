<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../utils/ThemeContext';

import {
  getRiskScore,
  getTrustScore,
  getBehaviorScore,
  detectFraud,
  getZoneScore,
  getConfidenceScore,
  calculateIncomeLoss,
  calculatePayout,
  getDecision,
  getTrustBreakdown,
  getLiveTelemetry
} from '../utils/insuranceEngine';

const ClaimScreen = ({ route }) => {
  const { theme } = useTheme();
  
  // Extract user and simulation details conditionally passed from the Navigation Stack
  const user = route.params?.user || { name: 'User', city: 'Mumbai', platform: 'Swiggy', hourlyIncome: 120 };
  const { simulationType, simulationParams } = route.params || {};

  const [risk, setRisk] = useState(0);
  const [telemetry, setTelemetry] = useState(null);

  useEffect(() => {
    // Call our Python AI endpoints dynamically
    getRiskScore(user.city).then(setRisk);
    getLiveTelemetry(user).then(setTelemetry);
  }, [user.city, user.name]);

  if (!telemetry) {
    return <Text style={{ padding: 50, textAlign: 'center', fontSize: 20 }}>Syncing AI Telemetry Engine...</Text>;
=======
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ClaimScreen = ({ claim }) => {
  if (!claim) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>No active claim.</Text>
      </View>
    );
>>>>>>> a0db61f0f6e9cfaa0ef68efe0c2b5769487388f1
  }

  // ---------------- STREAMED REAL-TIME SENSOR DATA (Via Python Flask) ----------------
  const trustInputs = {
    gpsConsistency: simulationParams?.gpsConsistency || telemetry.history.gpsConsistency,
    activityLevel: simulationParams?.activityLevel || telemetry.history.activityLevel,
    // Database lookup simulation: deterministic generated score tied entirely to the user's name hook!
    historyScore: simulationParams?.historyScore || telemetry.history.historyScore, 
  };

  const speedVariance = simulationParams?.speedVariance || telemetry.baselines.speedVariance;
  const routeDeviation = simulationParams?.routeDeviation || telemetry.baselines.routeDeviation;

  const speed = simulationParams?.speed || 60;
  const gpsJump = simulationParams?.gpsJump || 0;
  const sensorMismatch = simulationParams?.sensorMismatch || false;
  const duplicateDevice = simulationParams?.duplicateDevice || false;

  const activeUsers = telemetry.zone.activeUsers;
  const avgActivity = telemetry.zone.avgActivity;

  // ---------------- DYNAMIC FINANCIALS ----------------
  // PARAMETRIC ALGORITHM: No hard assumptions! 
  // We calculate their expected daily shift duration strictly from their AI History Activity Level.
  const averageDailyHours = telemetry.history.activityLevel / 10; // e.g. 85 activity = 8.5 hours shift

  let hoursLost = 0;
  const rainfallMm = parseFloat(telemetry.live_weather_impact) || 0; // Parses "15mm rain" -> 15

  if (simulationType === 'Zone Shutdown') {
    // A zone shutdown writes off their personal entire daily shift
    hoursLost = averageDailyHours; 
  } else if (simulationType === 'Heavy Rain') {
    // Scales dynamically with the exact millimeters of live rain from OpenWeatherMap! 
    const weatherSeverity = (rainfallMm * 0.5); // Assuming Every 2mm of rain = 1 hour lost
    hoursLost = rainfallMm > 0 ? Math.min(weatherSeverity, averageDailyHours) : (averageDailyHours * 0.3); // sunny fallback penalty
  } else if (simulationType === 'High AQI') {
    // High AQI drives users offline. We scale loss inversely to the current active workers in the zone!
    const userDropoff = 1 - (telemetry.zone.activeUsers / 200); 
    hoursLost = averageDailyHours * Math.max(0.1, userDropoff);
  } else if (simulationType?.includes('Fraud')) {
    // The system assumes anomalous actors try to claim their full day's maximum wages
    hoursLost = averageDailyHours; 
  }

  hoursLost = parseFloat(hoursLost.toFixed(1)); // Clean to 1 decimal place (e.g., 4.2 hours)

  // Here we dynamically pull YOUR exact typing from the Login Screen!
  const hourlyRate = user.hourlyIncome;

  // ---------------- CORE ENGINE ----------------
  const trust = getTrustScore(trustInputs);

  const trustBreakdown = getTrustBreakdown(trustInputs);

  const behavior = getBehaviorScore({
    speedVariance,
    routeDeviation
  });

  const fraud = detectFraud({
    speed,
    gpsJump,
    sensorMismatch,
    duplicateDevice
  });

  const zone = getZoneScore({
    activeUsers,
    avgActivity
  });

  const confidence = getConfidenceScore({
    trust,
    behavior,
    zone,
    fraud
  });

  const incomeLoss = calculateIncomeLoss({
    hoursLost,
    hourlyRate
  });

  const payout = calculatePayout({
    confidence,
    risk,
    incomeLoss
  });

  const decision = getDecision(confidence);

  return (
<<<<<<< HEAD
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}> 
      <Text style={[styles.title, { color: theme.text }]}>Claim Details</Text>
      {simulationType && <Text style={[styles.subtitle, { color: theme.text }]}>Triggered by: {simulationType}</Text>}
      
      <View style={[styles.card, { backgroundColor: theme.card }]}> 
        <Text style={[styles.cardTitle, { color: theme.text }]}>Payout Decision: {decision}</Text>

        <Text style={{ color: theme.text }}>TrustScore: {trust.toFixed(0)}</Text>
        <Text style={{ color: theme.text }}>Behavior Score: {behavior.toFixed(0)}</Text>
        <Text style={{ color: theme.text }}>Zone Score: {zone.toFixed(0)}</Text>

        <Text style={[styles.highlight, { color: theme.text }]}>
          Confidence: {confidence.toFixed(0)}
        </Text>

        <Text style={[styles.highlight, { color: theme.text }]}>
          Decision: {decision}
        </Text>

        <Text style={{ color: theme.text }}>Estimated Loss: ₹{incomeLoss}</Text>

        <Text style={{ color: theme.text, marginTop: 10, fontWeight: 'bold' }}>Final Payout: ₹{payout.toFixed(0)}</Text>
      </View>
      <View style={[styles.card, { backgroundColor: theme.card }]}> 
        <Text style={[styles.cardTitle, { color: theme.text }]}>Fraud Analysis</Text>

        <Text style={{ color: theme.text }}>Status: {fraud.isFraud ? "⚠️ Suspicious" : "✅ Clean"}</Text>

        {fraud.reasons.map((r, i) => (
          <Text style={{ color: theme.text }} key={i}>• {r}</Text>
        ))}
      </View>
      <View style={[styles.card, { backgroundColor: theme.card }]}> 
        <Text style={[styles.cardTitle, { color: theme.text }]}>Trust Breakdown (Explainability)</Text>

        <Text style={{ color: theme.text }}>GPS Impact: {trustBreakdown.gpsImpact.toFixed(0)}</Text>
        <Text style={{ color: theme.text }}>Activity Impact: {trustBreakdown.activityImpact.toFixed(0)}</Text>
        <Text style={{ color: theme.text }}>History Impact: {trustBreakdown.historyImpact.toFixed(0)}</Text>
      </View>
=======
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>AI Claim Decision Center</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Disruption</Text>
        <Text style={styles.value}>{trigger}</Text>

        <Text style={styles.label}>Income Loss</Text>
        <Text style={styles.value}>₹{incomeLoss.toFixed(2)}</Text>

        <Text style={styles.label}>TrustScore</Text>
        <Text style={styles.value}>{trustScore.toFixed(0)}</Text>

        <Text style={styles.label}>Decision</Text>
        <Text
          style={
            decision === 'Approved'
              ? styles.approved
              : styles.rejected
          }
        >
          {decision}
        </Text>

        <Text style={styles.label}>Payout</Text>
        <Text style={styles.payout}>₹{payout.toFixed(2)}</Text>
      </View>

      <View style={styles.explanationCard}>
        <Text style={styles.explanationTitle}>Confidence Engine Explanation</Text>

        {explanation.map((item, index) => (
          <Text
            key={index}
            style={item.success ? styles.success : styles.fail}
          >
            {item.success ? '✔' : '✖'} {item.reason}
          </Text>
        ))}
      </View>
>>>>>>> a0db61f0f6e9cfaa0ef68efe0c2b5769487388f1
    </ScrollView>
  );
};

// ---------------- STYLES ----------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    padding: 20,
=======
>>>>>>> a0db61f0f6e9cfaa0ef68efe0c2b5769487388f1
    backgroundColor: '#f4fbf6',
    padding: 15,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
    color: '#666',
  },
  title: {
<<<<<<< HEAD
    fontSize: 26,
=======
    fontSize: 24,
>>>>>>> a0db61f0f6e9cfaa0ef68efe0c2b5769487388f1
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
<<<<<<< HEAD
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  payout: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  }
=======
    marginVertical: 15,
    color: '#1B5E20',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 18,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  payout: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1565C0',
  },
  approved: {
    color: '#1B5E20',
    fontWeight: 'bold',
    fontSize: 20,
  },
  rejected: {
    color: '#C62828',
    fontWeight: 'bold',
    fontSize: 20,
  },
  explanationCard: {
    backgroundColor: '#FFF8E1',
    borderRadius: 14,
    padding: 18,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#FFE082',
  },
  explanationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D46B08',
    marginBottom: 10,
  },
  success: {
    color: '#1B5E20',
    fontSize: 15,
    marginVertical: 3,
  },
  fail: {
    color: '#C62828',
    fontSize: 15,
    marginVertical: 3,
  },
>>>>>>> a0db61f0f6e9cfaa0ef68efe0c2b5769487388f1
});

export default ClaimScreen;