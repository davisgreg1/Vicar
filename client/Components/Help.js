import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    createDrawerNavigator
  } from 'react-navigation';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

class Help extends React.Component{
    static navigationOptions = {
        drawerLabel: "Help"
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Text>Get Help Here</Text>
            </View>
        )
    }
}
export default Help;