import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Theme.js';
import { Entypo } from '@expo/vector-icons'; 

const Notification = ({navigation}) => (
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
        <TouchableOpacity style={styles.burgerMenu} onPress={() => navigation.toggleDrawer()}>
          <Entypo name="menu" size={35} color="black" />
        </TouchableOpacity>
        <Text>Notificación</Text>
    </View>
);

export default Notification;
