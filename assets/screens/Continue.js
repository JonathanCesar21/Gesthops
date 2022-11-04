import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles/ContinueStyles';
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from 'react-native-select-dropdown'

const ContinueTela = () => {

    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    const countries2 = ["teste1", "teste2", "teste3", "teste4"]
    const countries3 = ["teste5", "teste6", "teste7", "teste8"]
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.textTitle2}>GESTHOPS</Text>
            </View>
            <View style={styles.subtitle}>
                <Text style={styles.subtitleText}>Continue seu Apontamento</Text>
            </View>
            <View style={styles.subtitle2}>
                <Text style={styles.subtitleText}>O paciente apresentou:</Text>
            </View>
            <View>
                <SelectDropdown
                    data={countries}
                    style={styles.dropDown}
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
                <SelectDropdown
                    style={styles.btnOption}
                    data={countries2}
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
                <SelectDropdown
                    style={styles.btnOption}
                    data={countries3}
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
                <Text>Outros:</Text>
                <TextInput style={styles.inputOutros} multiline={true}>
                </TextInput>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.btnEnviar}
                >
                    <Text style={styles.txtEnviar}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ContinueTela