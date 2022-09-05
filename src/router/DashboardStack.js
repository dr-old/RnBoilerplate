import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Form, Typography} from '../containers/pages';
import TabStack from './TabStack';

const Stack = createNativeStackNavigator();

function DashboardStack() {
  const page = [
    {name: 'Home', comp: TabStack}, // if you can use tab bottom navigation
    // {name: 'Home', comp: Home}, // if you cannot use tab bottom navigation
    {name: 'Typography', comp: Typography},
    {name: 'Form', comp: Form},
  ];
  return (
    <Stack.Navigator initialRouteName="Home">
      {page.map(item => {
        return (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.comp}
            options={{headerShown: true}}
          />
        );
      })}
    </Stack.Navigator>
  );
}

export default DashboardStack;
