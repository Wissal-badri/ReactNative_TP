import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MyCustomComponentProps {
  title: string;
  description: string;
  color?: string;
}

const MyCustomComponent = ({ title, description, color = '#00FFFF' }: MyCustomComponentProps) => {
  return (
    <View style={[styles.card, { borderColor: color }]}>
      <Text style={[styles.title, { color }]}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#112240',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    width: '100%',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#8892b0',
    lineHeight: 20,
  },
});

export default MyCustomComponent;
