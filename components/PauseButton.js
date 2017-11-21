/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Icon } from 'react-native-elements';


export class PauseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paused: true };
  }

  render() {
    return (
      <Icon
        raised
        containerStyle={{ backgroundColor: '#00BAAF' }}
        name={this.state.paused ? 'play' : 'pause'}
        color="white"
        size={35}
        type="font-awesome"
        onPress={() => {
          if (this.state.paused) {
            this.props.onResume();
          } else {
            this.props.onPause();
          }
          this.setState({ paused: !this.state.paused });
        }}
      />
    );
  }
}

{ /* <View style={{ borderRadius: 500, backgroundColor: '#00BAAF'}}> */
}
{ /* <Button title={"||"} color={'#fff'}> */
}

{ /* </Button> */
}
{ /* </View> */
}
