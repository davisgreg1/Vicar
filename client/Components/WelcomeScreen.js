import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class WelcomeScreen extends React.Component {

    static navigationOptions = {
        header: null
    }
  render() {
    return (
      <View style={styles.container}>
            <Button title="Log In" onPress={()=>this.props.navigation.navigate('LoginScreen')}/>
            <Button title="Sign Up" onPress={()=>this.props.navigation.navigate('SignUpScreen')}/>
      </View>
    );
  }
}
export default WelcomeScreen;