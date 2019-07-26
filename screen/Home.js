import React, {Component} from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';


export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#ADD8E6',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };
 
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
    backgroundColor: '#fff',
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
