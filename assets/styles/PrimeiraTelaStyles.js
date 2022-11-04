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
  buttonEscolha:{
    padding: 15,
    paddingLeft: 50,
    paddingRight: 50,
    margin: 10,
    backgroundColor: "#FFF",
    borderStyle: "solid",
    borderRadius: 15,
  },
  marginButtons:{
    marginTop: 0

  },
  subtitle:{
    fontSize: 48,
    marginTop: 100,
    marginBottom: 100,
  },
  subtitleText:{
    color: "#1E1E1E",
    fontSize: 22,
  },
  
});

export default styles;
