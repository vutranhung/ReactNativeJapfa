import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import  Home from './screen/Home'
import  MainUser from './screen/user/MainUser'
import AddUser from './screen/user/AddUser'
import EditUser from './screen/user/EditUser'
import AddUnit from './screen/unit/AddUnit'
import EditUnit from './screen/unit/EditUnit'
import  MainUnit from './screen/unit/MainUnit'
import Setting from './screen/setting/MainSetting'

export  function App() {
  return (
    <View style={styles.container}>
           
    </View>
  );
}

class IconWithBadge extends Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <SimpleLineIcons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

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
  mainUser:{screen:MainUser} ,
  addUser: {screen: AddUser},
  editUser: {screen: EditUser},
});

const unitStack = createStackNavigator({
  mainUnit: {screen:MainUnit},  
  addUnit: {screen:AddUnit},
  editUnit: {screen:EditUnit},
});


const TabNavigator = createBottomTabNavigator({
  // home: {screen: Home},
  // user: {screen:MainUser},
  // unit: {screen: MainUnit},
  // setting: {screen: Setting},
    home:  {screen: Home},
    setting: {screen: Setting},
    user:userStack,
    unit:unitStack,
    
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused,horizontal, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor)
      // tabBarIcon: ({ focused, horizontal, tintColor }) => {
      //   const { routeName } = navigation.state;
      //   let IconComponent = SimpleLineIcons;
      //   let iconName;
      //   if (routeName === 'home') {
      //     iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      //     // Sometimes we want to add badges to some icons. 
      //     // You can check the implementation below.
      //     //IconComponent = HomeIconWithBadge; 
      //   } else if (routeName === 'setting') {
      //     iconName = `ios-options`;
      //   }

      //   // You can return any component that you like here!
      //   return <IconComponent name={iconName} size={25} color={tintColor} />;
      // },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}

);
 
const MainApp=createAppContainer(TabNavigator)

export default MainApp;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
