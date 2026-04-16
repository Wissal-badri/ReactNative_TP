import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Switch,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  SectionList,
  Modal,
  Pressable,
  Alert,
  StatusBar,
  Platform,
  RefreshControl,
  SafeAreaView,
} from 'react-native';

const ComponentsUIScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  const components = [
    { name: 'View (Default)', element: <View style={styles.box} /> },
    { name: 'Text (Bold)', element: <Text style={{ fontWeight: 'bold', color: 'white' }}>Bold Text</Text> },
    { name: 'Text (Italic)', element: <Text style={{ fontStyle: 'italic', color: 'white' }}>Italic Text</Text> },
    { name: 'Button', element: <Button title="Press Me" onPress={() => Alert.alert('Button pressed')} /> },
    { name: 'Switch', element: <Switch value={isEnabled} onValueChange={setIsEnabled} /> },
    { name: 'TextInput', element: <TextInput style={styles.input} placeholder="Type here..." placeholderTextColor="#64748b" onChangeText={setText} value={text} /> },
    { name: 'ActivityIndicator (Small)', element: <ActivityIndicator size="small" color="#00ffff" /> },
    { name: 'ActivityIndicator (Large)', element: <ActivityIndicator size="large" color="#00ff00" /> },
    { name: 'Image (Network)', element: <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.tinyLogo} /> },
    { name: 'TouchableOpacity', element: <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Opacity</Text></TouchableOpacity> },
    { name: 'FlatList (Demo)', element: <View style={{ height: 50, width: 200 }}><FlatList data={[{id: '1', title: 'Item 1'}]} renderItem={({item}) => <Text style={{color: 'white'}}>{item.title}</Text>} keyExtractor={item => item.id} /></View> },
    { name: 'StatusBar', element: <Text style={{color: '#94a3b8'}}>StatusBar Configured</Text> },
    { name: 'KeyboardAvoidingView', element: <Text style={{color: '#94a3b8'}}>Active Layout</Text> },
    { name: 'SafeAreaView', element: <Text style={{color: '#94a3b8'}}>Safe Area Wrapper</Text> },
    { name: 'Modal', element: <Button title="Show Modal" onPress={() => setModalVisible(true)} /> },
    { name: 'Pressable', element: <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#334155' : '#1e293b', padding: 10, borderRadius: 8, borderWidth: 1, borderColor: '#3b82f6' }]}><Text style={{color: 'white'}}>Pressable</Text></Pressable> },
    { name: 'SectionList (Demo)', element: <View style={{ height: 50, width: 200 }}><SectionList sections={[{title: 'S1', data: ['D1']}]} renderItem={({item}) => <Text style={{color: 'white'}}>{item}</Text>} renderSectionHeader={({section: {title}}) => <Text style={{fontWeight: 'bold', color: '#00ffff'}}>{title}</Text>} keyExtractor={(item, index) => item + index} /></View> },
    { name: 'RefreshControl', element: <Text style={{color: '#94a3b8'}}>Pull down!</Text> },
    { name: 'ScrollView', element: <Text style={{color: '#94a3b8'}}>Scrolling Container</Text> },
    { name: 'View with Shadow', element: <View style={styles.shadowBox} /> },
    { name: 'View Rounded', element: <View style={styles.roundedBox} /> },
    { name: 'Text with Shadow', element: <Text style={styles.shadowText}>Shadow Text</Text> },
    { name: 'Text Colored', element: <Text style={{ color: '#ef4444' }}>Red Text</Text> },
    { name: 'Text Size 20', element: <Text style={{ fontSize: 20, color: 'white' }}>Large Text</Text> },
    { name: 'TextInput Secure', element: <TextInput style={styles.input} secureTextEntry placeholder="Password" placeholderTextColor="#64748b" /> },
    { name: 'TextInput Numeric', element: <TextInput style={styles.input} keyboardType="numeric" placeholder="123" placeholderTextColor="#64748b" /> },
    { name: 'TextInput Multi-line', element: <TextInput style={[styles.input, { height: 60 }]} multiline numberOfLines={3} placeholder="Multiline" placeholderTextColor="#64748b" /> },
    { name: 'Switch (Disabled)', element: <Switch disabled value={false} /> },
    { name: 'Switch (Custom Color)', element: <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"} value={isEnabled} onValueChange={setIsEnabled} /> },
    { name: 'TouchableOpacity (Red)', element: <TouchableOpacity style={[styles.button, { backgroundColor: '#ef4444' }]}><Text style={styles.buttonText}>Red Opacity</Text></TouchableOpacity> },
    { name: 'TouchableOpacity (Border)', element: <TouchableOpacity style={[styles.button, { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#3b82f6' }]}><Text style={[styles.buttonText, { color: '#3b82f6' }]}>Border Opacity</Text></TouchableOpacity> },
    { name: 'ActivityIndicator (Red)', element: <ActivityIndicator size="large" color="#ef4444" /> },
    { name: 'View (Circle)', element: <View style={styles.circle} /> },
    { name: 'View (Bordered)', element: <View style={{ width: 50, height: 50, borderWidth: 2, borderColor: '#a855f7' }} /> },
    { name: 'Text (Underline)', element: <Text style={{ textDecorationLine: 'underline', color: 'white' }}>Underlined</Text> },
    { name: 'Text (Line Through)', element: <Text style={{ textDecorationLine: 'line-through', color: 'white' }}>Line Through</Text> },
    { name: 'Text (Uppercase)', element: <Text style={{ textTransform: 'uppercase', color: 'white' }}>uppercase text</Text> },
    { name: 'View (Flex Row)', element: <View style={{ flexDirection: 'row' }}><View style={styles.smallBox} /><View style={styles.smallBox} /></View> },
    { name: 'View (Flex Column)', element: <View style={{ flexDirection: 'column' }}><View style={styles.smallBox} /><View style={styles.smallBox} /></View> },
    { name: 'View (Space Between)', element: <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 100 }}><View style={styles.smallBox} /><View style={styles.smallBox} /></View> },
    { name: 'View (Center)', element: <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#1e293b', width: 60, height: 60, borderRadius: 8 }}><View style={styles.smallBox} /></View> },
    { name: 'Text (Align Center)', element: <Text style={{ textAlign: 'center', width: 100, color: 'white' }}>Centered</Text> },
    { name: 'Text (Align Right)', element: <Text style={{ textAlign: 'right', width: 100, color: 'white' }}>Right</Text> },
    { name: 'Text (Opacity 0.5)', element: <Text style={{ opacity: 0.5, color: 'white' }}>Semi-transparent</Text> },
    { name: 'View (Gradient Placeholder)', element: <View style={{ width: 100, height: 20, backgroundColor: '#3b82f6', borderRadius: 10 }}><Text style={{fontSize: 8, color: 'white', textAlign: 'center'}}>Gradient Placeholder</Text></View> },
    { name: 'Image (Styled)', element: <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={[styles.tinyLogo, { borderRadius: 25 }]} /> },
    { name: 'Modal Component', element: (
      <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{color: '#1e293b', marginBottom: 15}}>Modal Content</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    ) },
    { name: 'Platform Info', element: <Text style={{color: '#94a3b8'}}>OS: {Platform.OS}</Text> },
    { name: 'Layout Info', element: <Text style={{color: '#94a3b8'}}>Flex Grid Layout</Text> },
    { name: 'ActivityIndicator (Anim)', element: <ActivityIndicator animating={true} color="#00ffff" /> },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a192f" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#00ffff" />}
      >
        <Text style={styles.title}>RN Components Showcase</Text>
        <View style={styles.grid}>
          {components.map((comp, index) => (
            <View key={`widget-${index}`} style={styles.widgetCard}>
              <Text style={styles.widgetName}>{index + 1}. {comp.name}</Text>
              <View style={styles.elementContainer}>
                {comp.element}
              </View>
            </View>
          ))}
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
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: '#00FFFF',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  widgetCard: {
    width: '48%',
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  widgetName: {
    fontSize: 11,
    fontWeight: '600',
    color: '#64748b',
    marginBottom: 10,
    textAlign: 'center',
  },
  elementContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  box: {
    width: 40,
    height: 40,
    backgroundColor: '#3b82f6',
    borderRadius: 4,
  },
  smallBox: {
    width: 15,
    height: 15,
    backgroundColor: '#10b981',
    margin: 2,
    borderRadius: 2,
  },
  input: {
    width: '100%',
    height: 36,
    borderColor: '#334155',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#f8fafc',
    backgroundColor: '#0f172a',
    fontSize: 12,
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  shadowBox: {
    width: 40,
    height: 40,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  roundedBox: {
    width: 40,
    height: 40,
    backgroundColor: '#f59e0b',
    borderRadius: 12,
  },
  shadowText: {
    color: '#00ffff',
    textShadowColor: 'rgba(0, 255, 255, 0.5)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ec4899',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(15, 23, 42, 0.8)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});

export default ComponentsUIScreen;
