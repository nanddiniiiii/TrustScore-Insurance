import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { getRiskScore, calculatePremium } from '../utils/insuranceEngine';
import { useTheme } from '../utils/ThemeContext';

const DashboardScreen = ({ route, navigation }) => {
  const { theme } = useTheme();
  const user = route.params?.user || { name: 'User', city: 'Mumbai', platform: 'Swiggy', hourlyIncome: 100 };
  
  const [risk, setRisk] = useState(0);
  const [premium, setPremium] = useState(0);

  useEffect(() => {
    const fetchRisk = async () => {
      // Fetch specifically for the user's city
      const fetchedRisk = await getRiskScore(user.city);
      setRisk(fetchedRisk);
      // Calculate premium dynamically against their true hourly wage using actuarial risk modeling
      setPremium(calculatePremium(fetchedRisk, user.hourlyIncome));
    };
    fetchRisk();
  }, [user.city, user.hourlyIncome]);

  const simulateDisruption = (type, params = {}) => {
    navigation.navigate('Claim', { simulationType: type, simulationParams: params, user });
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>

      <Text style={[styles.title, { color: theme.text }]}>Dashboard</Text>

      {/* MAIN STATUS */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>

        <Text style={[styles.cardTitle, { color: theme.text }]}>Welcome, {user.name} ({user.platform})</Text>

        <Text style={{ color: theme.text }}>Location: {user.city}</Text>
        <Text style={{ color: theme.text }}>Hourly Income: ₹{user.hourlyIncome}/hr</Text>

        <Text style={{ color: theme.text, marginTop: 10 }}>Coverage Status: <Text style={styles.active}>Active</Text></Text>

        <Text style={styles.highlight}>
          Weekly Premium: ₹{premium.toFixed(0)}
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: theme.card }]}>

        <Text style={[styles.cardTitle, { color: theme.text }]}>Simulate Disruptions</Text>
        <Button
          title="Simulate: Heavy Rain 🌧️"
          onPress={() => simulateDisruption('Heavy Rain')}
          color={theme.button}
        />
        <View style={{ marginVertical: 5 }} />
        <Button
          title="Simulate: High AQI 🌫️"
          onPress={() => simulateDisruption('High AQI')}
          color={theme.button}
        />
        <View style={{ marginVertical: 5 }} />
        <Button
          title="Simulate: Zone Shutdown 🚧"
          onPress={() => simulateDisruption('Zone Shutdown')}
          color={theme.button}
        />
      </View>

      <View style={[styles.card, { backgroundColor: theme.card }]}>

        <Text style={[styles.cardTitle, { color: theme.text }]}>Simulate Fraud Scenarios</Text>
        <Button
          title="Simulate: Route Deviation"
          onPress={() => simulateDisruption('Fraud - Route Deviation', { routeDeviation: 600 })}
          color={theme.button}
        />
        <View style={{ marginVertical: 5 }} />
        <Button
          title="Simulate: Sensor Mismatch"
          onPress={() => simulateDisruption('Fraud - Sensor Mismatch', { sensorMismatch: true })}
          color={theme.button}
        />
        <View style={{ marginVertical: 5 }} />
        <Button
          title="Simulate: Duplicate Device"
          onPress={() => simulateDisruption('Fraud - Duplicate Device', { duplicateDevice: true })}
          color={theme.button}
        />
      </View>

      <View style={{ marginVertical: 10 }} />
      <Button
        title="View Analytics"
        onPress={() => navigation.navigate('Analytics', { user })}
        color={theme.button}
      />
      <View style={{ marginVertical: 20 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4fbf6',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  active: {
    color: 'green',
    fontWeight: 'bold',
  },
  highlight: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  }
});

<<<<<<< HEAD
export default DashboardScreen;
=======
export default DashboardScreen;



 
>>>>>>> a0db61f0f6e9cfaa0ef68efe0c2b5769487388f1
