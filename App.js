import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ClaimScreen from './src/screens/ClaimScreen';
import AnalyticsScreen from './src/screens/AnalyticsScreen';
import {
  calculateIncomeLoss,
  getPayoutDecision,
  calculateTrustScore,
} from './src/utils/insuranceEngine';

const Tab = createBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [claim, setClaim] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleSimulateDisruption = (trigger, intensityFactor) => {
    const hoursLost = 3; // Simulate 3 hours of lost work
    const incomeLoss = calculateIncomeLoss(user.hourlyIncome, hoursLost);

    const trustScore = calculateTrustScore(85, 80, 90, 75); // Mock values
    const { decision, payout } = getPayoutDecision(
      trustScore,
      incomeLoss,
      intensityFactor
    );

    const explanation = [
      { reason: 'Movement consistent', success: true },
      { reason: 'Matches disruption zone', success: true },
      { reason: 'No suspicious device activity', success: true },
    ];

    setClaim({
      trigger,
      incomeLoss,
      trustScore,
      decision,
      payout,
      explanation,
    });
  };

  if (!user) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard">
  {({ navigation }) => (
    <DashboardScreen
      user={user}
      onSimulateDisruption={(trigger, intensityFactor) => {
        handleSimulateDisruption(trigger, intensityFactor);
        navigation.navigate("Claim");
      }}
    />
  )}
</Tab.Screen>
        <Tab.Screen name="Claim">
          {() => <ClaimScreen claim={claim} />}
        </Tab.Screen>
        <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
