import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList, Alert, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator, createDrawerNavigator } from 'react-navigation';

import  storeRedux from '../../StoreRedux'
import {connect, Provider} from 'react-redux'
import {ListUserConnected} from './ListUser'
import {AddEditUserConnected} from './AddEditUser'
import  NavigationDrawerStructure from '../../screen/NavigationDrawerStructure'


 const MyStack=createStackNavigator({

   mainUser:{screen:ListUserConnected,
    // navigationOptions: ({ navigation }) => ({
    //   title: 'List user',
    //   headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    //   headerStyle: {
    //     backgroundColor: '#ADD8E6',
    //   },
    //   headerTintColor: '#fff',
    // }),
  } ,
  addEditUser:{screen:AddEditUserConnected}

    // listUser:ListUserConnected,
    // addEditUser:AddEditUserConnected
})

const UserStack=createAppContainer(MyStack)

export default class MainUser extends Component {
  
    render(){
      return(
        <Provider store={storeRedux}>
         <UserStack/> 
        </Provider>
      )
    }

  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
   

  });
  