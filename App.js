import { useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import Login from './components/Login.js';
import ScannerQR from './components/ScannerQR.js';

export default function App() {
  return (
    <ScannerQR/>
  );
}