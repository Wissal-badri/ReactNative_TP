import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StatelessCounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.title}>Mode Stateless</Text>
      <Text style={sharedStyles.subtitle}>Composant Parent</Text>
      
      <StatelessDisplay count={count} />
      
      <TouchableOpacity style={[sharedStyles.button, { justifyContent: 'center' }]} onPress={() => setCount(count + 1)}>
        <Ionicons name="add-circle-outline" size={24} color="#00FFFF" />
        <Text style={sharedStyles.buttonText}>Incrémenter la valeur</Text>
      </TouchableOpacity>
    </View>
  );
};

const StatelessDisplay = ({ count }: { count: number }) => {
  return (
    <View style={sharedStyles.card}>
      <Ionicons name="layers-outline" size={40} color="#8892b0" style={{ marginBottom: 15 }} />
      <Text style={sharedStyles.text}>Je suis un composant enfant recevant la donnée par Props.</Text>
      <Text style={{ ...sharedStyles.title, fontSize: 48, color: '#00FFFF', marginTop: 20 }}>{count}</Text>
    </View>
  );
};

export default StatelessCounterScreen;
