import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function HomeWork() {
    return (
        <View  style={Styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}
const Styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})