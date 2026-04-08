import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StatefulCounterScreen = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <ScrollView contentContainerStyle={sharedStyles.container}>
      <Ionicons name="infinite-outline" size={60} color="#00FFFF" style={{ marginBottom: 10 }} />
      <Text style={sharedStyles.title}>Compteur Stateful</Text>
      <Text style={sharedStyles.subtitle}>Gestion d'état locale avec `useState`</Text>
      
      <View style={sharedStyles.card}>
        <Ionicons name="analytics-outline" size={30} color="#8892b0" style={{ marginBottom: 10 }} />
        <Text style={sharedStyles.counterValue}>{count}</Text>
      </View>

      <View style={{ width: '100%', alignItems: 'center' }}>
        <TouchableOpacity style={[sharedStyles.button, { justifyContent: 'center' }]} onPress={increment}>
          <Ionicons name="add-outline" size={24} color="#00FFFF" />
          <Text style={sharedStyles.buttonText}>Incrémenter (+)</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[sharedStyles.button, { justifyContent: 'center', borderColor: '#ff4d4d' }]} onPress={decrement}>
          <Ionicons name="remove-outline" size={24} color="#ff4d4d" />
          <Text style={[sharedStyles.buttonText, { color: '#ff4d4d' }]}>Décrémenter (-)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={sharedStyles.resetButton} onPress={reset}>
           <Text style={sharedStyles.resetButtonText}>RÉINITIALISER</Text>
        </TouchableOpacity>
      </View>

      <View style={[sharedStyles.card, { marginTop: 40, padding: 15 }]}>
        <Text style={[sharedStyles.text, { fontSize: 13, textAlign: 'center' }]}>
          Ici, la valeur `count` change et React redessine le composant automatiquement.
        </Text>
      </View>
    </ScrollView>
  );
};

export default StatefulCounterScreen;
