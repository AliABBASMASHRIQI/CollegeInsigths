import React from 'react'
import { View, Text,ImageBackground,ScrollView,TouchableOpacity } from 'react-native';
import { Searchbar ,Button,Avatar, Card, Title, Paragraph,} from 'react-native-paper';

export default function Info({navigation}) {
    const CivilPress = () => {
        navigation.navigate('infos')
    }
    const SoftPress = () => (
        navigation.navigate('soft')
    )
    const ItPress = () => {
        navigation.navigate('it')
    }
    const ElectricalPress = () => {
        navigation.navigate('electrical')
    }
    const ElectronicPress = () => {
        navigation.navigate('electronic')
    }
    return (

        
        <ImageBackground source={require('../assets/home.jpg')} style={{width:'100%',height:'100%'}}>
            <Text style={{fontSize:30,fontWeight:'bold',margin:20}}>Courses</Text>
            <View style={{alignItems:'center'}}>
            <Searchbar
            placeholder="Search"
            style={{borderWidth:1,borderRadius:20,width:320,}}/>
            </View>
            <View style={{flexDirection:'row',marginTop:20,justifyContent: 'space-around',}}>
            <Button style={{ borderWidth:1,borderRadius:20,backgroundColor:'#057D41' ,}} mode="contained">
             Deploma
            </Button>
            <Button style={{ borderWidth:1,borderRadius:20,backgroundColor:'#057D41' ,}} mode="contained" onPress={() => console.log('Pressed')}>
             Deploma
            </Button>
            <Button style={{ borderWidth:1,borderRadius:20,backgroundColor:'#057D41' ,}} mode="contained" onPress={() => console.log('Pressed')}>
             Deploma
            </Button>
            </View>
             
                <ScrollView style={{marginTop: 20,}}>
                    <View style={{alignItems: 'center',}}>
                    <TouchableOpacity>
            {/* <View style={{alignItems:'center'}}> */}
                <Card onPress={CivilPress} style={{width:350,marginTop: 20,}}>
                    <Card.Content>
                    <Card.Cover  source={require('../assets/civil.jpg')}/>
                    <Title>Civil engineering(CE)</Title>
                    <Paragraph>Seats:60+(30)</Paragraph>
                    </Card.Content>
                </Card>
            {/* </View> */}
                <Card onPress={SoftPress} style={{width:350,marginTop: 20,}}>
                    <Card.Content>
                    <Card.Cover  source={require('../assets/soft.jpg')}/>
                    <Title>Software Engineering(CS) </Title>
                    <Paragraph>Seats:60+(30)</Paragraph>
                    </Card.Content>
                </Card>
                <Card onPress={ItPress} style={{width:350,marginTop: 20,}}>
                    <Card.Content>
                    <Card.Cover  source={require('../assets/it.jpg')}/>
                    <Title>Information Technology(IT)</Title>
                    <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>
                <Card onPress={ElectricalPress} style={{width:350,marginTop: 20,}}>
                    <Card.Content>
                    <Card.Cover  source={require('../assets/electrical.jpg')}/>
                    <Title>Electrical Engineering(EL)</Title>
                    <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>
                <Card onPress={ElectronicPress} style={{width:350,marginTop: 20,}}>
                    <Card.Content>
                    <Card.Cover  source={require('../assets/electronic.jpg')}/>
                    <Title >Electronic Engineering(EE)</Title>
                    <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>
                </TouchableOpacity>
                </View>
                </ScrollView>
            
        </ImageBackground>
    )
}
