import React, {Component} from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import NavigationDrawerStructure from './NavigationDrawerStructure'


export default class Home extends Component {

  static navigationOptions= ({ navigation }) => ({
    title: 'Home',
    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    headerStyle: {
      backgroundColor: '#ADD8E6',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
          fontWeight: 'bold',
           //Sets Header text style
       },
  })

//  static navigationOptions = {
//     title: 'Home',
//     //Sets Header text of Status Bar
//     headerStyle: {
//       backgroundColor: '#ADD8E6',
//       //Sets Header color
//     },
//     headerTintColor: '#fff',
//     //Sets Header text color
//     headerTitleStyle: {
//       fontWeight: 'bold',
//       textAlign:"center", 
//         flex:1 
//       //Sets Header text style
//     },
    
//   };
 




  render(){
    return (
        <View style={styles.container}>
            <Text style={styles.styleText}>REACT NATIVE</Text>
            <Image source={require('../assets/logo.png')} style={styles.styleImage}  />
        </View>
      );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#374671',
    alignItems: 'center',
    justifyContent: 'center',
  },
 styleText:{
   color:'#008080',
   fontSize: 42,
   fontWeight:'bold'

 },

 styleImage:{
   width:300,
   height:300
 }

});
