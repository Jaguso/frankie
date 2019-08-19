import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ColorBlue extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}>This is Color Blue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  font: {
    fontSize: 35,
    color: 'white'
  }
});

export default ColorBlue;