import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  calculateRiskScore,
  calculateTrustScore,
  calculateWeeklyPremium,
} from '../utils/insuranceEngine';

const DashboardScreen = ({ user, onSimulateDisruption }) => {
  // Mock data for simulation
  const rainfall = 0.6;
  const areaRisk = 0.8;
  const pollution = 0.4;
  const movementConsistency = 85;
  const workActivity = 80;
  const claimHistory = 90;
  const deviceReliability = 75;

  const riskScore = calculateRiskScore(rainfall, areaRisk, pollution);
  const trustScore = calculateTrustScore(
    movementConsistency,
    workActivity,
    claimHistory,
    deviceReliability
  );
  const weeklyPremium = calculateWeeklyPremium(riskScore, trustScore);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>TrustScore</Text>
        <Text style={styles.score}>{trustScore.toFixed(0)}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>RiskScore</Text>
        <Text style={styles.score}>{riskScore.toFixed(2)}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Weekly Premium</Text>
        <Text style={styles.premium}>₹{weeklyPremium.toFixed(2)}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Coverage</Text>
        <Text style={styles.status}>Active</Text>
      </View>
      <View style={styles.info}>
        <Text>{user.name}</Text>
        <Text>{user.city} | {user.platform}</Text>
      </View>
      <Button title="Simulate Heavy Rain" onPress={() => onSimulateDisruption('Heavy Rain', 1.0)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4fbf6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    color: '#555',
  },
  score: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  premium: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#c62828',
  },
  status: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  info: {
    alignItems: 'center',
    marginVertical: 15,
  }
});

export default DashboardScreen;



 