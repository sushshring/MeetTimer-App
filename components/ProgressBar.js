/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo';


export class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ratio: this.props.progress };
  }

  render() {
    return (
      <View style={{ backgroundColor: '#00CDC5', flex: this.state.ratio, height: 20 }} >
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.5)']} />
      </View>
    );
  }
}
