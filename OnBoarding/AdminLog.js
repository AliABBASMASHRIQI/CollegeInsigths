import React, { Component } from 'react'
import { Text, View,ImageBackground,TouchableOpacity,Alert } from 'react-native'
import { Card, Title, Paragraph,TextInput,Button, } from 'react-native-paper';
import * as fire from 'firebase';
import Config from '../config';

const shahid = fire.initializeApp(Config);


export default class AdminLog extends React.Component {

    state={
        Email:"",
        password:""
    };

    userSignup(Email,password){
        fire.auth().signInWithEmailAndPassword(Email,password)
        .then(()=>{
          this.props.navigation.replace("AdminHome")
        })
        .catch(error=>{
          Alert.alert(error.message)
        })
      }
    

    render() {

        return (
            <ImageBackground source={require('../assets/Stubac.jpg')} style={{width:'100%',height:'100%'}}>
                <Card style={{height:'70%',marginTop: '25%',borderWidth: 1,width:'90%',marginLeft: '5%',borderRadius:15,backgroundColor: '#eee',}}>
                    <Card.Content style={{marginTop: 70,}}>
                    <Text style={{fontSize:23,fontWeight:'bold',marginTop:-50,textAlign:'center'}}>College Insights Admin</Text>
                    <TextInput
                    value={this.state.Email}
                    onChangeText={(text)=>this.setState({Email:text})}
                        label="Email"
                        right={<TextInput.Icon name="email" />}
                        style={{marginTop: 30,backgroundColor: '#fff',}}
                    />
                    <TextInput
                    value={this.state.Password}
                    onChangeText={(text)=>this.setState({password:text})}
                        style={{marginTop: 10,backgroundColor: '#fff',}}
                        label="Password"
                        secureTextEntry
                        right={<TextInput.Icon name="eye" />}
                    />
                    <Button style={{backgroundColor:'#057D41' ,borderWidth:1,borderRadius:18,marginLeft: 80,marginTop: 50,width:150,height:50,justifyContent: 'center',}} mode="contained"
                    onPress={()=>this.userSignup(this.state.Email,this.state.password)}
                    >
                        Login
                    </Button>
                    <TouchableOpacity>
                    <Text style={{marginLeft: '38%',marginTop: 20, color:'blue',fontSize:15}} >About Colleg</Text>
                    </TouchableOpacity>
                    </Card.Content>
                </Card>
            </ImageBackground>
        )
    }
}
