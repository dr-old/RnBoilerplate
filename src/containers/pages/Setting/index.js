import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Setting() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Setting Screen</Text>
      <Button title="Go to Chat" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
}

export default Setting;
