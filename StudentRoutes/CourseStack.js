import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from '../Course/Home';
// import Home from '../Course/Home'
import infos from '../Course/Courseinfo';
import soft from '../Course/Softinfo';
import it from '../Course/It';
import electrical from '../Course/Electrical';
import electronic from '../Course/Electronc';
import login from '../Course/Login';

const Stack = createStackNavigator();
 
export default function CourseStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login" options={{headerShown: false}} >
                <Stack.Screen options={{headerShown: false}} name="login" component={login}/>
                <Stack.Screen options={{headerShown: false}}  name="home" component={home}/>
                <Stack.Screen options={{headerShown: false}}  name="infos" component={infos}/>
                <Stack.Screen options={{headerShown: false}} name="soft" component={soft}/>
                <Stack.Screen options={{headerShown: false}} name="it" component={it}/>
                <Stack.Screen options={{headerShown: false}} name="electrical" component={electrical}/>
                <Stack.Screen options={{headerShown: false}} name="electronic" component={electronic}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}