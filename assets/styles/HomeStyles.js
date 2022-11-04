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
    marginBottom: 150,
  },
  textButton:{
    fontSize: 18,
    fontFamily: "UbuntuRegular",
    color: "#1E1E1E",
  },
  textTitle1:{
    fontSize: 36,
    fontFamily: "UbuntuBold",
    color: "#1E1E1E",
  },
  textTitle2:{
    fontSize: 24,
    fontFamily: "UbuntuBold",
    color: "#1E1E1E",
  },
  buttonEscolha:{
    padding: 10,
    margin: 5,
    backgroundColor: "#FFF",
    borderStyle: "solid",
    borderRadius: 15,
  },
  input:{
    marginBottom: 25,
    paddingLeft: 15,
    height: 35,
    width: 230,
    borderRadius: 20,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  btnEntrar:{
    marginTop: 35,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
  },
});

export default styles;
