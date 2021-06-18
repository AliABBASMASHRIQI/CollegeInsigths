import React from 'react'
import { View,StyleSheet,ImageBackground ,ScrollView} from 'react-native'
import { Avatar,Divider, Text ,Headline,Title, Card, Paragraph,Button } from 'react-native-paper';


export default function StudentHome() {
    return (
        <ImageBackground source={require('../assets/stubac2.jpg')} style={{width:'100%',height:'100%'}}>
        <View>
            <Avatar.Text size={50} label="XD" style={{marginLeft: 10,marginTop:20}}/>
            <Text style={{marginLeft: 80,marginTop: -40,fontSize:25,fontWeight:'bold'}}>Mohd Atiq</Text>
            <View style={{marginTop: 20,}}>
            <Divider />
            </View>
            <Title style={{margin: 20,}}>College Notification</Title>
            <Divider />
        
                <ScrollView style={{marginBottom: 120,}}>
            <Card style={{marginTop:30,borderWidth:1,borderRadius:15,width:'95%',marginLeft: 10,}}>
                <Card.Content>
                <Title>Exam form</Title>
                <Paragraph>Date extended 23-12-2050</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
                </Card.Actions>
            </Card>
            <Card style={{marginTop:30,borderWidth:1,borderRadius:15,width:'95%',marginLeft: 10,}}>
                <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
                </Card.Actions>
            </Card>
            <Card style={{marginTop:30,borderWidth:1,borderRadius:15,width:'95%',marginLeft: 10,}}>
                <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
                </Card.Actions>
            </Card>
            </ScrollView>
        </View>
        </ImageBackground>
    )
}
