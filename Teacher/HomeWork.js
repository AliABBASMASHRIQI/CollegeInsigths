import React from 'react'
import { View, Text ,StyleSheet,TextInput, ScrollView, ImageBackground } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'; 
import {Card,Appbar} from 'react-native-paper'

export default function HomeWork() {
    return (
        <View style = {{flex:1}}>
              <ImageBackground style = {{height:'100%',width:'100%'}} source = {require('../assets/Background.png')} >  
        <Card style = {styles.card}>
          <TextInput style = {{textAlign:'auto'}}  placeholder = {'Search Here'}>   
           </TextInput>
          {/* <EvilIcons name="search" size={24} color="black"  /> */}   
        </Card>  

           <ScrollView>
               
             <Card style = {styles.card1}>
              <Text style = {{fontSize:24}}>  Add Assignments </Text>
             </Card>

             <Card style = {styles.card1}>
             <Text style = {{fontSize:24}}>  Add Notes </Text>
             </Card>

            <Card style = {styles.card1}>
            <Text style = {{fontSize:24}}>  Add Videos </Text>
             </Card>

            <Card style = {styles.card1}>
            <Text style = {{fontSize:24}}>  Add Lectures </Text>
            </Card>

             <Card style = {styles.card1}>
             <Text style = {{fontSize:24}}>  Add Question Paper </Text>
            </Card>

           </ScrollView>

           </ImageBackground>
       </View>
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
        height:35,
        width:350,
       
        backgroundColor:'lightgrey',
        
     //   alignContent:'center',
     //   alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },
    card1:{
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'seagreen',
        marginTop:20,
        marginLeft:30,
        marginRight:20,
        height:100,
        width:350,   
        shadowOffset:{width:100,height:100},
        shadowColor:'black',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },
})