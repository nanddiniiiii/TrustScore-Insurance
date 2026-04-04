import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ClaimScreen from './src/screens/ClaimScreen';
import AnalyticsScreen from './src/screens/AnalyticsScreen';
import { ThemeProvider, useTheme } from './src/utils/ThemeContext';

const Stack = createStackNavigator();

const ThemedApp = ({ user }) => {
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.card },
          headerTintColor: theme.text,
          headerRight: () => (
            <Button
              onPress={toggleTheme}
              title={isDarkMode ? '☀️' : '🌙'}
              color={theme.button}
            />
          ),
        }}
      >
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          initialParams={{ user }} 
        />
        <Stack.Screen 
          name="Claim" 
          component={ClaimScreen} 
          options={{ title: 'Claim Details' }} 
          initialParams={{ user }} 
        />
        <Stack.Screen 
          name="Analytics" 
          component={AnalyticsScreen} 
          initialParams={{ user }} 
        />
      </Stack.Navigator>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
    </NavigationContainer>
  );
};

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  if (!user) {
    return (
      <ThemeProvider>
        <LoginScreen onLogin={handleLogin} />
      </ThemeProvider>
    );
  }

  return (
<<<<<<< HEAD
    <ThemeProvider>
      <ThemedApp user={user} />
    </ThemeProvider>
=======
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
>>>>>>> a0db61f0f6e9cfaa0ef68efe0c2b5769487388f1
  );
}
