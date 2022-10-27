import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
      justifyContent: 'center',
      width: '100%',
      height: 'auto',
      alignItems: 'center',
      marginTop: 50,
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
      backgroundColor: "#AC0A22",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: '60%',
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      alignSelf: "center",
      textTransform: "uppercase",
      fontFamily: "Roboto",
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
    burgerMenu : {
      marginLeft : 20,
      marginTop : 20
    },
    footer : {
      flex: 1,
      justifyContent: "flex-end",
      marginLeft: '10%',
      marginRight: 20,
      marginTop: '35%',
      alignItems: "flex-end",
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
    }

  });
  