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


const accountStackNavigator = new createStackNavigator({
  AccountStackNav: {
    screen: AccountScreen
  },
});
const bookingsStackNavigator = new createStackNavigator({
   BookingsStackNav: {
    screen: Bookings
  },
})
const rewardsStackNavigator = new createStackNavigator({
   RewardsStackNav: {
    screen: Rewards,
  },
})
const helpStackNavigator = new createStackNavigator({
   HelpStackNav: {
    screen: Help
  },
})
const settingsStackNavigator = new createStackNavigator({
   SettingsStackNav: {
    screen: Settings
  },
})
const moreStackNavigator = new createStackNavigator({
   MoreStackNav: {
    screen: More
  },
})

const AppDrawerNavigator = new createDrawerNavigator({
  Account: {
    screen: accountStackNavigator
  },
  Bookings: {
    screen: bookingsStackNavigator
  },
  Rewards: {
    screen: rewardsStackNavigator
  },
  Help: {
    screen: helpStackNavigator
  },
  Settings: {
    screen: settingsStackNavigator
  },
  More: {
    screen: moreStackNavigator
  }
})

export default AppDrawerNavigator;