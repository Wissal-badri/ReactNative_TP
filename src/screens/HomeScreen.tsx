import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { sharedStyles } from '../styles/sharedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.title}>DASHBOARD</Text>
      <Text style={sharedStyles.subtitle}>Sélecteur de Projets</Text>
      
      <TouchableOpacity 
        style={sharedStyles.button} 
        onPress={() => navigation.navigate('StatelessCounter')}
      >
        <Ionicons name="hardware-chip-outline" size={24} color="#00FFFF" />
        <Text style={sharedStyles.buttonText}>1. Compteur Stateless</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={sharedStyles.button} 
        onPress={() => navigation.navigate('StatefulCounter')}
      >
        <Ionicons name="pulse" size={24} color="#00FFFF" />
        <Text style={sharedStyles.buttonText}>2. Compteur Stateful</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={sharedStyles.button} 
        onPress={() => navigation.navigate('DataSharingFirst')}
      >
        <Ionicons name="share-social-outline" size={24} color="#00FFFF" />
        <Text style={sharedStyles.buttonText}>3. Partage de Données</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={sharedStyles.button} 
        onPress={() => navigation.navigate('StyleSheetDemo')}
      >
        <Ionicons name="color-palette-outline" size={24} color="#00FFFF" />
        <Text style={sharedStyles.buttonText}>4. Démo StyleSheet</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={sharedStyles.button} 
        onPress={() => navigation.navigate('EmailPassword')}
      >
        <Ionicons name="mail-outline" size={24} color="#00FFFF" />
        <Text style={sharedStyles.buttonText}>5. Formulaire Email/Mot de passe</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
