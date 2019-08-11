import React, {Component} from 'react';
import { StyleSheet, Text, View , Image,TouchableOpacity, Alert  } from 'react-native';
import { DrawerActions } from 'react-navigation';

export default class NavigationDrawerStructure extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer=()=> {       
      //Props to open/close the drawer
    //this.props.navigationProps.toggleDrawer();
      this.props.navigationProps.dispatch(DrawerActions.toggleDrawer());      
    // this.props.navigation.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={()=>this.toggleDrawer()}>           
            <Image
              source={require('../assets/drawer.png')}
              style={{ width: 32, height: 30, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }