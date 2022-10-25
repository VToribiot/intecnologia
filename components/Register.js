import { useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './Theme.js';

function Register( { navigation } ) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState();
  
    const onRegister = () => {
      if (emailRef.current.value !== '' && nameRef.current.value !== '' && passwordRef.current.value !== '') {
        // Here goes the verification or processing of the users information
        console.log(emailRef.current.value, nameRef.current.value, passwordRef.current.value)
      } else {
        alert('Debe llenar todos los campos especificados')
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
          <Text style={{fontFamily:'sans-serif-light', fontSize:32}}>Regístrate</Text>
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
                fontFamily : 'sans-serif-light',
              }}}
            items={[
                { label: 'Estudiante', value: 1 },
                { label: 'Empresario', value: 2 },
                { label: 'Ni idea', value: 3 },
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