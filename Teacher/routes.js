import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TeacherHome from './TeacherHome';
import Attendance from './Attendance';
import Profile from './Profile';
import HomeWork from './HomeWork';         
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
  


const Tabs = AnimatedTabBarNavigator();

export default  () => (
    <NavigationContainer> 
  <Tabs.Navigator
    // default configuration from React Navigation
    tabBarOptions={{
      activeTintColor: "green",
      inactiveTintColor: "grey"
    }}
  >

    <Tabs.Screen name="TeacherHome" component={TeacherHome} />
    <Tabs.Screen name = "Attendance" component = {Attendance}/>
    <Tabs.Screen name = "Profile" component = {Profile}/>
    <Tabs.Screen name = "HomeWork" component = {HomeWork}/>

    
    

  </Tabs.Navigator>
  </NavigationContainer>
)



