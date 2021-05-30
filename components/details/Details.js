import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import  { ReactComponent as RedBlock } from './assets/red.svg'
import Svg, { Path } from "react-native-svg"
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

export default function Details({ navigation }) {
  return (
  
    <View style={styles.container}>
      <Text>New App, Who Dis?</Text>
      <StatusBar style="auto" />
      {/* <RedBlock /> */}
      {/* https://levelup.gitconnected.com/how-to-use-svgs-in-react-native-with-expo-ec34f085f5e0 */}
           <Svg
        // width={20}
        // height={20}
        viewBox="0 0 200 200"
      >
        <Path d="M63.1,-21.7C67.1,-8.3,45.4,12.1,21.7,29.2C-2,46.3,-27.8,60,-42.1,51.2C-56.4,42.4,-59.3,11.1,-50.4,-9.1C-41.5,-29.2,-20.7,-38.3,4.4,-39.7C29.6,-41.1,59.2,-35,63.1,-21.7Z" transform="translate(100 100)" fill="pink" />
      </Svg>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  // alignItems: 'center',
  // justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
