import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function Guest() {
    return (

        <ImageBackground style = {{width:'100%',height:'100%',flex:1}}  source  = {require('../assets/Background.png')}   >      
       

            
          <ImageBackground style = {{width:'100%',height:'100%',flex:1}}  source  = {require('../assets/Background.png')}  >
              <ScrollView horizontal = {true}>
                  
              <View style = {styles.card}> 
               <Text>    </Text>
              </View>

                    
              <View style = {styles.card}> 

              </View>

                    
              <View style = {styles.card}> 

              </View>

                    
              <View style = {styles.card}> 

              </View>

              </ScrollView>
                 
      

               
          </ImageBackground>

           
            <View style = {{flex:1}}>
           
           <View style = {styles.card1} >
           
            <ScrollView style = {{flex:1}}>
            <View style = {styles.card2}>
             <Image style = {{height:130, width:280,flex:1}} source = {require('../assets/polytechnic1.png')} /> 
            </View>

            <View style = {styles.card2}>
            <Image style =  {{height:130, width:280,flex:1}} source = {require('../assets/polytechnic2.png')} />
            </View>

            <View style = {styles.card2}>
            <Image style =  {{height:130, width:280,flex:1}} source = {require('../assets/polytechnic3.png')} />
            </View>

            <View style = {styles.card2}>
            <Image style =  {{height:130, width:280,flex:1}} source = {require('../assets/polytechnic4.png')} />
            </View>

            <View style = {styles.card2}>
            <Image style =  {{height:130, width:280,flex:1}} source = {require('../assets/polytechnic5.png')} />
            </View>



            </ScrollView>

           </View>

        
            </View>


            
            </ImageBackground>
    )
}

const styles = StyleSheet.create({

    card:{
        borderRadius:15,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'stretch',
        marginTop:100,
        marginLeft:30,
        marginRight:20,
        height:150,
        width:180,
        padding:50,
        backgroundColor:'grey',
        alignContent:'center',
        
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },

    card1:{
      
        borderRadius:30,
        flexDirection:'column',
        justifyContent:'space-between',
         marginTop:20,
         marginLeft:5,
         marginRight:5,
        height:500,
        width:400,
        padding:50,
        backgroundColor:'lightgray',
        alignContent:'center',
        alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,

    },

    card2:{
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        height:150,
        width:300,
        padding:50,
        backgroundColor:'darkseagreen',
        alignContent:'center',
        alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,

    }
})
