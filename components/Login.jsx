import React, { useState, useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './Theme.js';
import axios from 'axios';

function Login( { navigation } ) {
    const font = 'Roboto';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const data = {
      email,
      password
    }
    const onSignIn = () => {
        if (email.trim() !== '' && password.trim() !== '') {
            // Validate email and password process
            axios.post("http://evasquez03-001-site1.btempurl.com/api/User/Login",data)
            .then(
              res => {
                //Incorrect credentials
                if(res.data.result.stringCode === 'Credenciales incorrectas'){
                  alert('La información suministrada no es correcta, por favor intentar nuevamente');
                }
                //Correct credentials
                else{
                  console.log('Credenciales correctas :)')
                  // Redirect to Home Page
                }
              }
            )
            .catch(
              err => {
                console.log(err)
              }
            )
            console.log(data)
            
        } else {
            alert('Debe llenar los campos establecidos')
        }
    }

    
    return (
      <View>
        <View style={styles.header}>
          <Image source = {require('../assets/LogoIntecnologia.png')}
            style = {{ width: "85%", height: 50 }}
          />
        </View>
        <View style={styles.body}>
          <View>
            <Text style={styles.textInput}>Correo electronico</Text>
            <TextInput style={styles.input} onChangeText={userEmail => setEmail(userEmail)} type='text'/>
          </View>
          <View>
            <Text style={styles.textInput}>Contreseña</Text>
            <TextInput style={styles.input} onChangeText={userPassword => setPassword(userPassword)} type='text' secureTextEntry={true}/>
          </View>
          <TouchableOpacity style={styles.appButtonContainer} onPress={onSignIn}>
              <Text style={styles.appButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <View style={styles.linkTextContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={styles.linkText}>¡Registrate!</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.linkText}>¿Problemas para acceder?</Text></TouchableOpacity>
          </View>
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
