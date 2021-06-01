import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Card from './Card'

export default function App() {
  return (
  <ImageBackground style = {{width:'100%',height:'100%'}} source = {require('./assets/Background.png')}>
    
    <Card/>
    
    
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
