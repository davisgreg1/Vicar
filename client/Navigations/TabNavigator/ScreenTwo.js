import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class ScreenTwo extends React.Component {

  render() {
    return (
      <View style={styles.container}>
            <Text>ScreenTwo</Text>
      </View>
    );
  }
}
export default ScreenTwo;