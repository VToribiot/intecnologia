import { useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import Register from './components/Login.js';
import ScanQR from './components/ScannerQR.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ScanQR" component={ScanQR} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}