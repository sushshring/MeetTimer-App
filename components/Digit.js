/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Text, View } from 'react-native';
import { Font } from 'expo';


export class Digit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentValue: this.props.value ? this.props.value : 0, color: '#feffff', fontLoaded: false };

    this.updateNumber = function (newNum) {
      this.state = newNum;
    };
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
                color: this.state.color,
                fontFamily: 'barlow-semibold',
                fontSize: 125,
                flex: 1,
                paddingLeft: this.props.paddingLeft ? this.props.paddingLeft : 0,
                paddingRight: this.props.paddingRight ? this.props.paddingRight : 0,
              }}
              >{this.state.currentValue}
              </Text>
            ) : (
              <Text style={{
                color: this.state.color,
                fontSize: 125,
                flex: 1,
                paddingLeft: this.props.paddingLeft ? this.props.paddingLeft : 0,
                paddingRight: this.props.paddingRight ? this.props.paddingRight : 0,
              }}
              >{this.state.currentValue}
              </Text>
            )
        }
      </View>
    );
  }
}
