/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Geolocation from './src/components/Geolocation';
import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from './src/components/Home';
import Something from './src/components/Something';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Geolocation />
      </View>
      
    );
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: App
  }
})

export default createAppContainer(AppNavigator);
