import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnalyticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analytics</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Earnings Protected</Text>
        <Text style={styles.data}>₹1,250</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Premiums Paid</Text>
        <Text style={styles.data}>₹152</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Last Payout</Text>
        <Text style={styles.data}>₹360</Text>
      </View>
      <View style={styles.fraudCard}>
        <Text style={styles.fraudTitle}>Fraud Radar</Text>
        <Text>Fraud Risk: LOW</Text>
        <Text>Suspicious Activity: NONE</Text>
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
  },
  cardTitle: {
    fontSize: 16,
    color: '#555',
  },
  data: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  fraudCard: {
    backgroundColor: '#fffbe6',
    borderColor: '#ffe58f',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
  },
  fraudTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d46b08',
  }
});

export default AnalyticsScreen;
