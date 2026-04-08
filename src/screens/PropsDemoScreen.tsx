import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';
import MyCustomComponent from '../components/MyCustomComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PropsDemoScreen = () => {
  return (
    <ScrollView contentContainerStyle={[sharedStyles.container, { paddingVertical: 40 }]}>
      <Ionicons name="git-network-outline" size={60} color="#00FFFF" style={{ marginBottom: 10 }} />
      <Text style={sharedStyles.title}>Utilisation des Props</Text>
      <Text style={sharedStyles.subtitle}>Passage de données d'un parent à un enfant</Text>
      
      <View style={sharedStyles.card}>
        <Text style={sharedStyles.text}>Les Props (Propriétés) permettent d'envoyer des données et des comportements (fonctions) à des composants enfants.</Text>
      </View>

      <Text style={[sharedStyles.subtitle, { alignSelf: 'flex-start', marginLeft: 10, marginTop: 20 }]}>Exemples de Props :</Text>
      
      <MyCustomComponent 
        title="Donnée dynamique 1" 
        description="Cette valeur vient du fichier PropsDemoScreen.tsx."
        color="#00FFFF"
      />

      <MyCustomComponent 
        title="Donnée dynamique 2" 
        description="On change la couleur de la bordure via une prop `color`."
        color="#ffd700"
      />

      <View style={[sharedStyles.card, { marginTop: 20, backgroundColor: 'rgba(255, 105, 180, 0.1)', borderColor: '#ff69b4' }]}>
        <Text style={[sharedStyles.text, { color: '#ff69b4' }]}>Note : Les props sont en lecture seule (read-only).</Text>
      </View>

    </ScrollView>
  );
};

export default PropsDemoScreen;
