import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [platform, setPlatform] = useState('');
  const [income, setIncome] = useState('');

  const handleLogin = () => {
    if (name && city && platform && income) {
      onLogin({
        name,
        city,
        platform,
        hourlyIncome: parseFloat(income),
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TrustScore</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Platform (e.g., Swiggy, Zomato)"
        value={platform}
        onChangeText={setPlatform}
      />
      <TextInput
        style={styles.input}
        placeholder="Average Hourly Income (₹)"
        value={income}
        onChangeText={setIncome}
        keyboardType="numeric"
      />
      <Button title="Register" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4fbf6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default LoginScreen;
