import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from '../styles/HomeStyles'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle1}>Gesthops</Text>
      </View>
      <View>
        <TextInput
          placeholder='Login'
          style={styles.input}
        >
        </TextInput>
        <TextInput
          placeholder='Senha'
          secureTextEntry={true}
          style={styles.input}
        >
        </TextInput>
      </View>
      <TouchableOpacity
        style={styles.btnEntrar}
        onPress={() =>
          navigation.navigate("PrimeiraTela", {
          })
        }
      >
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen