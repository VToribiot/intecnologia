import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    textInput:{
      marginLeft: 28
    },
    input: {
      width: 358,
      height: 48,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 25,
      borderColor: '#E9E9E9',
      marginBottom: 10,
      paddingLeft: 20
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      height: 'auto',
      alignItems: 'center',
      marginTop: 100,
      marginBottom: 50
    },
    body: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      height: '45%',
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#AC0A22",
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: 358,
      marginTop: 10
    },
    appButtonText: {
      color: "#fff",
      alignSelf: "center",
      fontFamily: "Roboto",
      padding: 5
    },
    linkTextContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent:'space-between',
      paddingHorizontal: 35,
      paddingVertical:20,
    },
    linkText:{
      color: '#AC0A22',
      textDecorationLine: 'underline',
      fontWeight: 'bold'
    },
    helpButtonContainer: {
      elevation: 8,
      backgroundColor: "#AC0A22",
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 10,
      width: 50,
      height: 50,
      justifyContent: 'flex-end'
    },
    helpButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    burgerMenu : {
      marginLeft : 20,
      marginTop : 20
    },
    footer : {
      flex: 1,
      justifyContent: "space-between",
      marginLeft: '10%',
      marginRight: 20,
      marginTop: 150
    },
    scannerQrButton: {
      backgroundColor: "#ffffff",
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 10,
      width: 53,
      height: 53,
      justifyContent:'center',
      alignItems:'center'
    },
    

  });
  