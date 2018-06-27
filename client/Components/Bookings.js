import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class Bookings extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <Ionicons name="chevron-thin-left" size={24} onPress={() => navigation.goBack(null)}/>
            ,
            title: "Bookings",
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center'
            }
        }
    }
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            phone: ""
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{
                    color: "white"
                }}>Book Valet Here</Text>
            </View>
        );
    }
}
export default Bookings;





















// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {
//     createDrawerNavigator
//   } from 'react-navigation';

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'yellow',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }
//   });

// class Bookings extends React.Component{
//     static navigationOptions = {
//         drawerLabel: "Bookings",

//     }
//     render(){
//         return(
//             <View style={styles.container}>
//                 <Text>Book Valet Here</Text>
//             </View>
//         )
//     }
// }
// export default Bookings;