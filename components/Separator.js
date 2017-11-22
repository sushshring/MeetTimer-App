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
        'roboto-slab': require('../assets/RobotoSlab-Bold.ttf'),
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
                  marginBottom: 20,
                  fontFamily: 'roboto-slab',
                }}
              >:
              </Text>
            ) :
            (
              <Text style={{
                fontSize: this.props.size,
                marginBottom: 20,
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