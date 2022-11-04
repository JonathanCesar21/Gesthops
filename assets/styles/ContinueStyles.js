import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9d9d9",
  },
  title:{
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textButton:{
    fontSize: 18,
    fontFamily: "UbuntuRegular",
    color: "#1E1E1E",
  },
  textTitle1:{
    fontSize: 18,
    fontFamily: "UbuntuBold",
    color: "#1E1E1E",
  },
  textTitle2:{
    fontSize: 36,
    fontFamily: "UbuntuBold",
    color: "#1E1E1E",
  },
  subtitle:{
    marginTop: 25,
    marginBottom: 20,
  },
  subtitleText:{
    fontSize: 18,
    color: "#1E1E1E",
  },
  btnOption:{
    width: 235,
    height: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  txtOption:{
    fontSize: 18,
    fontFamily: "UbuntuMedium",
    color: "#1E1E1E",
  },
  btnEnviar:{
    marginTop: 45,
    width: 160,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E1E1E",
    
  },
  txtEnviar:{
    fontSize: 20,
    color: "#FFFFFF"
  },
 
  inputOutros:{
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    height: 100,
  },
  textOption:{
    alignSelf: "center",
  },
});

export default styles;
