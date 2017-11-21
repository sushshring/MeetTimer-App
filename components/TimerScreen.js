/* eslint-disable react/jsx-filename-extension,react/prop-types */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Font } from 'expo';
const Timer = require('clockmaker').Timer;
import { Digit } from './Digit';
import { Separator } from './Separator';
import { Minus } from './Minus';
import { StopButton } from './StopButton';
import { ProgressBar } from './ProgressBar';
import { PauseButton } from './PauseButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#000',
    justifyContent: 'space-between',
    padding: 10,
  },
  digit: {
    aspectRatio: 5,
  },
  timeremaining: {
    flex: 1,
    color: '#1F9AAB',
    paddingTop: 30,
    fontSize: 40,
    marginLeft: 50,
    fontFamily: 'open-sans',
  },
  timeremainingnf: {
    color: '#1F9AAB',
    fontSize: 50,
    marginTop: 50,
    marginLeft: 50,
  },
  digits: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  control: {
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default class TimerScreen extends React.Component {
  static navigationOptions = (({navigation}) => ({
   headerTitle: 'Timer'
}));
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      paused: true,
      remsecs: 7000,
    };
    this.onPause = () => {
      this.setState({ paused: true });
      console.log('paused');
      console.log(`Paused state: ${this.state.paused}`);
      this.timer.stop();
    };
    this.onStop = () => {
      console.log('stopped');
      this.timer.stop();
    };

    this.onPlay = () => {
      console.log('Played');
      this.setState({ paused: false });
      console.log(`Paused state: ${this.state.paused}`);
      this.timer.start();
    };

    this.timer = Timer((timer) => {
      this.setState(previousState => ({ remsecs: previousState.remsecs - 1 }));
      console.log(this.state.remsecs);
    }, 1000, {
      repeat: true,
    });

    this.getNumDigits = () => {
      const remsecs = Math.abs(this.state.remsecs);
      if (remsecs < 6000) {
        return 4;
      } else if (remsecs < 38400) {
        return 5;
      }
      throw new RangeError('Illegal time configured');
    };

    this.getDigits = () => {
      let format = new Array(this.getNumDigits() + 1).join('0');
      format = format.replace(/\B(?=(\d{2})+(?!\d))/g, ':');
      return Array.prototype.map.call(format, (char, index, array) => {
        if (char === '0') {
          const rem = this.state.remsecs;
          let val = 0;
          if (array.length > 5) {
            const hours = Math.floor(rem / 3600);
            const minutes = Math.floor(rem / 60);
            const secs = rem - (minutes * 60);
            switch (index) {
              case 0:
                val = hours;
                break;
              case 2:
                val = Math.floor((minutes % 60) / 10);
                break;
              case 3:
                val = minutes % 10;
                break;
              case 5:
                val = Math.floor(secs / 10);
                break;
              case 6:
                val = secs % 10;
                break;
              default:
                console.error('Something weird happen');
                console.log(char, index, array);
                break;
            }
          } else {
            const minutes = Math.floor(rem / 60);
            const secs = rem - (minutes * 60);
            switch (index) {
              case 0:
                val = minutes % 10;
                break;
              case 1:
                val = Math.floor(minutes / 10);
                break;
              case 3:
                val = secs % 10;
                break;
              case 4:
                val = Math.floor(secs / 10);
                break;
              default:
                console.error('Something weird happen');
                console.log(char, index, array);
                break;
            }
          }
          return (
            <Digit
              value={val}
              style={styles.digit}
              paddingLeft={20}
              paddingRight={20}
              key={index}
            />
          );
        }
        if (char === ':') {
          return (
            <Separator size={50} key={index} />
          );
        }
        return null;
      });
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('../assets/OpenSans-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const digits = this.getDigits();
    console.log(digits);
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          {
            this.state.fontLoaded ?
              (
                <Text style={styles.timeremaining}>time remaining</Text>
              ) : (
                <Text style={styles.timeremainingnf}>time remaining</Text>
              )
          }
        </View>
        <View style={styles.digits}>
          <Minus visible={this.state.remsecs < 0} />
          {
            digits
          }
          <View style={styles.control}>
            <PauseButton onPause={this.onPause} onResume={this.onPlay} />
            <StopButton onPress={this.onStop} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <ProgressBar
            progress={this.state.remsecs / this.props.initsecs}
          />
        </View>
      </View>
    );
  }
}

