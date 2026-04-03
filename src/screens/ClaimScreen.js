import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ClaimScreen = ({ claim }) => {
  if (!claim) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>No active claim.</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
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
});

export default ClaimScreen;