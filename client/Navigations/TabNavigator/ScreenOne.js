import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class ScreenOne extends React.Component {

  render() {
    return (
      <View style={styles.container}>
            <Button title="Logout" onPress={()=>this.props.screenProps.navigation.navigate('WelcomeScreen')} />
      </View>
    );
  }
}
export default ScreenOne;