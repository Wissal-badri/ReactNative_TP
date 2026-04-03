import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { sharedStyles } from '../styles/sharedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type DataSharingSecondScreenRouteProp = RouteProp<RootStackParamList, 'DataSharingSecond'>;

const DataSharingSecondScreen = () => {
  const route = useRoute<DataSharingSecondScreenRouteProp>();
  const { sharedText } = route.params;

  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.title}>Récepteur de données</Text>
      <Text style={sharedStyles.subtitle}>Transmission Route Params</Text>
      
      <View style={sharedStyles.card}>
        <Ionicons name="mail-open-outline" size={40} color="#00FFFF" style={{ marginBottom: 15 }} />
        <Text style={sharedStyles.text}>Voici la donnée qui a été transférée depuis la vue précédente :</Text>
        <View style={{ marginTop: 20, padding: 15, backgroundColor: 'rgba(0, 255, 255, 0.1)', borderRadius: 8, width: '100%' }}>
          <Text style={[sharedStyles.text, { color: '#e6f1ff', textAlign: 'center', fontStyle: 'italic' }]}>
            "{sharedText || "Aucune information saisie."}"
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DataSharingSecondScreen;
