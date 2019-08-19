import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Something extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Random Component</Text>
        <Button 
          title="Go to this component again"
          onPress={() => this.props.navigation.push('something')} 
        />
      </View>
    );
  }
}

export default Something;