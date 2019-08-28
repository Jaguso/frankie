import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { requestLocationPermission } from '../helpers/locationPermission';
import BaseComponent from './BaseComponent';


class Geolocation extends BaseComponent {
  constructor() {
    super();
    this.state = {
      coords: {latitude: 0, longitude: 0}
    }
    this.findCoordinates = this.findCoordinates.bind(this)
  }

  static navigationOptions = {
    title: "Find your coords"
  }

  componentDidMount() {
    requestLocationPermission()
    console.warn('this is geolocation')
    // super.componentDidMount()
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Coordenadas: {this.state.coords.latitude}, {this.state.coords.longitude}</Text>
        <TouchableOpacity onPress={this.findCoordinates}>
          <Text>Find my coords</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Geolocation;