import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';
import MyCustomComponent from '../components/MyCustomComponent';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppelComponentScreen = () => {
  return (
    <ScrollView contentContainerStyle={[sharedStyles.container, { paddingVertical: 40 }]}>
      <Ionicons name="apps-outline" size={60} color="#00FFFF" style={{ marginBottom: 10 }} />
      <Text style={sharedStyles.title}>Appel d'un Composant</Text>
      <Text style={sharedStyles.subtitle}>Utilisation de sous-composants réutilisables</Text>
      
      <View style={sharedStyles.card}>
        <Text style={sharedStyles.text}>
          Cette page démontre comment importer et appeler un composant externe (`MyCustomComponent.tsx`) à l'intérieur d'un autre composant.
        </Text>
      </View>

      <Text style={[sharedStyles.subtitle, { alignSelf: 'flex-start', marginLeft: 10, marginTop: 20 }]}>Exemples d'appels :</Text>
      
      <MyCustomComponent 
        title="Bouton Primaire" 
        description="Ceci est un composant personnalisé appelé avec des props spécifiques."
        color="#00FFFF"
      />

      <MyCustomComponent 
        title="Alerte Danger" 
        description="Le même composant est réutilisé ici avec une couleur différente."
        color="#ff4d4d"
      />

      <MyCustomComponent 
        title="Succès" 
        description="La réutilisation est la clé d'un code React Native propre."
        color="#00ff96"
      />
    </ScrollView>
  );
};

export default AppelComponentScreen;
