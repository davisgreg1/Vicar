import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class Settings extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <Ionicons name="chevron-thin-left" size={24} onPress={() => navigation.goBack(null)}/>
            ,
            title: "Settings",
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center'
            }
        }
    }
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{
                    color: "black"
                }}>Settings</Text>
            </View>
        );
    }
}
export default Settings;