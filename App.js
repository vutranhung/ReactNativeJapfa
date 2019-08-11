import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator, createDrawerNavigator } from 'react-navigation';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import  Home from './screen/Home'
import  MainUser from './screen/user/MainUser'
import AddEditUnit from './screen/unit/AddEditUnit'
import AddEditUser from './screen/user/AddEditUser'
import AddUser from './screen/user/AddUser'
import EditUser from './screen/user/EditUser'
import AddUnit from './screen/unit/AddUnit'
import EditUnit from './screen/unit/EditUnit'
import MainUnit from './screen/unit/MainUnit'
import Setting from './screen/setting/MainSetting'

import  NavigationDrawerStructure from './screen/NavigationDrawerStructure'
import DrawerHead from './screen/DrawerHead'

import { Icon } from 'react-native-elements'

export   function App() {
  return (
    <View style={styles.container}>
               
    </View>
  );
}



let getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = SimpleLineIcons;
  let iconName;
  if (routeName === 'home') {
    iconName = `home`;
    // We want to add badges to home tab icon
    //IconComponent = HomeIconWithBadge;
  } else if (routeName === 'setting') {
    iconName = `settings`;
  }
  else if(routeName==='user'){
    iconName = `user`;
  }else{
    //unit
    iconName = `organization`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

// const userStack = createStackNavigator({
//   mainUser:{screen:MainUser,
//     navigationOptions: ({ navigation }) => ({
//       title: 'List user',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#ADD8E6',
//       },
//       headerTintColor: '#fff',
//     }),
//   } ,
//   //addEditUser:{screen:AddEditUser}
 
// });

const unitStack = createStackNavigator({
  mainUnit: {screen:MainUnit,
    navigationOptions: ({ navigation }) => ({
      title: 'List unit',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#fff',
    }),
  
  }, 
  addEditUnit:{screen:AddEditUnit} 
  
});


const homeStack=createStackNavigator({
  home: {
    screen: Home,

    // navigationOptions: ({ navigation }) => ({
    //   title: 'Home',
    //   headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    //   headerStyle: {
    //     backgroundColor: '#ADD8E6',
    //   },
    //   headerTintColor: '#fff',
    // }),

  },
    
},

);

const TabNavigator = createBottomTabNavigator({
    home:  homeStack,    
   // user:userStack,   
    user:MainUser,
     unit:unitStack,    
    //unit:MainUnit,
       
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused,horizontal, tintColor }) =>
    getTabBarIcon(navigation, focused, tintColor)

  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}

);

const TabHome=createAppContainer(TabNavigator)

const DrawerNatigator=createDrawerNavigator({
  tabHome:{
    screen: TabHome,
       navigationOptions: {
       drawerLabel: 'Home',
       drawerIcon: ({ tintColor }) => <Icon name="home" color={tintColor} size={20} />
    },

  },

  setting:{
    screen: Setting,
       navigationOptions: {
       drawerLabel: 'Setting',
       drawerIcon: () => <Icon name="settings" color='#00aced' size={20} />
    },

  }

} ,
{
   contentComponent: DrawerHead,
    hideStatusBar: true,
    drawerBackgroundColor: '#5295ae',
    overlayColor: '#374671',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#374671',
    },
}
)
 
const DrawerApp=createAppContainer(DrawerNatigator)

export default DrawerApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
