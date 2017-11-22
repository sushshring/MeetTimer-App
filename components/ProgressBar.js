/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo';


export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ backgroundColor: '#00CDC5', flex: this.props.progress, height: 20 }} >
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.5)']} />
      </View>
    );
  }
}
