import axios from 'axios';
import React,{  useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './Theme.js';

function Register( { navigation } ) {
  
  const font = 'sans-serif-light';
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
      <View>
        <View style={styles.header}>
          <Text style={styles.headerFont}>INTECNOLOGIA</Text>
        </View>
        <View style={styles.body}>
          <Text style={{fontFamily:font, fontSize:32}}>Regístrate</Text>
          <TextInput style={styles.input} placeholder="example@gmail.com" onChangeText={newEmail => setEmail(newEmail)} type='text'/>
          <TextInput style={styles.input} placeholder="Nombre" onChangeText={newName => setName(newName)} type='text'/>
          {/*Check how to link this with a useRef in order to validate if empty*/}
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            onValueChange={(value) => setType(value)}
            style={{
              placeholder : {
                color : 'black',
                fontSize: 18,
                fontFamily : font,
              }}}
            items={[
                { label: 'Empresario', value: 1 },
                { label: 'Estudiante', value: 2 }
            ]}
          />
          <TextInput style={styles.input} placeholder="Contraseña" onChangeText={newPassword => setPassword(newPassword)} type='text'/>
          {/*<Button color='#FF3131'title='Registrar' onPress={onRegister} ></Button>*/}
          <TouchableOpacity style={styles.appButtonContainer} onPress={onRegister}>
            <Text style={styles.appButtonText}>Registrar</Text>
          </TouchableOpacity>
          {/*<TouchableOpacity style={styles.appButtonContainer} onPress={() =>
                navigation.navigate('ScanQR')}>
            <Text style={styles.appButtonText}>Scanear QR</Text>
          </TouchableOpacity>*/}
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.helpButtonContainer}>
              <Text style={styles.helpButtonText}>?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default Register