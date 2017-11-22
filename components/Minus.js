/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Text, View } from 'react-native';


export default class Minus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {
          this.props.visible ?
            (
              <Text style={{ fontSize: this.props.size, color: '#ff4366' }}>
                -
              </Text>
            ) : null
        }
      </View>
    );
  }
}
