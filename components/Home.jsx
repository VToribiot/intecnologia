import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import styles from './Theme.js';


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
        <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      </View>
    </View>


  )
}

export default Home;