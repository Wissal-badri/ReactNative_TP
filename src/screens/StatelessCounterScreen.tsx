import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Composant Enfant - Sans État (Stateless)
const CounterDisplay = ({ value }: { value: number }) => {
  return (
    <View style={sharedStyles.card}>
      <Text style={sharedStyles.subtitle}>Je suis un composant Stateless</Text>
      <Text style={[sharedStyles.text, { marginBottom: 15 }]}>Je ne gère pas ma donnée moi-même.</Text>
      <Text style={sharedStyles.counterValue}>{value}</Text>
    </View>
  );
};

// Composant Parent - Gère l'état
const StatelessCounterScreen = () => {
  const [count, setCount] = useState(10); // Valeur de départ différente

  const increment = () => setCount((prev) => prev + 1);

  return (
    <ScrollView contentContainerStyle={sharedStyles.container}>
      <Ionicons name="apps-outline" size={60} color="#00FFFF" style={{ marginBottom: 10 }} />
      <Text style={sharedStyles.title}>Compteur Stateless</Text>
      <Text style={sharedStyles.subtitle}>La donnée est reçue via les Props</Text>
      
      <CounterDisplay value={count} />

      <TouchableOpacity style={sharedStyles.button} onPress={increment}>
        <Ionicons name="refresh-outline" size={24} color="#00FFFF" />
        <Text style={sharedStyles.buttonText}>Incrémenter (depuis le parent)</Text>
      </TouchableOpacity>
      
      <View style={[sharedStyles.card, { marginTop: 40, padding: 15, borderColor: '#ffd700' }]}>
        <Text style={[sharedStyles.text, { fontSize: 13, textAlign: 'center', color: '#ffd700' }]}>
          Remarquez que le composant enfant (`CounterDisplay`) ne connaît pas le `useState`. Il affiche juste `value`.
        </Text>
      </View>
    </ScrollView>
  );
};

export default StatelessCounterScreen;
