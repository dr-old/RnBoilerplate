import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Chat, Home, Setting} from '../containers/pages';
import {color as clr} from '../utils/styles';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabStack() {
  const tabBar = [
    {name: 'HomeTab', icon: 'home', comp: Home},
    {name: 'ChatTab', icon: 'comment', comp: Chat},
    {name: 'SettingTab', icon: 'cog', comp: Setting},
  ];

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 90 : 60, // for android 60
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

        tabBarActiveTintColor: clr.blue,
        tabBarActiveBackgroundColor: clr.blue4,
        tabBarInactiveTintColor: clr.grey,
        tabBarInactiveBackgroundColor: clr.white,
      })}>
      {tabBar.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.comp}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => (
              <FontAwesome5 name={item.icon} color={color} size={20} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
