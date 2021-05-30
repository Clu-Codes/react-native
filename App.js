import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RedBlock from './assets/red.svg'

export default function App() {
  return (
  
    <View style={styles.container}>
      <Text>New App, Who Dis?</Text>
      <StatusBar style="auto" />
      {/* <RedBlock width={48} height={48} fill="#000" /> // no worky...yet */}
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
});
