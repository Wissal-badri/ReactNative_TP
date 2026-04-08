import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { sharedStyles, COLORS } from '../styles/sharedStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';

const CalculatorScreen = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState<string | null>(null);
  const [nextValueExpected, setNextValueExpected] = useState(false);

  const handleNumber = (num: string) => {
    if (nextValueExpected) {
      setDisplayValue(num);
      setNextValueExpected(false);
    } else {
      setDisplayValue(prev => (prev === '0' ? num : prev + num));
    }
  };

  const handleOperator = (op: string) => {
    if (operator && firstValue && nextValueExpected) {
      setOperator(op);
      return;
    }

    if (firstValue === null) {
      setFirstValue(displayValue);
    } else if (operator) {
      const result = calculate(Number(firstValue), Number(displayValue), operator);
      setDisplayValue(String(result));
      setFirstValue(String(result));
    }

    setNextValueExpected(true);
    setOperator(op);
  };

  const calculate = (a: number, b: number, op: string) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      default: return b;
    }
  };

  const handleEqual = () => {
    if (!operator || firstValue === null) return;
    const result = calculate(Number(firstValue), Number(displayValue), operator);
    setDisplayValue(String(result));
    setFirstValue(null);
    setOperator(null);
    setNextValueExpected(true);
  };

  const handleClear = () => {
    setDisplayValue('0');
    setFirstValue(null);
    setOperator(null);
    setNextValueExpected(false);
  };

  const CalcButton = ({ label, onPress, isOp = false, isIcon = false }: { label: string | React.ReactNode, onPress: () => void, isOp?: boolean, isIcon?: boolean }) => (
    <TouchableOpacity 
      style={[sharedStyles.calcBtn, isOp && sharedStyles.calcBtnOp]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      {isIcon ? label : <Text style={[sharedStyles.calcBtnText, isOp && sharedStyles.calcBtnOpText]}>{label}</Text>}
    </TouchableOpacity>
  );

  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.title}>Calculatrice</Text>
      <Text style={sharedStyles.subtitle}>Premium & Classy</Text>

      <View style={sharedStyles.calcDisplay}>
        <Text style={sharedStyles.calcDisplayText} numberOfLines={1}>
          {displayValue}
        </Text>
      </View>

      <View style={{ width: '100%' }}>
        <View style={sharedStyles.calcRow}>
          <CalcButton label="C" onPress={handleClear} isOp />
          <CalcButton 
            isIcon 
            label={<Ionicons name="backspace-outline" size={24} color={COLORS.accent} />} 
            onPress={() => setDisplayValue(prev => prev.length > 1 ? prev.slice(0, -1) : '0')} 
            isOp 
          />
          <CalcButton label="%" onPress={() => setDisplayValue(String(Number(displayValue) / 100))} isOp />
          <CalcButton label="/" onPress={() => handleOperator('/')} isOp />
        </View>

        <View style={sharedStyles.calcRow}>
          <CalcButton label="7" onPress={() => handleNumber('7')} />
          <CalcButton label="8" onPress={() => handleNumber('8')} />
          <CalcButton label="9" onPress={() => handleNumber('9')} />
          <CalcButton label="*" onPress={() => handleOperator('*')} isOp />
        </View>

        <View style={sharedStyles.calcRow}>
          <CalcButton label="4" onPress={() => handleNumber('4')} />
          <CalcButton label="5" onPress={() => handleNumber('5')} />
          <CalcButton label="6" onPress={() => handleNumber('6')} />
          <CalcButton label="-" onPress={() => handleOperator('-')} isOp />
        </View>

        <View style={sharedStyles.calcRow}>
          <CalcButton label="1" onPress={() => handleNumber('1')} />
          <CalcButton label="2" onPress={() => handleNumber('2')} />
          <CalcButton label="3" onPress={() => handleNumber('3')} />
          <CalcButton label="+" onPress={() => handleOperator('+')} isOp />
        </View>

        <View style={sharedStyles.calcRow}>
          <CalcButton label="0" onPress={() => handleNumber('0')} />
          <CalcButton label="." onPress={() => setDisplayValue(prev => prev.includes('.') ? prev : prev + '.')} />
          <TouchableOpacity 
            style={[sharedStyles.calcBtn, { width: '47%', backgroundColor: COLORS.accent, borderColor: COLORS.accent }]} 
            onPress={handleEqual}
            activeOpacity={0.7}
          >
            <Text style={[sharedStyles.calcBtnText, { color: COLORS.bg }]}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CalculatorScreen;
