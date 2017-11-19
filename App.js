import React from 'react';
import {StackNavigator} from 'react-navigation';
import TimerScreen from "./components/TimerScreen";
//import SettingsScreen from "./components/SettingsScreen";
//import WelcomeScreen from "react-native/local-cli/templates/HelloNavigation/views/welcome/WelcomeScreen";


export default App = StackNavigator({
  //Welcome: { screen: WelcomeScreen },
  Home: { screen: TimerScreen },
  //Settings: { screen: SettingsScreen }
});
