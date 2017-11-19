import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export class Minus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }

  render() {
    return (
      <View>
        {
          this.state.visible ?
            (
              <Text style={{fontSize: this.props.size, color: '#feffff', marginTop: 40}}>-</Text>
            ): null
        }
      </View>
    )
  }
}