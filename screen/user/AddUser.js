import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class AddUser extends Component {
  static navigationOptions = {
    title: 'Add new user',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#ADD8E6',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign:"center", 
        flex:1 
      //Sets Header text style
    },
    
  };
    render(){
      return (
          <View style={styles.container}>
              <Text>Add User</Text>
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
  });