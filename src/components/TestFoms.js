import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import tcomb from 'tcomb-form-native';

const Form = tcomb.form.Form;

var Person = tcomb.struct({
  name: tcomb.String,
  lastname: tcomb.maybe(tcomb.String),
  age: tcomb.Number
});

class TestForms extends Component {

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Test form</Text>
        <Form
          ref="form"
          type={Person}
        />
      </View>
    );
  }
}

export default TestForms;