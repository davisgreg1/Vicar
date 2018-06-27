import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenOne from './TabNavigator/ScreenOne';
import ScreenTwo from './TabNavigator/ScreenTwo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class AppTabNavigator extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {headerLeft: (
                <View style={{
                    padding: 10
                }}>
                    <Ionicons name="md-menu" size={24} onPress={() => navigation.openDrawer()}/>
                </View>
            )}
    }

    render() {
        return (<HomeScreenTabNavigator screenProps={{navigation: this.props.navigation}}/>)
    }
}
const HomeScreenTabNavigator = new createBottomTabNavigator({
    ScreenOne: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (< Ionicons name = "md-compass" size = {
                24
            } />)
        }
    },
    ScreenTwo: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (< Ionicons name = "md-compass" size = {
                24
            } />)
        }
    }

})
export default AppTabNavigator;