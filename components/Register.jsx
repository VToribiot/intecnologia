import axios from 'axios';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './Theme.js';

const Register = ({ navigation }) => {
  const [userData, setUserData] = useState({
    email: '',
    fullName: '',
    password: '',
    userType: 0,
  });

  const onRegister = () => {
    if (
      userData.email.trim() !== '' &&
      userData.fullName.trim() !== '' &&
      userData.password.trim() !== '' &&
      userData.userType > 0
    ) {
      // Here goes the verification or processing of the users information
      axios
        .post(
          'http://evasquez03-001-site1.btempurl.com/api/User/Register',
          userData
        )
        .then((res) => {
          if (res.data.result.stringCode === 'Correo valido') {
            console.log('Registrado correctamente');
            // Redirect to Login or Home Page → This needs to be decided by the team
            navigation.navigate('Login');
          } else {
            alert(
              'Ha ocurrido un error, no pudo ser registrado, favor intentar nuevamente'
            );
          }
          console.log(res.data.result.stringCode);
        })
        .catch((err) => {
          console.error(err);
        });
      console.log({ userData });
    } else {
      alert('Todos los campos son requeridos.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/LogoIntecnologia.png')}
          style={{ width: '95%', height: 50 }}
        />
      </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.textInput}>Nombre Completo</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            onChangeText={(name) =>
              setUserData({ ...userData, fullName: name })
            }
            type="text"
          />
        </View>
        <View>
          <Text style={styles.textInput}>Correo Electrónico</Text>
          <TextInput
            style={styles.input}
            onChangeText={(userEmail) => {
              setUserData({ ...userData, email: userEmail });
            }}
            type="text"
          />
        </View>
        {/*Check how to link this with a useRef in order to validate if empty*/}
        <View>
          <Text style={styles.textInput}>Tipo usuario</Text>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            onValueChange={(type) => {
              setUserData({ ...userData, userType: type });
            }}
            style={pickerSelectStyles}
            //TODO: Confirm User Types.
            items={[
              { label: 'Empresario', value: 1 },
              { label: 'Estudiante', value: 2 },
            ]}
          />
        </View>

        <View>
          <Text style={styles.textInput}>Contreseña</Text>
          <TextInput
            style={styles.input}
            onChangeText={(userPassword) => {
              setUserData({ ...userData, password: userPassword });
            }}
            type="text"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={onRegister}
        >
          <Text style={styles.appButtonText}>Registrarme</Text>
        </TouchableOpacity>
        <View style={styles.linkTextContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Iniciar sesión</Text>
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

//TODO: Move to Theme File.
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: 358,
    height: 48,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 25,
    color: 'black',
    margin: 12,
  },
  inputAndroid: {
    width: 358,
    height: 48,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 25,
    color: 'black',
    margin: 12,
  },
});

export default Register;
