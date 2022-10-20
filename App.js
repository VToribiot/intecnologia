import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

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
        <TextInput style={styles.input} placeholder="example@gmail.com" />
        <TextInput style={styles.input} placeholder="Nombre" />
        <TextInput style={styles.input} placeholder="Edad" />
        <TouchableOpacity style={styles.appButtonContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '60%',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FF3131',
    justifyContent: 'center',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    padding: 15,
    marginTop: 50,
  },
  headerFont: {
    fontSize: 36,
    marginVertical: 10,
    fontFamily: 'notoserif',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '45%',
    marginTop: 100,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#FF3131",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  helpButtonContainer: {
    elevation: 8,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 50,
    height: 50,
    justifyContent: 'flex-end'
  },
  helpButtonText: {
    fontSize: 18,
    color: "#FF3131",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  footer : {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '35%',
    alignItems: "flex-end",
  }
});
