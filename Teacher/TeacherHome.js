import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'

import { Card } from 'react-native-paper'


export default function TeacherHome() {
    return (
        <ImageBackground style = {{height:'100%',width:'100%'}} source = {require('../assets/Background.png')} >
         
        <Card style = {styles.card} >
            <ImageBackground style = {{height:'100%',width:'100%'}} source = {require('../assets/Background1.png')} > 
            <Card.Title title="Notification" subtitle="Card Subtitle" />
    
            <ScrollView>
               <Card style = {{height:100,backgroundColor:'lightgreen',flexDirection:'column'}}  >    
                       <Card.Title title = " Bter PolyTechnic Colletge " subtitle = " Am Ali Abbas"/> 
                       
   
               </Card>
               <Card style = {{height:100,backgroundColor:'lightgreen'}}  >
                         
                         <Card.Title title = " Bter PolyTechnic Colletge " subtitle = " Am Ali Abbas"/>      
                 </Card>

                 <Card style = {{height:100,backgroundColor:'lightgreen'}}  >
                         
                         <Card.Title title = " Bter Results  " subtitle = " Am Ali Abbas"/>      
                 </Card>

                 <Card style = {{height:100,backgroundColor:'lightgreen'}}  >
                         
                         <Card.Title title = " Bter Fails  " subtitle = " Am Ali Abbas"/>      
                 </Card>

                 <Card style = {{height:100,backgroundColor:'lightgreen'}}  >
                         
                         <Card.Title title = " Bter   " subtitle = " Am Ali Abbas"/>      
                 </Card>
                  
                 <Card style = {{height:100,backgroundColor:'lightgreen'}}  >
                         
                         <Card.Title title = " Bter  Uchiha " subtitle = " Am Ali Abbas"/>      
                 </Card>



             </ScrollView>
            </ImageBackground>
  


     </Card>
    
     
    

        </ImageBackground>
      
    )
}

const styles = StyleSheet.create({
 
    card:{
        borderRadius:15,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:200,
        marginLeft:30,
        marginRight:20,
        height:550,
        width:350,
       
        backgroundColor:'lightgrey',
        
        alignContent:'center',
        alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },

})
