import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#0a192f', // Dark Midnight Blue
  bg: '#020c1b',      // Even Darker Blue
  accent: '#00FFFF',  // Cyan
  text: '#e6f1ff',    // Off-white
  muted: '#8892b0',   // Grayish blue
  card: '#112240',    // Light Midnight Blue
  danger: '#ff4d4d',  // Warning red
};

export const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.text,
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.muted,
    marginBottom: 30,
    textAlign: 'center',
    letterSpacing: 1,
  },
  button: {
    backgroundColor: 'rgba(0, 255, 255, 0.05)',
    paddingVertical: 18,
    paddingHorizontal: 28,
    borderRadius: 15,
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: COLORS.accent,
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: COLORS.accent,
    fontSize: 16,
    fontWeight: '800',
    marginLeft: 18,
    letterSpacing: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 15,
    padding: 18,
    width: '100%',
    marginBottom: 20,
    fontSize: 16,
    color: COLORS.text,
    backgroundColor: 'rgba(0, 255, 255, 0.03)',
  },
  text: {
    fontSize: 16,
    color: COLORS.muted,
    lineHeight: 26,
  },
  card: {
    backgroundColor: COLORS.card,
    padding: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 255, 255, 0.15)',
    width: '100%',
    alignItems: 'center',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 25,
    elevation: 10,
  },
  resetButton: {
    backgroundColor: 'rgba(230, 241, 255, 0.05)',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.text,
    marginTop: 15,
  },
  resetButtonText: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
  },
  counterValue: {
    fontSize: 80,
    fontWeight: '900',
    color: COLORS.accent,
    textShadowColor: 'rgba(0, 255, 255, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  // Calculator Specific Styles
  calcDisplay: {
    width: '100%',
    backgroundColor: 'rgba(0, 255, 255, 0.05)',
    padding: 30,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: 'rgba(0, 255, 255, 0.3)',
  },
  calcDisplayText: {
    color: COLORS.accent,
    fontSize: 48,
    fontWeight: '700',
  },
  calcRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  calcBtn: {
    width: '22%',
    aspectRatio: 1,
    backgroundColor: COLORS.card,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 255, 255, 0.1)',
  },
  calcBtnText: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: '700',
  },
  calcBtnOp: {
    backgroundColor: 'rgba(0, 255, 255, 0.15)',
    borderColor: COLORS.accent,
  },
  calcBtnOpText: {
    color: COLORS.accent,
  }
});
