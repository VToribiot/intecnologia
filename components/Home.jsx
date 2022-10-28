import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import styles from './Theme.js';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { FontAwesome5 } from '@expo/vector-icons'; 

function Home({navigation}) {

  return (
    <View >
      <View style={styles.homeHeader}>
      <Image source = {require('../assets/LogoIntecnologia-white.png')}
            style = {{ width: "80%", height: 40 }}
          />
        <TouchableOpacity style={styles.burgerMenu} onPress={() => navigation.toggleDrawer()}>
          <Entypo name="menu" size={35} color="white" />
        </TouchableOpacity>
      </View>
      <View style = {styles.homebody}>
        <Text>Mapa</Text>
      </View>
      <View style={styles.homeFooter}>
        <TouchableOpacity style={styles.scannerQrButton} onPress={() => navigation.navigate('ScanQR')}>
          <FontAwesome name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.scannerQrButton} onPress={() => navigation.navigate('ScanQR')}>
          <MaterialCommunityIcons name="bell" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.scannerQrButton} onPress={() => navigation.navigate('ScanQR')}>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scannerQrButton} onPress={() => navigation.navigate('ScanQR')}>
          <FontAwesome name="calendar-check-o" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.scannerQrButton} onPress={() => navigation.navigate('Login')}>
          <FontAwesome5 name="sign-out-alt" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.scannerQrButtonContainer}>
          <TouchableOpacity style={styles.scannerQrButton} onPress={() => navigation.navigate('ScanQR')}>
            <AntDesign name="scan1" size={24} color="white" />
          </TouchableOpacity>
      </View>
      



    </View>


  )
}

export default Home;