import { View, Text, StyleSheet, TouchableOpacity, Linking, SafeAreaView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PhoneSMSScreen = () => {
  const phoneNumber = '0600000000';
  const smsMessage = 'Hello, this is an automated message from my React Native app!';

  const handleCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleSMS = () => {
    const url = `sms:${phoneNumber}${Platform.OS === 'ios' ? '&' : '?'}body=${encodeURIComponent(smsMessage)}`;
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Communications</Text>
        <Text style={styles.subtitle}>Contact: {phoneNumber}</Text>

        <TouchableOpacity style={[styles.card, styles.phoneCard]} onPress={handleCall}>
          <View style={styles.iconContainer}>
            <Icon name="phone" size={40} color="#10b981" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Phone Call</Text>
            <Text style={styles.cardDescription}>Tap to dial the number automatically</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.smsCard]} onPress={handleSMS}>
          <View style={styles.iconContainer}>
            <Icon name="message-text" size={40} color="#3b82f6" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Send SMS</Text>
            <Text style={styles.cardDescription}>Open messages with a preset text</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Import Platform inside the component or at top


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#00FFFF',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#94a3b8',
    marginBottom: 40,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1e293b',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  phoneCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#10b981',
  },
  smsCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#3b82f6',
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#64748b',
  },
});

export default PhoneSMSScreen;
