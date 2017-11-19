import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export class StopButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#FF1F58',
          alignItems: 'center',
          justifyContent: 'center',
          width: 75,
          height: 75,
          backgroundColor: '#FF1F58',
          borderRadius: 100,
        }}
        onPress={this.props.onPress}
      >
      </TouchableOpacity>
    )
  }
}