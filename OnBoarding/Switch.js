import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';


export default function Switch({navigation}) {

    const Admin = () =>{
        navigation.navigate('AdminLog')
    }
    return (
        <View style={{flex:1,alignItems:'center',justifyContent: 'center',}}>
              <Button icon="camera" mode="contained" onPress={Admin}>
                Press me
             </Button>
             <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
             </Button>
             <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
             </Button>

        </View>
    )
}
