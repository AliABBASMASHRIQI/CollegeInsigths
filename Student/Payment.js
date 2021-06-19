import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function Payment() {
    return (
        <View style={Styles.container}>
            <Text>Payment</Text>
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