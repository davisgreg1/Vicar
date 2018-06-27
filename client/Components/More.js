import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fuchsia',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class More extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <Ionicons name="chevron-thin-left" size={24} onPress={() => navigation.goBack(null)}/>
            ,
            title: "More",
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
                    color: "white"
                }}>More</Text>
            </View>
        );
    }
}
export default More;