import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Font} from "expo";


export default class Separator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false }
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        gotham: require('../assets/Gotham-Bold.ttf'),
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
              <Text
                style={{
                  fontSize: this.props.size,
                  color: '#feffff',
                  fontFamily: 'gotham',
                }}
              >:
              </Text>
            ) :
            (
              <Text style={{
                fontSize: this.props.size,
                color: '#feffff',
              }}
              >:
              </Text>
            )
        }
      </View>
    )
  }
}