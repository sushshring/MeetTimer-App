import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export class PauseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#00BAAF',
          alignItems: 'center',
          justifyContent: 'center',
          width: 75,
          height: 75,
          backgroundColor: '#00BAAF',
          borderRadius: 100,
          marginBottom: 10,
        }}
        onPress={this.props.onPress}
      >
      </TouchableOpacity>
    )
  }
}

{/*<View style={{ borderRadius: 500, backgroundColor: '#00BAAF'}}>*/
}
{/*<Button title={"||"} color={'#fff'}>*/
}

{/*</Button>*/
}
{/*</View>*/
}