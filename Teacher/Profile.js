import React from 'react'
import { View, Text, ImageBackground,StyleSheet } from 'react-native'
import { Card , Avatar , Appbar } from 'react-native-paper'

export default function Profile() {
    return (
<ImageBackground style = {{height:'100%',width:'100%'}} source = {require('../assets/Background1.png')} > 
<Appbar.Header style = {{width:'100%',backgroundColor:'grey'}}>
      <Appbar.BackAction />
      <Appbar.Content title='Faculty' subtitle="" />
      <Appbar.Action icon="magnify"  />
      <Appbar.Action icon="dots-vertical"/>
    </Appbar.Header>
            <Card style = {styles.card}>   
            <ImageBackground style = {{height:'100%',width:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}} source = {require('../assets/Background.png')} >     
            
            <Avatar.Text style = {{}} size={70} label="XD"/>
            <View>
                <Text style = {{fontSize:30,color:'darkblue'}} > Ali ABBAS </Text>
            </View>
            </ImageBackground>
            </Card>

            <Card style = {styles.card1}>   
            <ImageBackground style = {{height:'100%',width:'100%'}} source = {require('../assets/Background.png')} >     
           
            <View style = {{flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
                <Text style = {{fontSize:30,color:'darkblue',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:70}} > Email: MK @gmail.com</Text>
                <Text style = {{fontSize:30,color:'darkblue',flexDirection:'row'}} > Mobile : 6376332312</Text>
            </View>
            </ImageBackground>
            </Card>
            
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
 
    card:{
        borderRadius:15,
        flexDirection:'row',
        
        flex:1,
        
       
        height:300,
        width:390,
        marginLeft:10,
        marginRight:10,
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


    card1:{
        borderRadius:15,
        flexDirection:'row',
        flex:1,
      
        marginLeft:10,
          
        marginTop:10,
       marginRight:5,
        height:400,
        width:390,
      
        backgroundColor:'lightgrey',
        
        
        
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },


})
