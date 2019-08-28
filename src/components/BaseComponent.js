import React, { Component } from 'react';

class BaseComponent extends Component {
  componentDidMount() {
    console.warn('this base')
  }
}

export default BaseComponent;