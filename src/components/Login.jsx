import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './Theme.js';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [userCredentials, setUserData] = useState({ email: '', password: '' });

  const onSignIn = () => {
    if (
      userCredentials['email'].trim() !== '' &&
      userCredentials['password'].trim() !== ''
    ) {
      // Validate [' and ']password process
      axios
        .post(
          'http://evasquez03-001-site1.btempurl.com/api/User/Login',
          userCredentials
        )
        .then((res) => {
          //Incorrect credentials
          if (res.data.result.stringCode === 'Credenciales incorrectas') {
            alert(
              'La información suministrada no es correcta, por favor intentalo nuevamente.'
            );
          }
          //Correct credentials
          else {
            console.log('Credenciales correctas)');
            // Redirect to Home Page
          }
        })
        .catch((err) => {
          console.log(err);
        });
      console.log({ userCredentials });
    } else {
      alert('Todos los campos son requeridos.');
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <Image
          source={require('../assets/LogoIntecnologia.png')}
          style={{ width: '85%', height: 50 }}
        />
      </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.textInput}>Correo Electrónico</Text>
          <TextInput
            style={styles.input}
            onChangeText={(userEmail) =>
              setUserData({ ...userCredentials, email: userEmail })
            }
            type="text"
          />
        </View>
        <View>
          <Text style={styles.textInput}>Contraseña</Text>
          <TextInput
            style={styles.input}
            type="text"
            secureTextEntry={true}
            onChangeText={(userPassword) =>
              setUserData({ ...userCredentials, password: userPassword })
            }
          />
        </View>
        <TouchableOpacity style={styles.appButtonContainer} onPress={onSignIn}>
          <Text style={styles.appButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <View style={styles.linkTextContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.linkText}>¡Registrate!</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>¿Problemas para acceder?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.helpButtonContainer}>
          <Text style={styles.helpButtonText}>?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
