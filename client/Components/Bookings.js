import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    createDrawerNavigator
  } from 'react-navigation';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

class Bookings extends React.Component{
    static navigationOptions = {
        drawerLabel: "Bookings"
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Book Valet Here</Text>
            </View>
        )
    }
}
export default Bookings;