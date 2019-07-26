import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class MainUnit extends Component {
   static navigationOptions = {
    title: 'List Unit',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '##ADD8E6',
      //Sets Header color
    },
    headerTintColor: '#ffffff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };
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
  