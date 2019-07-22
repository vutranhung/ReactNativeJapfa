import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import  Home from './screen/Home'
import  MainUser from './screen/user/MainUser'
import  MainUnit from './screen/unit/MainUnit'
import Settting from './screen/setting/MainSetting'

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
        <Ionicons name={name} size={size} color={color} />
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

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'home') {
    iconName = `home${focused ? '' : '-outline'}`;
    // We want to add badges to home tab icon
  //  IconComponent = HomeIconWithBadge;
  } else if (routeName === 'setting') {
    iconName = `ios-options${focused ? '' : '-outline'}`;
  }
  // else if(routeName==='user'){
  //   iconName = `user-o${focused ? '' : '-outline'}`;
  // }else{
  //   //unit
  //   iconName = `house-damage${focused ? '' : '-outline'}`;
  // }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator({
  home: { screen: Home },
  user:{screen:MainUser},
  unit:{screen: MainUnit},
  settting: { screen: Settting },
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor),
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
