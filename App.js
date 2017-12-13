import React from 'react';
import { StackNavigator } from 'react-navigation';
import TimerScreen from './components/TimerScreen';
import WelcomeScreen from './components/WelcomeScreen';


export default App = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerTitle: 'ConferenceTime',
    },
  },
  Timer: { screen: TimerScreen, navigationOptions: {
    time: 5
  } },
  // Settings: { screen: SettingsScreen }
});
