import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    createDrawerNavigator
  } from 'react-navigation';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

class Settings extends React.Component{
    static navigationOptions = {
        drawerLabel: "Settings"
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Settings</Text>
            </View>
        )
    }
}
export default Settings;