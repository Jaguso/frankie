/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Geolocation from './src/components/Geolocation';
import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from './src/components/Home';
import Something from './src/components/Something';
import ColorBlue from './src/components/ColorBlue';
import ColorRed from './src/components/ColorRed';
import Deeper from './src/components/Deeper';


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

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: 'blue',
      
    }
  };

  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Button 
          title="Go to Something"
          onPress={() => this.props.navigation.navigate('something')} 
        /> 
        <Button
          title="Go to Coordinates"
          onPress={() => this.props.navigation.navigate('coordinates')}
        />
        <Button
          title="Color blue"
          onPress={() => this.props.navigation.navigate('blue')}
        />
        <Button
          title="Color red"
          onPress={() => this.props.navigation.navigate('red')}
        />

      </View>
      
    );
  }
}

// Syntax: route-name: component-name
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: App,
    },
    something: Something,
    coordinates: Geolocation,
    blue: ColorBlue,
    red: ColorRed,
    deep: Deeper
  },
  {
    initialRouteName: "Home"
  }
)

export default createAppContainer(AppNavigator);
