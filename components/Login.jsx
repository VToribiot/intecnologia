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
          <Image source = {{uri:'https://images.unsplash.com/photo-1666625628272-a1071f6f7173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'}}
              style = {{ width: "100%", height: 200 }}
          />
        </View>
        <View style={styles.body}>
            <Text style={{fontFamily: font, fontSize:32}}>Inicia Sesión</Text>
            <TextInput 
            style={styles.input} 
            placeholder="example@gmail.com" 
            onChangeText={userEmail => setEmail(userEmail)} 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Contraseña" 
                onChangeText={userPassword => setPassword(userPassword)} 
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.appButtonContainer} onPress={onSignIn}>
                <Text style={styles.appButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <Text style={{fontFamily: font, fontSize:12}}>¿No tienes cuenta aún?</Text>
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
