import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {color, styles} from '../../../utils/styles';

function Form() {
  const navigation = useNavigation();
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}></View>
  );
}

export default Form;
