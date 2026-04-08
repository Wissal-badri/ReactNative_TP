import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StylingScreen = () => {
  return (
    <ScrollView contentContainerStyle={[sharedStyles.container, { paddingVertical: 40 }]}>
      <Ionicons name="color-palette-outline" size={60} color="#00FFFF" style={{ marginBottom: 10 }} />
      <Text style={sharedStyles.title}>Styling Demo</Text>
      <Text style={sharedStyles.subtitle}>Utilisation de `StyleSheet.create`</Text>
      
      <View style={localStyles.box1}>
        <Text style={localStyles.textInside}>Boîte avec Fond et Bordure</Text>
      </View>

      <View style={localStyles.box2}>
        <Text style={localStyles.textInside}>Boîte avec Dégradé simulé (Shadow)</Text>
      </View>

      <View style={{ ...sharedStyles.card, borderLeftWidth: 10, borderLeftColor: '#ff4d4d' }}>
        <Text style={sharedStyles.text}>Cette carte utilise `sharedStyles` avec des modifications locales (Inline styles).</Text>
      </View>

      <View style={localStyles.gridContainer}>
        <View style={[localStyles.gridItem, { backgroundColor: '#ff4d4d' }]}><Text style={localStyles.gridText}>GRID 1</Text></View>
        <View style={[localStyles.gridItem, { backgroundColor: '#00ccff' }]}><Text style={localStyles.gridText}>GRID 2</Text></View>
        <View style={[localStyles.gridItem, { backgroundColor: '#00ff96' }]}><Text style={localStyles.gridText}>GRID 3</Text></View>
        <View style={[localStyles.gridItem, { backgroundColor: '#ffd700' }]}><Text style={localStyles.gridText}>GRID 4</Text></View>
      </View>

    </ScrollView>
  );
};

const localStyles = StyleSheet.create({
  box1: {
    backgroundColor: 'rgba(0, 255, 255, 0.1)',
    padding: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#00FFFF',
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  box2: {
    backgroundColor: '#1d2d50',
    padding: 24,
    borderRadius: 50, // Cercle
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#00FFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  textInside: {
    color: '#e6f1ff',
    fontWeight: '700',
    fontSize: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  gridItem: {
    width: '48%',
    height: 100,
    borderRadius: 12,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridText: {
    color: '#0a192f',
    fontWeight: '800',
  }
});

export default StylingScreen;
