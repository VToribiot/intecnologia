import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import styles from './Theme.js';
import { Entypo } from '@expo/vector-icons'; 


function Home({navigation}) {

  return (
    <View>
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
    </View>
  )
}

export default Home;