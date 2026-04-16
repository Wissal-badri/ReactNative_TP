import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { sharedStyles, COLORS } from '../styles/sharedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView contentContainerStyle={[sharedStyles.container, { paddingVertical: 40 }]}>
      <Ionicons name="desktop-outline" size={60} color="#00FFFF" style={{ marginBottom: 15 }} />
      <Text style={sharedStyles.title}>DÉMO REACT NATIVE</Text>
      <Text style={sharedStyles.subtitle}>Sélecteur de Chapitres</Text>
      
      <TouchableOpacity 
        style={sharedStyles.button} 
        onPress={() => navigation.navigate('AppelComponent')}
      >
        <Ionicons name="apps-outline" size={24} color="#00FFFF" />
        <Text style={sharedStyles.buttonText}>1. Appel d'un Component</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={sharedStyles.button} 
        onPress={() => navigation.navigate('States')}
      >
        <Ionicons name="flash-outline" size={24} color="#00FFFF" />
        <Text style={sharedStyles.buttonText}>2. Les States (useState)</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={sharedStyles.button} 
        onPress={() => navigation.navigate('Styling')}
      >
        <Ionicons name="color-palette-outline" size={24} color="#00FFFF" />
        <Text style={sharedStyles.buttonText}>3. Le Styling (StyleSheet)</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={sharedStyles.button} 
        onPress={() => navigation.navigate('Props')}
      >
        <Ionicons name="git-network-outline" size={24} color="#00FFFF" />
        <Text style={sharedStyles.buttonText}>4. Les Props</Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
      <View style={{ width: '100%', height: 1, backgroundColor: 'rgba(0, 255, 255, 0.2)', marginBottom: 20 }} />

      <TouchableOpacity 
        style={sharedStyles.button} 
        onPress={() => navigation.navigate('StatefulCounter')}
      >
        <Ionicons name="infinite-outline" size={24} color="#e6f1ff" />
        <Text style={[sharedStyles.buttonText, { color: '#e6f1ff' }]}>A. Compteur Stateful</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={sharedStyles.button} 
        onPress={() => navigation.navigate('StatelessCounter')}
      >
        <Ionicons name="radio-button-off-outline" size={24} color="#e6f1ff" />
        <Text style={[sharedStyles.buttonText, { color: '#e6f1ff' }]}>B. Compteur Stateless</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[sharedStyles.button, { borderColor: COLORS.accent, backgroundColor: 'rgba(0, 255, 255, 0.1)' }]} 
        onPress={() => navigation.navigate('Calculator')}
      >
        <Ionicons name="calculator-outline" size={24} color="#00FFFF" />
        <Text style={sharedStyles.buttonText}>C. Calculatrice Premium</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[sharedStyles.button, { borderColor: '#ffd700', backgroundColor: 'rgba(255, 215, 0, 0.05)' }]} 
        onPress={() => navigation.navigate('LoginTransfer')}
      >
        <Ionicons name="swap-horizontal-outline" size={24} color="#ffd700" />
        <Text style={[sharedStyles.buttonText, { color: '#ffd700' }]}>D. Transfert de Données</Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
      <View style={{ width: '100%', height: 1, backgroundColor: 'rgba(0, 255, 255, 0.2)', marginBottom: 20 }} />

      <TouchableOpacity 
        style={[sharedStyles.button, { borderColor: '#ff00ff', backgroundColor: 'rgba(255, 0, 255, 0.05)' }]} 
        onPress={() => navigation.navigate('ComponentsUI')}
      >
        <Ionicons name="cube-outline" size={24} color="#ff00ff" />
        <Text style={[sharedStyles.buttonText, { color: '#ff00ff' }]}>5. Components UI (50+)</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[sharedStyles.button, { borderColor: '#00ff00', backgroundColor: 'rgba(0, 255, 0, 0.05)' }]} 
        onPress={() => navigation.navigate('Multimedia')}
      >
        <Ionicons name="images-outline" size={24} color="#00ff00" />
        <Text style={[sharedStyles.buttonText, { color: '#00ff00' }]}>6. Multimedia Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[sharedStyles.button, { borderColor: '#1e90ff', backgroundColor: 'rgba(30, 144, 255, 0.05)' }]} 
        onPress={() => navigation.navigate('PhoneSMS')}
      >
        <Ionicons name="call-outline" size={24} color="#1e90ff" />
        <Text style={[sharedStyles.buttonText, { color: '#1e90ff' }]}>7. Phone & SMS</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HomeScreen;
