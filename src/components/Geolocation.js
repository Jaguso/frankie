import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Geolocation extends Component {
  constructor() {
    super();
    this.state = {
      coords: {latitude: 0, longitude: 0}
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({coords: position.coords})
      },
      (error)  => {
        console.warn(JSON.stringify(error))
      }
    )
  }


  render() {
    return (
      <View>
        <Text>Coordenadas: {this.state.coords.latitude}, {this.state.coords.longitude}</Text>
        
      </View>
    );
  }
}

export default Geolocation;