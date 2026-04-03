import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const AnalyticsScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>TrustScore Analytics</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Earnings Protected</Text>
        <Text style={styles.data}>₹1,250</Text>
        <Text style={styles.subText}>Auto-claimed during disruptions</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Premiums Paid</Text>
        <Text style={styles.data}>₹152</Text>
        <Text style={styles.subText}>Weekly smart premium model</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Last Payout</Text>
        <Text style={styles.data}>₹1,500</Text>
        <Text style={styles.subText}>Heavy Rain disruption payout</Text>
      </View>

      <View style={styles.fraudCard}>
        <Text style={styles.fraudTitle}>AI Fraud Radar</Text>
        <Text style={styles.fraudText}>Fraud Risk: LOW ✅</Text>
        <Text style={styles.fraudText}>Suspicious Activity: NONE</Text>
        <Text style={styles.fraudText}>Confidence Engine: 96%</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fbf6',
  },
  scrollContent: {
    padding: 15,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#1b5e20',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 18,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
  },
  data: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#222',
  },
  subText: {
    marginTop: 5,
    color: '#888',
    fontSize: 13,
  },
  fraudCard: {
    backgroundColor: '#fffbe6',
    borderColor: '#ffe58f',
    borderWidth: 1,
    borderRadius: 12,
    padding: 18,
    marginVertical: 12,
    elevation: 2,
  },
  fraudTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d46b08',
    marginBottom: 8,
  },
  fraudText: {
    fontSize: 15,
    marginVertical: 2,
    color: '#444',
  },
});

export default AnalyticsScreen;