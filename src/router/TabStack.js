import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Chat, Home, Setting} from '../containers/pages';
import {color} from '../utils/styles';

const Tab = createBottomTabNavigator();

export default function TabStack() {
  const tabBar = [
    {name: 'HomeTab', icon: 'home', comp: Home},
    {name: 'ChatTab', icon: 'comment', comp: Chat},
    {name: 'SettingTab', icon: 'cog', comp: Setting},
  ];

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0,
          elevation: 0, // for Android
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
        },
        tabBarItemStyle: {
          margin: 10,
          borderRadius: 10,
        },
        tabBarActiveTintColor: color.blue,
        tabBarActiveBackgroundColor: color.blue4,
        tabBarInactiveTintColor: color.grey,
        tabBarInactiveBackgroundColor: color.white,
      })}>
      {tabBar.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.comp}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({clr}) => (
              <FontAwesome5 name={item.icon} color={clr} size={20} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
