import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    createDrawerNavigator
  } from 'react-navigation';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

class Rewards extends React.Component{
    static navigationOptions = {
        drawerLabel: "Redeem Rewards"
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Redeem Rewards Here</Text>
            </View>
        )
    }
}
export default Rewards;