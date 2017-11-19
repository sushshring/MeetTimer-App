import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {Digit} from "./Digit";
import {Separator} from "./Separator";
import {Minus} from "./Minus";
import {Font} from 'expo';
import {PauseButton} from "./PauseButton";
import {StopButton} from "./StopButton";
import {ProgressBar} from "./ProgressBar";

export default class TimerScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: `Timer`,
  });

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('../assets/OpenSans-Regular.ttf'),
      'roboto-slab': require('../assets/RobotoSlab-Bold.ttf')
    });
    this.setState({fontLoaded: true});
  }

  constructor() {
    super();
    this.state = {endTime: new Date().getTime(), fontLoaded: false, paused: true, stopped: false};
    this.onPause = () => {
      this.setState({paused: true});
      console.log("paused");
    };
    this.onStop = () => {
      this.setState({stopped: true, endTime: new Date().getTime()});
      console.log("stopped");
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
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
          <Minus/>
          <Digit style={styles.digit} paddingLeft={50} paddingRight={20}/>
          <Digit style={styles.digit} paddingLeft={20} paddingRight={20}/>
          <Separator size={50}/>
          <Digit style={styles.digit} paddingLeft={20} paddingRight={20}/>
          <Digit style={styles.digit} paddingLeft={20} paddingRight={50}/>
          <View style={styles.control}>
            <PauseButton onPress={this.onPause}/>
            <StopButton onPress={this.onStop}/>
          </View>
        </View>
        <View style={{flex: 1}}>
          {/*<ProgressBar progress={(this.state.endTime-new Date().getTime())/(this.state.endTime-this.state.startTime)} />*/}
        </View>
      </View>
    );
  }

}

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
    fontFamily: 'open-sans'
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
    alignItems: 'center'
  }
});