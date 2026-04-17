import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../utils/ThemeContext';
import { useUser } from '../utils/UserContext';

const LoginScreen = () => {
  const { theme } = useTheme();
  const { setUser } = useUser();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [platform, setPlatform] = useState('');
  const [income, setIncome] = useState('');

  const handleLogin = () => {
    if (name && city && platform && income) {
      setUser({
        name,
        city,
        platform,
        hourlyIncome: parseFloat(income),
      });
    }
  };

  return (
    <ScrollView style={{ backgroundColor: theme.background }}>
      <View style={styles.container}>
        <Text style={[styles.title, { color: theme.text }]}>
          TrustScore Insurance
        </Text>

        <TextInput
          style={[styles.input, { color: theme.text, borderColor: theme.subtext }]}
          placeholder="Name"
          placeholderTextColor={theme.subtext}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={[styles.input, { color: theme.text, borderColor: theme.subtext }]}
          placeholder="City"
          placeholderTextColor={theme.subtext}
          value={city}
          onChangeText={setCity}
        />

        <TextInput
          style={[styles.input, { color: theme.text, borderColor: theme.subtext }]}
          placeholder="Platform (Swiggy/Zomato)"
          placeholderTextColor={theme.subtext}
          value={platform}
          onChangeText={setPlatform}
        />

        <TextInput
          style={[styles.input, { color: theme.text, borderColor: theme.subtext }]}
          placeholder="Hourly Income (₹)"
          placeholderTextColor={theme.subtext}
          value={income}
          onChangeText={setIncome}
          keyboardType="numeric"
        />

        <Button title="Register" onPress={handleLogin} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8
  }
});

export default LoginScreen;