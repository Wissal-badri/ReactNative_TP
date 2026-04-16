import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

import HomeScreen from '../screens/HomeScreen';
import StatelessCounterScreen from '../screens/StatelessCounterScreen';
import StatefulCounterScreen from '../screens/StatefulCounterScreen';
import AppelComponentScreen from '../screens/AppelComponentScreen';
import StatesDemoScreen from '../screens/StatesDemoScreen';
import StylingScreen from '../screens/StylingScreen';
import PropsDemoScreen from '../screens/PropsDemoScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import LoginTransferScreen from '../screens/LoginTransferScreen';
import LoginDisplayScreen from '../screens/LoginDisplayScreen';
import ComponentsUIScreen from '../screens/ComponentsUIScreen';
import MultimediaScreen from '../screens/MultimediaScreen';
import PhoneSMSScreen from '../screens/PhoneSMSScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#0a192f' },
        headerTintColor: '#00FFFF',
        headerTitleStyle: { fontWeight: '800' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Menu TP' }} />
      <Stack.Screen name="AppelComponent" component={AppelComponentScreen} options={{ title: "Appel d'un Composant" }} />
      <Stack.Screen name="States" component={StatesDemoScreen} options={{ title: 'Gestion des States' }} />
      <Stack.Screen name="Styling" component={StylingScreen} options={{ title: 'Styling Demo' }} />
      <Stack.Screen name="Props" component={PropsDemoScreen} options={{ title: 'Utilisation des Props' }} />
      <Stack.Screen name="StatefulCounter" component={StatefulCounterScreen} options={{ title: 'Compteur Stateful' }} />
      <Stack.Screen name="StatelessCounter" component={StatelessCounterScreen} options={{ title: 'Compteur Stateless' }} />
      <Stack.Screen name="Calculator" component={CalculatorScreen} options={{ title: 'Calculatrice' }} />
      <Stack.Screen name="LoginTransfer" component={LoginTransferScreen} options={{ title: 'Login Form' }} />
      <Stack.Screen name="LoginDisplay" component={LoginDisplayScreen} options={{ title: 'Résumé' }} />
      <Stack.Screen name="ComponentsUI" component={ComponentsUIScreen} options={{ title: 'Components UI' }} />
      <Stack.Screen name="Multimedia" component={MultimediaScreen} options={{ title: 'Multimedia' }} />
      <Stack.Screen name="PhoneSMS" component={PhoneSMSScreen} options={{ title: 'Phone & SMS' }} />
    </Stack.Navigator>
  );
};
