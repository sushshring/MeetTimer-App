/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Font } from 'expo';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import {View} from "react-native";


export default class PauseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paused: true, fontLoaded: false };
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
          containerStyle={{ backgroundColor: '#00BAAF' }}
          name={this.state.paused ? 'play' : 'pause'}
          color="white"
          size={35}
          onPress={() => {
            if (this.state.paused) {
              this.props.onResume();
            } else {
              this.props.onPause();
            }
            this.setState({ paused: !this.state.paused });
          }}
        /> : <View />
    );
  }
}

PauseButton.propTypes = {
  onResume: PropTypes.func,
  onPause: PropTypes.func,
};

PauseButton.defaultProps = {
  onResume: () => {},
  onPause: () => {},
};
