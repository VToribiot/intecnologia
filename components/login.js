import { useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './Theme.js';

function login() {
    const emailRef = useRef('');
    const nameRef = useRef('');
  
    const onRegister = () => {
      if (emailRef.current.value !== '' && nameRef.current.value !== '') {
        // Here goes the verification or processing of the users information
        console.log(emailRef.current.value, nameRef.current.value)
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
          <TextInput style={styles.input} placeholder="example@gmail.com" ref={emailRef} type='text'/>
          <TextInput style={styles.input} placeholder="Nombre" ref={nameRef} type='text'/>
          <RNPickerSelect
            style={styles.input}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Estudiante', value: 1 },
                { label: 'Empresario', value: 2 },
                { label: 'Ni idea', value: 3 },
            ]}
        />
          {/*<Button color='#FF3131'title='Registrar' onPress={onRegister} ></Button>*/}
          <TouchableOpacity style={styles.appButtonContainer} onPress={onRegister}>
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

export default login