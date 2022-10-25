import React, { useState, useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './Theme.js';

function Login( { navigation } ) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignIn = () => {
        if (email.trim() !== '' && password.trim() !== '') {
            // Validate email and password process
            console.log(email, password)
        } else {
            alert('Debe llenar los campos establecidos')
        }
    }

    
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
        <View style={styles.body}>
          <Text style={{fontFamily:'sans-serif-light', fontSize:32}}>Inicia Sesión</Text>
          <TextInput style={styles.input} placeholder="example@gmail.com" onChangeText={userEmail => setEmail(userEmail)} type='text'/>
          <TextInput style={styles.input} placeholder="Contraseña" onChangeText={userPassword => setPassword(userPassword)} secureTextEntry={true} id='userPassword'/>
          <TouchableOpacity>
            <Text>Mostrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appButtonContainer} onPress={onSignIn}>
            <Text style={styles.appButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <Text style={{fontFamily:'sans-serif-light', fontSize:12}}>¿No tienes cuenta aún?</Text>
          <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.appButtonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.helpButtonContainer}>
              <Text style={styles.helpButtonText}>?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default Login
