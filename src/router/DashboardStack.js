import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Chat, Home, Setting} from '../containers/pages';
// import TabStack from './TabStack';

const Stack = createNativeStackNavigator();

function DashboardStack() {
  const page = [
    // {name: 'Home', comp: TabStack}, // if you use tab bottom navigation
    {name: 'Home', comp: Home},
    {name: 'Chat', comp: Chat},
    {name: 'Setting', comp: Setting},
  ];
  return (
    <Stack.Navigator initialRouteName="Home">
      {page.map(item => {
        return (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.comp}
            options={{headerShown: false}}
          />
        );
      })}
    </Stack.Navigator>
  );
}

export default DashboardStack;
