import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
// import Guest from './Guest/Guest';
//  import Login from './Guest/Login';
//  import Courses from './Guest/Courses'
//  import StudentTab from './Routes/StudentTab'
import { NavigationContainer } from '@react-navigation/native';
 import TeacherHome from './Teacher/TeacherHome'
 import Profile from './Teacher/Profile'
 import Homework from './Teacher/HomeWork'
 import Routes from './Teacher/routes'

export default function App() {
  return (
  
    // <Courses/>
    //  <Login/>
    //<Profile/>
  //  <Homework/>
           <Routes/>
    
   
  )
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
