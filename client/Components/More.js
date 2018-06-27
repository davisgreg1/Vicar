import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    createDrawerNavigator
  } from 'react-navigation';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'fuchsia',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

class More extends React.Component{
    static navigationOptions = {
        drawerLabel: "More"
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Text>Find Out More Here</Text>
            </View>
        )
    }
}
export default More;