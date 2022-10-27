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
    burgerMenu : {
      marginLeft : 20,
      marginTop : 20
    },
    footer : {
      flex: 1,
      justifyContent: "flex-end",
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: '35%',
      alignItems: "flex-end",
    },
    scannerQrButton: {
      backgroundColor: "#ffffff",
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 10,
      width: 50,
      height: 50,
    }
  });
  