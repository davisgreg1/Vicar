import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class LoginScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
        headerLeft: <Ionicons name="chevron-thin-left" size={24} onPress={() => navigation.goBack(null)}/>
        ,
        title: "Login",
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center'
        }
    }
}
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: ""
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Render Username/Password fields here</Text>
        <TextInput
          name="username"
          defaultValue={this.state.username}
          style={{
          height: 40,
          width: "50%",
          fontSize:24
        }}
          placeholder="Username"
          onChangeText={this.handleInputChange}/>
        <TextInput
          name="password"
          defaultValue={this.state.password}
          style={{
          height: 40,
          width: "50%",
          fontSize:24
        }}
        secureTextEntry = {true}
          placeholder="Password"
          onChangeText={this.handleInputChange}/>
        <Button
          title="Complete Login"
          onPress={() => this.props.navigation.navigate('Account')}/>
      </View>
    );
  }
}
export default LoginScreen;