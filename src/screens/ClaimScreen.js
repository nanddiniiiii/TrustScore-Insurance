import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClaimScreen = ({ claim }) => {
  if (!claim) {
    return (
      <View style={styles.container}>
        <Text>No active claim.</Text>
      </View>
    );
  }

  const {
    trigger,
    incomeLoss,
    trustScore,
    decision,
    payout,
    explanation,
  } = claim;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Claim Details</Text>
      <View style={styles.card}>
        <Text>Disruption: {trigger}</Text>
        <Text>Income Loss: ₹{incomeLoss.toFixed(2)}</Text>
        <Text>TrustScore: {trustScore.toFixed(0)}</Text>
        <Text style={decision === 'Approved' ? styles.approved : styles.rejected}>
          Decision: {decision}
        </Text>
        <Text>Payout: ₹{payout.toFixed(2)}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Explanation</Text>
        {explanation.map((item, index) => (
          <Text key={index} style={item.success ? styles.success : styles.fail}>
            {item.success ? '✔' : '✖'} {item.reason}
          </Text>
        ))}
      </View>
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
  },
  approved: {
    color: 'green',
    fontWeight: 'bold',
  },
  rejected: {
    color: 'red',
    fontWeight: 'bold',
  },
  success: {
    color: 'green',
  },
  fail: {
    color: 'red',
  },
});

export default ClaimScreen;
