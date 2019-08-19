import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Deeper extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>This is a deeper component</Text>
        <Button 
          title="Go home"
        //   onPress={() => this.props.navigation.navigate('Home')} 
          // another option is 
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

export default Deeper;