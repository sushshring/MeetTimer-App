/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  TimePickerAndroid, View, StyleSheet, Platform, Modal,
  Text, TouchableHighlight,
} from 'react-native';
import SVGImage from 'react-native-svg-image';
import TimePicker from 'react-native-simple-time-picker';
import {ScreenOrientation} from "expo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#000',
    justifyContent: 'space-between',
  },
  title: {
    flex: 3,
  },
});

export default class WelcomeScreen extends React.Component {

  static navigationOptions = {
    title: 'ConferenceTime',
  };

  componentDidMount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
  }

  constructor() {
    super();
    this.state = {modalVisible: false, selectedHours: 0, selectedMinutes: 0};
    this.setModalVisible = this.setModalVisible.bind(this);
    this.startTimer = this.startTimer.bind(this);


    this.setTimer = async () => {
      if (Platform.OS === 'ios') {
        this.setModalVisible(true);
      } else if (Platform.OS === 'android') {
        try {
          const {action, hour, minute} = await TimePickerAndroid.open({
            hour: 0,
            minute: 0,
            is24Hour: false, // Will display '2 PM'
          });
          if (action !== TimePickerAndroid.dismissedAction) {
            // Selected hour (0-23), minute (0-59)
            const date = new Date();
            date.setTime(date.getTime() + (hour * 60 * 60 * 1000 + minute * 60 * 1000));
            this.startTimer(date);
          }
        } catch ({code, message}) {
          console.warn('Cannot open time picker', message);
        }
      }
    };
  }

  setModalVisible(visible) {
    console.log('Modal setting');
    this.setState(previousState => ({modalVisible: visible}));
  }

  startTimer() {
    this.props.navigation.navigate('Timer', {time: (this.state.selectedHours * 60 * 60) + (this.state.selectedMinutes * 60)});
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: '100%',
          }}>
          <SVGImage
            style={{
              flex: 1,
            }}
            source={{uri: 'http://svgshare.com/i/411.svg'}}
          />
        </View>
        <View style={styles.title}/>
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <TouchableHighlight
            style={{
              alignSelf: 'center',
              backgroundColor: '#00CEC5',
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 10,
              paddingBottom: 10
            }}
            onPress={this.setTimer}
            color="#fff"
          >
            <Text style={{color: '#fff', fontSize: 20}}>Set Timer</Text>
          </TouchableHighlight>
          <Modal
            style={{flexDirection: "column"}}
            animationType="slide"
            onDismiss={() => {
              console.log('Close clicked');
              this.setModalVisible(false);
            }}
            visible={this.state.modalVisible}
          >
            <View style={{marginTop: 50, marginBottom: 25, flexDirection: 'column'}}>

              <TimePicker
                style={{flex: 5, marginTop: 25}}
                selectedHours={0}
                selectedMinutes={0}
                hoursUnit=" Hours"
                minutesUnit=" Minutes"
                onChange={
                  (hours, minutes) => {
                    this.setState({selectedHours: hours, selectedMinutes: minutes});
                  }}
              />
              <View style={{flex: 1, flexDirection: 'column'}}>
                <TouchableHighlight
                  style={{marginLeft: 10, flex: 1, alignSelf: 'flex-start'}}
                  onPress={() => {
                    this.setModalVisible(false);
                  }}
                >
                  <Text>Close</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{marginRight: 10, flex: 1, alignSelf: 'flex-end'}}
                  onPress={() => {
                    console.log('Confirmz clicked');
                    this.setModalVisible(false);
                    console.log(this.state.modalVisible);
                    this.startTimer();
                  }}
                >
                  <Text>Confirm</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    )
      ;
  }
}


