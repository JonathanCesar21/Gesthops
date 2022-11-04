import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles/PrimeiraTelaStyles';
import { useNavigation } from "@react-navigation/native";

const PrimeiraTela = () => {
    
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.textTitle1}>Bem Vindo(a) ao</Text>
                <Text style={styles.textTitle2}>GESTHOPS</Text>
            </View>
            <View style={styles.subtitle}>
                <Text style={styles.subtitleText}>O que você deseja fazer?</Text>
            </View>
            <View style={styles.marginButtons}>
                <TouchableOpacity style={styles.buttonEscolha}
                    onPress={() =>
                        navigation.navigate("ApontamentoTela", {
                        })
                    }>
                    <Text style={styles.textButton}>Gerar Apontamento</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonEscolha}>
                    <Text style={styles.textButton}>Buscar Apontamento</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonEscolha}>
                    <Text style={styles.textButton}>Meus Apontamentos</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PrimeiraTela