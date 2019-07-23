import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer,createStackNavigator } from 'react-navigation';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
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
            <Text>Home</Text>
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
