import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {color} from '../utils';
import {ChatPage, HomePage, SettingPage} from '../containers/page';

const Tab = createBottomTabNavigator();

export default function TabStack() {
  const tabBar = [
    {name: 'HomeTab', icon: 'home', comp: HomePage},
    {name: 'ChatTab', icon: 'comment', comp: ChatPage},
    {name: 'SettingsTab', icon: 'cog', comp: SettingPage},
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
        tabBarActiveTintColor: color.biru,
        tabBarActiveBackgroundColor: color.biruEmpat,
        tabBarInactiveTintColor: color.abu,
        tabBarInactiveBackgroundColor: color.putih,
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
