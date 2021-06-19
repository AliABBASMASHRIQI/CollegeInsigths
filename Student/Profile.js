import React from 'react'
import { View, Text,StyleSheet,ImageBackground } from 'react-native'
import { Avatar,Button } from 'react-native-paper';


export default function Profile() {
    return (
        <ImageBackground source={require('../assets/Stubac.jpg')} style={{width:'100%',height:'100%'}}>
            <Text style={{marginTop:20,marginLeft: 50,fontSize:25,fontWeight:'bold'}}>Student Profile</Text>
            <View style={{alignItems:'center',marginTop:30,}}>
            <Avatar.Image size={100} source={require('../assets/soft.jpg')} />
            <Text style={{fontSize:30,marginTop:10}}>Mohd Shahid</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Button style={{width:130,marginLeft: 20,marginTop:10,borderWidth:1,borderColor:'#fff'}} mode="contained" onPress={() => console.log('Pressed')}>
                Deparment
            </Button>
            <Button style={{width:130,marginLeft: 70,marginTop:10,borderWidth:1,borderColor:'#fff'}}  mode="contained" onPress={() => console.log('Pressed')}>
                Year
            </Button>
            </View>
        </ImageBackground>
    )
}
// const Styles= StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// })