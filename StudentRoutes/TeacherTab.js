import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';  

import TeacherHome from '../Teacher/TeacherHome';
import TeacherPayment from '../Teacher/TeacherPayment';
import TeacherProfile from '../Teacher/TeacherProfile';
import TeacherWork from '../Teacher/TeacherWork'

const Tab = createMaterialBottomTabNavigator();

export default function StudentTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="TeacherHome" tabBarOptions={{showLabel:false}} barStyle={{ backgroundColor: '#fff' }}
>
                <Tab.Screen name="TeacherHome" component={TeacherHome} 
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color }) => (
                              <MaterialCommunityIcons name="home" color={color} size={26} />
                            ),
                          }}
                />
                <Tab.Screen name="TeacherWork" component={TeacherWork}
                         options={{
                            tabBarLabel: 'Work',
                            tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="book" color={color} size={26} />
                        ),
                     }}
                />
                <Tab.Screen name="TeacherPayment" component={TeacherPayment} 
                         options={{
                            tabBarLabel: 'Fees',
                            tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="bank" color={color} size={26} />
                        ),
                     }}
                />
                <Tab.Screen name="TeacherProfile" component={TeacherProfile}
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
