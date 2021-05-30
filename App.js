import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.jpeg';

export default function App() {
  return (
    <View style={styles.container}>
      {/* must explicitly state width and height for an image to appear */}
      {/* we can also change the source of the image to be a URL by changing the source format to 'uri: https://path-to-image' */}
      <Image source={logo} style={styles.pandaLogo} />
      <Text style={{color: '#888', fontSize: 18, marginBottom: 35}}>Feelings hungry? Let's get snacking!</Text>
      <TouchableOpacity
        onPress={() => alert('Yummy food is on the way!')}
        style={styles.button}>
        <Text style={styles.buttonText}>Find your favorites!</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pandaLogo: {
    width: 305,
    height: 305,
    marginBottom: 10,
    borderRadius: 150,
  },
  button: {
    backgroundColor: '#87a7b3',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});


