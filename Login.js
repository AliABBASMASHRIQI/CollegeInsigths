import React from 'react'
import {  Button, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


export default function Login({navigation}) {
    return (
        <ImageBackground  style = {{width:'100%',height:'100%',flex:1}}  source  = {require('../assets/LoginBackground.png')}  >
          <View  style = {styles.card} >
             <TextInput style = {styles.textinput} placeholder = 'Username' />
             <TextInput style = {styles.textinput} placeholder = 'Password' />
             <TouchableOpacity style = {styles.btn}>
                    <Text> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.text} >
                    <Text > If you want to Enter As Guest Click here </Text>
                </TouchableOpacity>
                
        </View> 
        </ImageBackground>
    )
} 
const styles = StyleSheet.create({
     
    card:{
        borderRadius:15,
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:160,
        marginLeft:30,
        marginRight:20,
        height:400,
        width:350,
        padding:50,
        backgroundColor:'lightgrey',
        marginBottom:20,
        alignContent:'center',
        alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },
   
    textinput:{
        width:300,
        height:1,
        borderBottomColor:'darkseagreen',
        borderBottomWidth:2,
        
        flex:1,
        marginTop:50
    },
     
    btn:{
        width: 100,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'darkseagreen',
        marginTop:20,
        
    },

    text:{
        fontSize:20,
        marginTop:20,
        color:'lightseagreen'
    }
   
})
