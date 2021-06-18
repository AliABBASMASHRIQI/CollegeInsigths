import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';  

import AdminHome from '../Admin/AdminHome';
import AdminPayment from '../Admin/AdminPayment';
import AdminProfile from '../Admin/AdminProfile';
import AdminWork from '../Admin/AdminWork'

const Tab = createMaterialBottomTabNavigator();

export default function StudentTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="AdminHome" tabBarOptions={{showLabel:false}} barStyle={{ backgroundColor: '#fff' }}
>
                <Tab.Screen name="AdminHome" component={AdminHome} 
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color }) => (
                              <MaterialCommunityIcons name="home" color={color} size={26} />
                            ),
                          }}
                />
                <Tab.Screen name="AdminWork" component={AdminWork}
                         options={{
                            tabBarLabel: 'Work',
                            tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="book" color={color} size={26} />
                        ),
                     }}
                />
                <Tab.Screen name="AdminPayment" component={AdminPayment} 
                         options={{
                            tabBarLabel: 'Fees',
                            tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="bank" color={color} size={26} />
                        ),
                     }}
                />
                <Tab.Screen name="AdminProfile" component={AdminProfile}
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
