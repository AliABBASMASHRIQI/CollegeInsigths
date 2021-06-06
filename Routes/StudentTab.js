import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentHome from './Student/StudentHome';
import Payment from './Students/Payment';
import Profile from './Students/Profile';
import HomeWork from './Students/HomeWork';

const Tab = createBottomTabNavigator();

export default function StudentTab(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="StudentHome" component={StudentHome}/>
                <Tab.Screen name="HomeWork" component={HomeWork}/>
                <Tab.Screen name="Payment" component={Payment}/>
                <Tab.Screen name="Profile" component={Profile}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

