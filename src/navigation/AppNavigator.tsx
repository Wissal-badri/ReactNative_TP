import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import StatelessCounterScreen from '../screens/StatelessCounterScreen';
import StatefulCounterScreen from '../screens/StatefulCounterScreen';
import DataSharingFirstScreen from '../screens/DataSharingFirstScreen';
import DataSharingSecondScreen from '../screens/DataSharingSecondScreen';
import StyleSheetScreen from '../screens/StyleSheetScreen';

export type RootStackParamList = {
  Home: undefined;
  StatelessCounter: undefined;
  StatefulCounter: undefined;
  DataSharingFirst: undefined;
  DataSharingSecond: { sharedText: string };
  StyleSheetDemo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
      <Stack.Screen name="StatelessCounter" component={StatelessCounterScreen} options={{ title: 'Compteur Stateless' }} />
      <Stack.Screen name="StatefulCounter" component={StatefulCounterScreen} options={{ title: 'Compteur Stateful' }} />
      <Stack.Screen name="DataSharingFirst" component={DataSharingFirstScreen} options={{ title: 'Envoyer Données' }} />
      <Stack.Screen name="DataSharingSecond" component={DataSharingSecondScreen} options={{ title: 'Données Reçues' }} />
      <Stack.Screen name="StyleSheetDemo" component={StyleSheetScreen} options={{ title: 'StyleSheet Demo' }} />
    </Stack.Navigator>
  );
};
