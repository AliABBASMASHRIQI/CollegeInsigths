import React from 'react'
import { View, Text,ImageBackground } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

export default function Courseinfo() {
    return (
    <ImageBackground source={require('../assets/civil.jpg')} style={{width:'100%',height:'100%'}}>
      <View style={{flex:1,justifyContent: 'flex-end',}}>
    <Card style={{borderRadius:20,height:600}} >
    <Card.Title title="Civil engineering"/>
    <Text style={{fontSize:15,marginLeft: 16,marginTop: -6,}}>Seats: 60+(30)</Text>
    <Card.Content>
      <Title style={{fontSize:20,fontWeight:'bold',marginTop: 15,}}>Elegibility:</Title>
      <Text style={{fontSize:15}}>10th Class pass from any recognized</Text>
      <Text style={{fontSize:15}}>board</Text>
      <Text style={{fontSize:20,fontWeight:'bold',marginTop: 20}}>Admission</Text>
      <Paragraph style={{fontSize:15}}>Centralizes admission through directorate of</Paragraph>
      <Paragraph style={{fontSize:15}}>Technical Education (DTE) Goverment of</Paragraph>
      <Paragraph style={{fontSize:15}}>Rajsthan on meant basis</Paragraph>
      <Text style={{fontSize:20,fontWeight:'bold',marginTop: 25}}>Duration of course:</Text>
      <Text style={{fontSize:15}}>3 Year</Text>
      <Text style={{fontSize:20,fontWeight:'bold',marginTop: 30}}> Fee Structure:<Text style={{fontSize:15,fontWeight:'normal'}}>35000 rupess/year</Text></Text>
      <Text style={{fontSize:20,fontWeight:'bold',marginTop: 25}}>For More Info Contact (HOD)</Text>
      <Text style={{fontSize:15}}>8107650390</Text>
    </Card.Content>
    <Card.Actions>
    <Button style={{backgroundColor:'#057D41' ,borderWidth:1,borderRadius:18,marginLeft: 110,marginTop: 25,width:150}} mode="contained" onPress={() => console.log('Pressed')}>
    Choose
  </Button>
    </Card.Actions>
  </Card>
  </View>
</ImageBackground>
    )
}
