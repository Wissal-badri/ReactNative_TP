import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StatesDemoScreen = () => {
  const [name, setName] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <ScrollView contentContainerStyle={[sharedStyles.container, { paddingVertical: 40 }]}>
      <Ionicons name="flash-outline" size={60} color="#00FFFF" style={{ marginBottom: 10 }} />
      <Text style={sharedStyles.title}>Gestion des States</Text>
      <Text style={sharedStyles.subtitle}>Utilisation du Hook `useState`</Text>
      
      <View style={sharedStyles.card}>
        <Text style={sharedStyles.text}>Les états (States) permettent de gérer les changements de données dynamiques dans React Native.</Text>
      </View>

      <Text style={[sharedStyles.subtitle, { alignSelf: 'flex-start', marginLeft: 10, marginTop: 20 }]}>1. Input State (Texte) :</Text>
      <TextInput 
        style={sharedStyles.input}
        placeholder="Tapez quelque chose ici..."
        placeholderTextColor="#8892b0"
        value={name}
        onChangeText={setName}
      />
      
      {name !== '' && (
        <View style={sharedStyles.card}>
          <Text style={sharedStyles.subtitle}>Vous avez écrit :</Text>
          <Text style={[sharedStyles.title, { color: '#00FFFF', fontSize: 24, marginBottom: 0 }]}>{name}</Text>
        </View>
      )}

      <Text style={[sharedStyles.subtitle, { alignSelf: 'flex-start', marginLeft: 10, marginTop: 20 }]}>2. Boolean State (Switch) :</Text>
      <View style={[sharedStyles.card, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
        <Text style={[sharedStyles.text, { color: isEnabled ? '#00FFFF' : '#8892b0' }]}>
          {isEnabled ? 'Mode Activé' : 'Mode Désactivé'}
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "rgba(0, 255, 255, 0.4)" }}
          thumbColor={isEnabled ? "#00FFFF" : "#f4f3f4"}
          onValueChange={() => setIsEnabled(previousState => !previousState)}
          value={isEnabled}
        />
      </View>

      <Text style={[sharedStyles.subtitle, { alignSelf: 'flex-start', marginLeft: 10, marginTop: 20 }]}>3. Toggle Visibility :</Text>
      <TouchableOpacity 
        style={sharedStyles.button} 
        onPress={() => setIsVisible(!isVisible)}
      >
        <Ionicons name={isVisible ? "eye-off-outline" : "eye-outline"} size={22} color="#00FFFF" />
        <Text style={sharedStyles.buttonText}>{isVisible ? 'Cacher le message' : 'Afficher le message'}</Text>
      </TouchableOpacity>

      {isVisible && (
        <View style={[sharedStyles.card, { borderColor: '#ffd700' }]}>
          <Text style={[sharedStyles.text, { color: '#ffd700' }]}>Coucou ! Je suis affiché grâce au State `isVisible`.</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default StatesDemoScreen;
