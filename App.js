import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Guest from './Guest/Guest';
 import Login from './Guest/Login';
 import Courses from './Guest/Courses'


export default function App() {
  return (
  
    // <Courses/>
     <Login/>
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
