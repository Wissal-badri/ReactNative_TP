import { StyleSheet } from 'react-native';

export const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a192f', // Midnight Blue
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#e6f1ff',
    marginBottom: 30,
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#8892b0',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgba(0, 255, 255, 0.05)',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#00FFFF', // Cyan
  },
  buttonText: {
    color: '#00FFFF', // Cyan
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 16,
    letterSpacing: 0.5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#00FFFF', // Cyan
    borderRadius: 12,
    padding: 16,
    width: '100%',
    marginBottom: 20,
    fontSize: 16,
    color: '#e6f1ff',
    backgroundColor: 'rgba(0, 255, 255, 0.02)',
  },
  text: {
    fontSize: 16,
    color: '#8892b0',
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#112240', // Light Midnight Blue
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 255, 255, 0.2)',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },
  resetButton: {
    backgroundColor: 'rgba(230, 241, 255, 0.05)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e6f1ff',
    marginTop: 10,
  },
  resetButtonText: {
    color: '#e6f1ff',
    fontSize: 14,
    fontWeight: '600',
  },
  counterValue: {
    fontSize: 72,
    fontWeight: '900',
    color: '#00FFFF',
    textShadowColor: 'rgba(0, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  }
});
