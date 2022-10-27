import axios from 'axios';
import React,{  useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './Theme.js';

function Register( { navigation } ) {
  
  const font = 'Roboto';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState(0);
  const data = {
    emailUser : email,
    fullNameUser : name,
    passwordUser : password,
    idUserType : type
  }
    const onRegister = () => {
      if (email.trim() !== '' && name.trim() !== '' && password.trim() !== '' && type > 0) {
        // Here goes the verification or processing of the users information
        axios.post('http://evasquez03-001-site1.btempurl.com/api/User/Register', data)
        .then(
          res => {
            if(res.data.result.stringCode === 'Correo valido'){
              console.log('Registrado correctamente')
              // Redirect to Login or Home Page → This needs to be decided by the team
              navigation.navigate('Login')
            }
            else{
              alert('Ha ocurrido un error, no pudo ser registrado, favor intentar nuevamente')
            }
            console.log(res.data.result.stringCode)
          }
        )
        .catch(
          err => {}
        )
        console.log(email, name, password, type)
      } else {
        alert('Debe llenar todos los campos especificados')
      }
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source = {require('../assets/LogoIntecnologia.png')}
            style = {{ width: "85%", height: 50 }}
          />
        </View>
        <View style={styles.body}>
          <View>
            <Text style={styles.textInput}>Nombre de usuario</Text>
            <TextInput style={styles.input} placeholder="" onChangeText={newName => setName(newName)} type='text'/>
          </View>
          <View>
            <Text style={styles.textInput}>Correo electronico</Text>
            <TextInput style={styles.input} placeholder="" onChangeText={newEmail => setEmail(newEmail)} type='text'/>
          </View>
          {/*Check how to link this with a useRef in order to validate if empty*/}
          <View>
            <Text style={styles.textInput}>Tipo usuario</Text>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              onValueChange={(value) => setType(value)}
              style={pickerSelectStyles}
              items={[
                  { label: 'Empresario', value: 1 },
                  { label: 'Estudiante', value: 2 }
              ]}
            />
          </View>
          
          <View>
            <Text style={styles.textInput}>Contreseña</Text>
            <TextInput style={styles.input}  onChangeText={newPassword => setPassword(newPassword)} type='text' secureTextEntry={true}/>
          </View>
          <TouchableOpacity style={styles.appButtonContainer} onPress={onRegister}>
            <Text style={styles.appButtonText}>Registrarme</Text>
          </TouchableOpacity>
          <View style={styles.linkTextContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.linkText}>Iniciar sesión</Text></TouchableOpacity>
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
  }
});

export default Register