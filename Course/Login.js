import React from 'react'
import { View, Text,ImageBackground,TouchableOpacity } from 'react-native'
import { Card, Title, Paragraph,TextInput,Button, } from 'react-native-paper';


export default function Login({navigation}) {
    const Login = () => {
        navigation.navigate('home')
    }
    // const Home = () => {
    //     navigation.navigate('Home')
    // }
    return (
        <ImageBackground source={require('../assets/Stubac.jpg')} style={{width:'100%',height:'100%'}}>
            <Card style={{height:'70%',marginTop: '25%',borderWidth: 1,width:'90%',marginLeft: '5%',borderRadius:15,backgroundColor: '#eee',}}>
                <Card.Content style={{marginTop: 70,}}>
                <Text style={{marginLeft: '19%',fontSize:28,fontWeight:'bold',marginTop:-50,}}>College Insights</Text>
                <TextInput
                    label="Email"
                    right={<TextInput.Icon name="email" />}
                    style={{marginTop: 30,backgroundColor: '#fff',}}
                />
                <TextInput
                    style={{marginTop: 10,backgroundColor: '#fff',}}
                    label="Password"
                    secureTextEntry
                    right={<TextInput.Icon name="eye" />}
                />
                <Button style={{backgroundColor:'#057D41' ,borderWidth:1,borderRadius:18,marginLeft: 80,marginTop: 50,width:150,height:50,justifyContent: 'center',}} mode="contained" onPress={Login}>
                    Login
                </Button>
                <TouchableOpacity onPress={Login}>
                <Text style={{marginLeft: '38%',marginTop: 20, color:'blue',fontSize:15}} >About Colleg</Text>
                </TouchableOpacity>
                </Card.Content>
            </Card>
        </ImageBackground>
    )
}
