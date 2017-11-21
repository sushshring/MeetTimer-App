import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export class Minus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: this.props.visible};
  }

  render() {
    return (
      <View>
        {
          this.props.visible ?
            (
              <Text style={{fontSize: this.props.size, color: '#feffff', marginTop: 40}}>-</Text>
            ): null
        }
      </View>
    )
  }
}