import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StyleSheetScreen = () => {
  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.title}>API StyleSheet</Text>
      <Text style={sharedStyles.subtitle}>Architecture de Style</Text>
      
      <View style={[sharedStyles.card, styles.highlightCard]}>
        <Ionicons name="shield-checkmark-outline" size={40} color="#00FFFF" style={{ marginBottom: 15 }} />
        <Text style={[sharedStyles.text, { textAlign: 'center' }]}>
          Cette carte utilise un style combiné. Apporte une surchage avec des bordures accentuées.
        </Text>
      </View>

      <View style={[sharedStyles.card, styles.glassmorphism]}>
        <Ionicons name="water-outline" size={40} color="#8892b0" style={{ marginBottom: 15 }} />
        <Text style={[sharedStyles.text, { textAlign: 'center' }]}>
          L'utilisation de StyleSheet.create() offre d'excellentes performances.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  highlightCard: {
    borderWidth: 2,
    borderColor: '#00FFFF',
  },
  glassmorphism: {
    backgroundColor: 'rgba(17, 34, 64, 0.5)',
    borderStyle: 'dashed',
  }
});

export default StyleSheetScreen;
