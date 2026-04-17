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
import { UserProvider, useUser } from './src/utils/UserContext';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const { user } = useUser();

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
        {user ? (
          <>
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
          </>
        ) : (
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </UserProvider>
  );
}
