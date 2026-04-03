import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { sharedStyles } from '../styles/sharedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'DataSharingFirst'>;

const DataSharingFirstScreen = () => {
  const [phrase, setPhrase] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const handleNavigate = () => {
    navigation.navigate('DataSharingSecond', { sharedText: phrase });
  };

  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.title}>Émetteur de données</Text>
      <Text style={sharedStyles.subtitle}>Saisissez une information</Text>
      
      <View style={sharedStyles.card}>
        <Ionicons name="chatbubbles-outline" size={40} color="#8892b0" style={{ marginBottom: 15 }} />
        <TextInput
          style={sharedStyles.input}
          placeholder="Écrivez votre phrase secrète..."
          placeholderTextColor="#8892b0"
          value={phrase}
          onChangeText={setPhrase}
        />
      </View>

      <TouchableOpacity style={[sharedStyles.button, { justifyContent: 'center' }]} onPress={handleNavigate}>
        <Ionicons name="send-outline" size={24} color="#00FFFF" />
        <Text style={sharedStyles.buttonText}>Transmettre les données</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DataSharingFirstScreen;
