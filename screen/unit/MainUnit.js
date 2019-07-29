import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationDrawerStructure from '../NavigationDrawerStructure'

export default class MainUnit extends Component {
  navigationOptions= ({ navigation }) => ({
    title: 'List Unit',
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
  //   title: 'List Unit',
  //   //Sets Header text of Status Bar
  //   headerStyle: {
  //     backgroundColor: '##ADD8E6',
  //     //Sets Header color
  //   },
  //   headerTintColor: '#ffffff',
  //   headerLeft: <NavigationDrawerStructure />,
  //   //Sets Header text color
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //     //Sets Header text style
  //   },
  // };
    render(){
      return (
          <View style={styles.container}>
              <Text>Unit</Text>
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
  