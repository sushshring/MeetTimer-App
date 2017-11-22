/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Text, View } from 'react-native';
import { Font } from 'expo';


export default class Digit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        'barlow-semibold': require('../assets/Barlow-SemiBold.ttf'),
      });
    } catch (err) {
      console.error(err);
    }
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View>
        {
          this.state.fontLoaded ?
            (
              <Text style={{
                color: this.props.negative ? '#ff4366' : '#feffff',
                fontFamily: 'barlow-semibold',
                fontSize: 125,
                flex: 1,
                paddingLeft: this.props.paddingLeft ? this.props.paddingLeft : 0,
                paddingRight: this.props.paddingRight ? this.props.paddingRight : 0,
              }}
              >{this.props.value}
              </Text>
            ) : (
              <Text style={{
                color: this.props.negative ? '#ff4366' : '#feffff',
                fontSize: 125,
                flex: 1,
                paddingLeft: this.props.paddingLeft ? this.props.paddingLeft : 0,
                paddingRight: this.props.paddingRight ? this.props.paddingRight : 0,
              }}
              >{this.props.value ? this.props.value : 0}
              </Text>
            )
        }
      </View>
    );
  }
}
