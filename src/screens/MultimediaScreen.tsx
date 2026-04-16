import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';



const MultimediaScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Multimedia Exhibit</Text>
        
        <View style={styles.card}>
          <Text style={styles.label}>Local Photo</Text>
          <Image 
            source={require('../assets/local_photo.png')} 
            style={styles.media}
            resizeMode="cover"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Network Photo</Text>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80' }} 
            style={styles.media}
            resizeMode="cover"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Network Video</Text>
          <View style={[styles.media, styles.videoPlaceholder]}>
            <Text style={styles.videoText}>Network Video Viewport</Text>
            <Text style={styles.videoSubtext}>[In a real app, use react-native-video or WebView]</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#00FFFF',
    marginBottom: 30,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 20,
    padding: 15,
    marginBottom: 25,
    width: '100%',
    shadowColor: '#00FFFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#334155',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#94a3b8',
    marginBottom: 12,
    marginLeft: 5,
  },
  media: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    backgroundColor: '#0f172a',
  },
  videoPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#3b82f6',
  },
  videoText: {
    color: '#3b82f6',
    fontSize: 18,
    fontWeight: 'bold',
  },
  videoSubtext: {
    color: '#64748b',
    fontSize: 12,
    marginTop: 8,
  }
});

export default MultimediaScreen;
