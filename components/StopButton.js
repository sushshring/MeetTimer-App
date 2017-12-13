/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Font } from 'expo';
import { View } from 'react-native';


export default class StopButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: require('../assets/fontawesome-webfont.ttf'),
    });
    this.setState({ fontLoaded: true });
  }


  render() {
    return (
      this.state.fontLoaded ?
        <Icon
          raised
          type="font-awesome"
          containerStyle={{ backgroundColor: '#FF1F58' }}
          name="stop"
          color="white"
          size={35}
          onPress={this.props.onPress}
        /> : <View />
    );
  }
}

StopButton.propTypes = {
  onPress: PropTypes.func,
};

StopButton.defaultProps = {
  onPress: () => {},
};

