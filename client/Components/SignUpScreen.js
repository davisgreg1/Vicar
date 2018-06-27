import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class SignUpScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
        headerLeft: <Ionicons name="chevron-thin-left" size={24} onPress={() => navigation.goBack(null)}/>
        ,
        title: "Register",
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center'
        }
    }
}
  render() {
    return (
      <View style={styles.container}>
            <Text>SignUp Screen</Text>
            <Button title="Register" onPress={()=>alert("Completed Registration")}/>
      </View>
    );
  }
}
export default SignUpScreen;