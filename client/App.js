import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  createStackNavigator
} from 'react-navigation';
import WelcomeScreen from './Components/WelcomeScreen';
import LoginScreen from './Components/LoginScreen';
import SignUpScreen from './Components/SignUpScreen';
import DrawerNavigator from './Navigations/DrawerNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class App extends React.Component {
  render() {
    return ( <
      AppStackNavigator / >
    );
  }
}
const AppStackNavigator = new createStackNavigator({
    WelcomeScreen: {
      screen: WelcomeScreen
    },
    LoginScreen: {
      screen: LoginScreen
    },
    SignUpScreen: {
      screen: SignUpScreen
    },
    DrawerNavigator: {
      screen: DrawerNavigator,
      navigationOptions: {
        header: null,
      }
    },
  },
)