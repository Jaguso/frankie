import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Deeper extends Component {
  render() {
    const price = this.props.navigation.getParam('price', 'default price')
    const quantity = this.props.navigation.getParam('quantity', 0)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>This is a deeper component</Text>
        <Button 
          title="Go home"
          onPress={() => this.props.navigation.navigate('Home')} 
          // another option is 
        //   onPress={() => this.props.navigation.popToTop()}
        />
        <View>
          <Text>Price is {price}</Text>
          <Text>How many: {quantity}</Text>
        </View>
      </View>
    );
  }
}

export default Deeper;