import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { sharedStyles, COLORS } from '../styles/sharedStyles';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginTransfer'>;

const LoginTransferScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const handleSave = () => {
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }
    navigation.navigate('LoginDisplay', { email, password });
  };

  return (
    <ScrollView contentContainerStyle={sharedStyles.container}>
      <Ionicons name="lock-closed-outline" size={60} color={COLORS.accent} style={{ marginBottom: 15 }} />
      <Text style={sharedStyles.title}>Transfert de Données</Text>
      <Text style={sharedStyles.subtitle}>Saisie Sécurisée</Text>

      <View style={sharedStyles.card}>
        <Text style={[sharedStyles.text, { marginBottom: 10, alignSelf: 'flex-start' }]}>Email :</Text>
        <TextInput
          style={sharedStyles.input}
          placeholder="votre@email.com"
          placeholderTextColor={COLORS.muted}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={[sharedStyles.text, { marginBottom: 10, alignSelf: 'flex-start' }]}>Mot de passe :</Text>
        <TextInput
          style={sharedStyles.input}
          placeholder="********"
          placeholderTextColor={COLORS.muted}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={sharedStyles.button} onPress={handleSave}>
        <Ionicons name="save-outline" size={24} color={COLORS.accent} />
        <Text style={sharedStyles.buttonText}>SAUVEGARDER & ENVOYER</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginTransferScreen;
