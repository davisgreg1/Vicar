import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  createStackNavigator
} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import DrawerNavigator from './screens/DrawerNavigator';

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