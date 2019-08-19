import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Something extends Component {
  static navigationOptions = {
    title: 'Something',
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Random Component</Text>
        <Button 
          title="Go to this component again"
          onPress={() => this.props.navigation.push('something')} 
        />
        <Button
          title="Go deep"
          onPress={() => this.props.navigation.navigate('deep', {
            price: 88,
            quantity: 9
          })}
        />
      </View>
    );
  }
}

export default Something;