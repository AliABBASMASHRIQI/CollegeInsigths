import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import StudentHome from '../Student/StudentHome';
import HomeWork from '../Student/HomeWork';
import Payment from '../Student/Payment';
import Profile from '../Student/Profile';
import Icon from 'react-native-vector-icons/Ionicons';  

const Tab = createMaterialBottomTabNavigator();

export default function StudentTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="StudentHome" tabBarOptions={{showLabel:false}} barStyle={{ backgroundColor: '#fff' }}
>
                <Tab.Screen name="StudentHome" component={StudentHome} 
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color }) => (
                              <MaterialCommunityIcons name="home" color={color} size={26} />
                            ),
                          }}
                />
                <Tab.Screen name="HomeWork" component={HomeWork}
                         options={{
                            tabBarLabel: 'Work',
                            tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="book" color={color} size={26} />
                        ),
                     }}
                />
                <Tab.Screen name="Payment" component={Payment} 
                         options={{
                            tabBarLabel: 'Fees',
                            tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="bank" color={color} size={26} />
                        ),
                     }}
                />
                <Tab.Screen name="Profile" component={Profile}
                         options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                     }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
