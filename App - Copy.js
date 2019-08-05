import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator, createDrawerNavigator } from 'react-navigation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import  Home from './screen/Home'
import  MainUser from './screen/user/MainUser'
import AddUser from './screen/user/AddUser'
import EditUser from './screen/user/EditUser'
import AddUnit from './screen/unit/AddUnit'
import EditUnit from './screen/unit/EditUnit'
import  MainUnit from './screen/unit/MainUnit'
import Setting from './screen/setting/MainSetting'
import  NavigationDrawerStructure from './screen/NavigationDrawerStructure'

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

const userStack = createStackNavigator({
  mainUser:{screen:MainUser,
    navigationOptions: ({ navigation }) => ({
      title: 'List user',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#fff',
    }),
  } ,
  addUser: {screen: AddUser},
  editUser: {screen: EditUser},
});

const unitStack = createStackNavigator({
  mainUnit: {screen:MainUnit},  
  addUnit: {screen:AddUnit},
  editUnit: {screen:EditUnit},
});

const homeStack=createStackNavigator({
  // home:  {screen: Home,
  //   navigationOptions= ({ navigation }) => ({
  //     title: 'Home',
  //     headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
  //     headerStyle: {
  //       backgroundColor: '#ADD8E6',
  //     },
  //     headerTintColor: '#fff',
  //     headerTitleStyle: {
  //           fontWeight: 'bold',
  //            //Sets Header text style
  //        },
  //   })
  // },

  home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#fff',
    }),
  },
    
},

);

const settingStrack=createStackNavigator({
  setting: {screen: Setting},
});


const TabNavigator = createBottomTabNavigator({

    home:  homeStack,    
    user:userStack,
    unit:unitStack,
    setting: settingStrack,
    // home:TabHome,
    // user:TabUser,
    // unit:TabUnit,
    // setting:TabSetting
    
    
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

const TabHome = createBottomTabNavigator({
  home: homeStack
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

)

const TabUser = createBottomTabNavigator({
  home: userStack
}
,
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
)

const TabUnit = createBottomTabNavigator({
  home: unitStack
}
,
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
)

const TabSetting = createBottomTabNavigator({
  setting: settingStrack
}
,
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
)



const MainApp=createAppContainer(TabNavigator)
const DrawerNatigator=createDrawerNavigator({
  tabHome:{
    screen: MainApp,
       navigationOptions: {
       drawerLabel: 'Home',
    },

  },
  tabUser:{
    screen: TabUser ,
       navigationOptions: {
       drawerLabel: 'User',
    },

  },

  tabUnit:{
    screen: TabUnit,
       navigationOptions: {
       drawerLabel: 'Unit',
    },

  },

  tabSetting:{
    screen: TabSetting,
       navigationOptions: {
       drawerLabel: 'Setting',
    },

  }


  // home: {
  //   //Title
  //   screen: TabNavigator.home,
  //   navigationOptions: {
  //     drawerLabel: 'Home',
  //   },
  // },

  // user: {
  //   //Title
  //   screen: TabNavigator.user,
  //   navigationOptions: {
  //     drawerLabel: 'User',
  //   },
  // },

  // unit: {
  //   //Title
  //   screen: TabNavigator.unit,
  //   navigationOptions: {
  //     drawerLabel: 'Unit',
  //   },
  // },

  // setting: {
  //   //Title
  //   screen: TabNavigator.setting,
  //   navigationOptions: {
  //     drawerLabel: 'Setting',
  //   },
  // },

})
 
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
0