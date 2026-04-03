import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StatefulCounterScreen = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.title}>Mode Stateful</Text>
      <Text style={sharedStyles.subtitle}>Gestionnaire interne</Text>
      
      <View style={sharedStyles.card}>
        <Ionicons name="analytics-outline" size={40} color="#8892b0" style={{ marginBottom: 15 }} />
        <Text style={{ ...sharedStyles.title, fontSize: 64, color: '#00FFFF', marginBottom: 0 }}>{count}</Text>
      </View>

      <TouchableOpacity style={[sharedStyles.button, { justifyContent: 'center' }]} onPress={increment}>
        <Ionicons name="chevron-up-outline" size={24} color="#00FFFF" />
        <Text style={sharedStyles.buttonText}>Augmenter</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[sharedStyles.button, { justifyContent: 'center', borderColor: '#ff4d4d' }]} onPress={decrement}>
        <Ionicons name="chevron-down-outline" size={24} color="#ff4d4d" />
        <Text style={[sharedStyles.buttonText, { color: '#ff4d4d' }]}>Diminuer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StatefulCounterScreen;
