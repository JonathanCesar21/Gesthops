import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles/ContinueStyles';
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from 'react-native-select-dropdown'

const ApontamentoTela = () => {

    const options1 = ["opção1", "opção2", "opção3", "Grave"]
    const options2 = ["Sim", "Não"]
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.textTitle2}>GESTHOPS</Text>
            </View>
            <View style={styles.subtitle}>
                <Text style={styles.subtitleText}>Faça seu apontamento</Text>
            </View>
            <View>
                <Text style={styles.textOption}>Qual o estado do paciente?</Text>
                <SelectDropdown
                    data={options1}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
                <Text style={styles.textOption}>O Paciente está acordado?</Text>
                <SelectDropdown
                    style={styles.btnOption}
                    data={options2}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
                <Text style={styles.textOption}>O paciente possui alguma lesão?</Text>
                <SelectDropdown
                    style={styles.btnOption}
                    data={options2}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
                <Text style={styles.textOption}>O paciente está sangrando?</Text>
                <SelectDropdown
                    style={styles.btnOption}
                    data={options2}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
                <Text style={styles.textOption}>O paciente possui alguma doença?</Text>
                <SelectDropdown
                    style={styles.btnOption}
                    data={options2}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
            </View>
            <View>
                <TouchableOpacity
                    style={styles.btnEnviar}
                    onPress={() =>
                        navigation.navigate("ContinueTela", {
                        })
                    }>
                    <Text style={styles.txtEnviar}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ApontamentoTela