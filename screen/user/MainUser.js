import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Home extends Component {
   static navigationOptions = {
    title: 'List User',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#98e2fa',
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
              <Text>User</Text>
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
  