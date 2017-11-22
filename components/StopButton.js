/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Icon } from 'react-native-elements';


export default class StopButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Icon
        raised
        type="font-awesome"
        containerStyle={{ backgroundColor: '#FF1F58' }}
        name="stop"
        color="white"
        size={35}
        onPress={this.props.onPress}
      />
    );
  }
}
