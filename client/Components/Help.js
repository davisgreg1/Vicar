// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {
//     createDrawerNavigator
//   } from 'react-navigation';

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'pink',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }
//   });

// class Help extends React.Component{
//     static navigationOptions = {
//         drawerLabel: "Help"
//     }

//     render(){
//         return(
//             <View style={styles.container}>
//                 <Text>Get Help Here</Text>
//             </View>
//         )
//     }
// }
// export default Help;

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class Help extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <Ionicons name="chevron-thin-left" size={24} onPress={() => navigation.goBack(null)}/>
            ,
            title: "Help",
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
                }}>Help</Text>
            </View>
        );
    }
}
export default Help;