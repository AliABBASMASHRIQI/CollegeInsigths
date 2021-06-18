import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import Boarding from './OnBoarding/Boarding';
// import Login from './OnBoarding/Login';
// import Switch from './OnBoarding/Switch';
import Boarding from './Boarding';
import Switch from './Switch';
import AdminLog from './AdminLog';
import AdminHome from '../StudentRoutes/AdminTab'


const Stack = createStackNavigator();


const BoardingStack = () => {
  const [isFirstLounch, setisFIrstLounch] = React.useState(null);

  useEffect(()=>{

    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLounched' , 'true');
        setisFIrstLounch(true)
      }else{
        setisFIrstLounch(false);
      }
    });
},[]);

 if (isFirstLounch == null) {
  return null;
}else if(isFirstLounch == true){
  return(
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Boarding" component={Boarding}/>
        <Stack.Screen name="Switch" component={Switch}/>
        <Stack.Screen name="AdminLog" component={AdminLog}/>
        <Stack.Screen name="AdminHome" component={AdminHome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
} else {
  <Login/>
}

 
}
export default BoardingStack;
