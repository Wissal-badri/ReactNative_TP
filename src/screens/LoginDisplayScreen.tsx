import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { sharedStyles, COLORS } from '../styles/sharedStyles';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

type DisplayRouteProp = RouteProp<RootStackParamList, 'LoginDisplay'>;

const LoginDisplayScreen = () => {
  const route = useRoute<DisplayRouteProp>();
  const { email, password } = route.params;

  // Création d'une chaîne de symboles * de la même longueur que le mot de passe
  const censoredPassword = '*'.repeat(password.length);

  return (
    <ScrollView contentContainerStyle={sharedStyles.container}>
      <Ionicons name="shield-checkmark-outline" size={60} color={COLORS.accent} style={{ marginBottom: 15 }} />
      <Text style={sharedStyles.title}>Données Reçues</Text>
      <Text style={sharedStyles.subtitle}>Bonjour voici vos informations confidentielles</Text>

      <View style={sharedStyles.card}>
        <Ionicons name="mail-outline" size={30} color={COLORS.muted} style={{ marginBottom: 10 }} />
        <Text style={[sharedStyles.text, { fontSize: 13, textTransform: 'uppercase' }]}>E-mail</Text>
        <Text style={[sharedStyles.title, { fontSize: 22, color: COLORS.accent, marginBottom: 20 }]}>{email}</Text>

        <Ionicons name="key-outline" size={30} color={COLORS.muted} style={{ marginBottom: 10 }} />
        <Text style={[sharedStyles.text, { fontSize: 13, textTransform: 'uppercase' }]}>Mot de Passe (Masqué)</Text>
        <Text style={[sharedStyles.title, { fontSize: 22, color: COLORS.accent, marginBottom: 0 }]}>{censoredPassword}</Text>
      </View>

      <View style={[sharedStyles.card, { borderColor: COLORS.accent, borderStyle: 'dashed' }]}>
        <Text style={[sharedStyles.text, { textAlign: 'center' }]}>
          Les données ont été transmises avec succès entre les deux écrans via React Navigation.
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginDisplayScreen;
