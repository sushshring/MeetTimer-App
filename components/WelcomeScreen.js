/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  DatePickerIOS, TimePickerAndroid, Button, View, StyleSheet, Platform, Modal,
  TouchableHighlight, Text,
} from 'react-native';
import SVGImage from 'react-native-svg-image';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#000',
    justifyContent: 'space-between',
  },
  title: {
    flex: 2,
  },
});

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
    this.setModalVisible = ({ visible }) => {
      this.setState({ modalVisible: visible });
    };

    this.startTimer = ({ date }) => {
      this.props.navigation.navigate('TimerScreen', { time: date.getTime() - new Date().getTime() });
    };


    this.setTimer = async () => {
      if (Platform.OS === 'ios') {
        this.setModalVisible(true);
      } else if (Platform.OS === 'android') {
        try {
          const { action, hour, minute } = await TimePickerAndroid.open({
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
        } catch ({ code, message }) {
          console.warn('Cannot open time picker', message);
        }
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SVGImage
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: '100%',
          }}
          source={{ uri: 'http://svgshare.com/i/411.svg' }}
        />
        <View style={styles.title} />
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Button
            title="Set Timer"
            onPress={this.setTimer}
            color="#00CEC5"
          />
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
            }}
          >
            <View style={{ marginTop: 22 }}>
              <View>
                <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                >
                  <Text>Close</Text>
                </TouchableHighlight>
                <DatePickerIOS mode="time" minuteInterval={1} onDateChange={this.startTimer} />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

