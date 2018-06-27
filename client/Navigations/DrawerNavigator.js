import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';
import HomeScreen from '../Components/HomeScreen';
import HomeScreenTabNavigator from './HomeScreenTabNavigator';
import AccountScreen from '../Components/AccountScreen';
import Rewards from '../Components/Rewards'; 
import Bookings from '../Components/Bookings'; 
import Help from '../Components/Help'; 
import Settings from '../Components/Settings';
import More from '../Components/More';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const innerStackNavigator = new createStackNavigator({
  TabNavigator: {
    screen: HomeScreenTabNavigator
  }
}, 
// {
//   navigatorStyle: {
//     disabledBackGesture: true,
//   }
// }
)
const accountStackNavigator = new createStackNavigator({
  TabNavigator2: {
    screen: AccountScreen
  }
}, 
// {
//   navigatorStyle: {
//     disabledBackGesture: true,
//   }
// }
)

const AppDrawerNavigator = new createDrawerNavigator({
  Account: {
    screen: accountStackNavigator
  },
  Bookings: {
    screen: Bookings
  },
  RedeemRewards: {
    screen: Rewards
  },
  Help: {
    screen: Help
  },
  Settings: {
    screen: Settings
  },
  More: {
    screen: More
  }
})

export default AppDrawerNavigator;