import { useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './Theme.js';

function Login( { navigation } ) {
    
    const emailRef = useRef('');
    const passwordRef = useRef('');
  
    const onRegister = () => {
      if (emailRef.current.value !== '' && passwordRef.current.value !== '') {
        // Here goes the verification or processing of the users information
        console.log(emailRef.current.value, passwordRef.current.value)
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
          <Text style={{fontFamily:'sans-serif-light', fontSize:32}}>Inicia Sesión</Text>
          <TextInput style={styles.input} placeholder="example@gmail.com" ref={emailRef} type='text'/>
          <TextInput style={styles.input} placeholder="Contraseña" ref={passwordRef} type='text'/>
          <TouchableOpacity style={styles.appButtonContainer} onPress={onRegister}>
            <Text style={styles.appButtonText}>Iniciar Sesión</Text>
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