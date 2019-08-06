import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { requestLocationPermission } from '../helpers/locationPermission';


class Geolocation extends Component {
  constructor() {
    super();
    this.state = {
      coords: {latitude: 0, longitude: 0}
    }
    this.findCoordinates = this.findCoordinates.bind(this)
  }

  async componentDidMount() {
    await requestLocationPermission()
  }

  findCoordinates() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({coords: position.coords})
      },
      (error)  => {
        console.warn(JSON.stringify(error))
      },
      { enableHighAccuracy: false }
    )
  }


  render() {
    return (
      <View>
        <Text>Coordenadas: {this.state.coords.latitude}, {this.state.coords.longitude}</Text>
        <TouchableOpacity onPress={this.findCoordinates}>
          <Text>Find my coords</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Geolocation;