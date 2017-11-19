import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Font} from "expo";


export class Digit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentValue: 0, color: '#feffff', fontLoaded: false};

    this.updateNumber = function (newNum) {
      this.state = newNum;
    }
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        'roboto-slab': require('../assets/RobotoSlab-Bold.ttf')
      });
    } catch(err) {
      console.error(err);
    }
    this.setState({fontLoaded: true});
  }

  render() {
    return (
      <View>
        {
          this.state.fontLoaded ?
            (
              <Text style={{
                color: this.state.color,
                fontFamily: 'roboto-slab',
                fontSize: 125,
                flex: 1,
                fontWeight: '200',
                paddingLeft: this.props.paddingLeft,
                paddingRight: this.props.paddingRight
              }}>{this.state.currentValue}</Text>
            ) : (
              <Text style={{
                color: this.state.color,
                fontSize: 125,
                flex: 1,
                fontWeight: '200',
                paddingLeft: this.props.paddingLeft,
                paddingRight: this.props.paddingRight
              }}>{this.state.currentValue}</Text>
            )
        }
      </View>
    )
  }
}