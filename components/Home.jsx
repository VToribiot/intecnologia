import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import styles from './Theme.js';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

function Home({navigation}) {

  return (
    <View >
      <View style={styles.header}>
        <Text style={styles.headerFont}>I</Text>
        <Text style={styles.headerFont}>N</Text>
        <Text style={styles.headerFont}>T</Text>
        <Text style={styles.headerFont}>E</Text>
        <Text style={styles.headerFont}>C</Text>
        <Text style={styles.headerFont}>N</Text>
        <Text style={styles.headerFont}>O</Text>
        <Text style={styles.headerFont}>L</Text>
        <Text style={styles.headerFont}>O</Text>
        <Text style={styles.headerFont}>G</Text>
        <Text style={styles.headerFont}>I</Text>
        <Text style={styles.headerFont}>A</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Entypo name="menu" size={35} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>

      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.scannerQrButton} onPress={() => navigation.navigate('ScanQR')}>
          <AntDesign name="qrcode" size={30} color="black" />
        </TouchableOpacity>
      </View>



    </View>


  )
}

export default Home;