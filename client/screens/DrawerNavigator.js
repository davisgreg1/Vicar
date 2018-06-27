import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import HomeScreenTabNavigator from './HomeScreenTabNavigator';
import AccountScreen from '../Components/AccountScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const innerStackNavigator = new createStackNavigator ({
    TabNavigator:{screen: HomeScreenTabNavigator}
})
const accountStackNavigator = new createStackNavigator ({
    TabNavigator:{screen: AccountScreen}
})

const AppDrawerNavigator = new createDrawerNavigator ({
    Account:{screen: accountStackNavigator},
    Bookings:{screen: innerStackNavigator},
    Rewards:{screen: innerStackNavigator},
    RedeemRewards:{screen: innerStackNavigator},
    Help:{screen: innerStackNavigator},
    Settings:{screen: innerStackNavigator},
    More:{screen: innerStackNavigator}
})

export default AppDrawerNavigator;