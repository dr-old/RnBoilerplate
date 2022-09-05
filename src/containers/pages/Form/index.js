import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {color, styles} from '../../../utils/styles';
import {InputText} from '../../../components/atoms';
import {FormInput} from '../../../components/molecules';

function Form() {
  const navigation = useNavigation();
  const [input, setInput] = React.useState('');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.white,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FormInput
        label="label"
        placeholder="Input text outline with label"
        type="outline"
        value={input}
        onChangeText={value => setInput(value)}
      />
      <FormInput
        placeholder="Input text outline without label"
        type="outline"
        value={input}
        onChangeText={value => setInput(value)}
      />
      <FormInput
        label="label"
        placeholder="Input text solid with label in disabled"
        type="solid"
        disabled={true}
        value={input}
        onChangeText={value => setInput(value)}
      />
      <FormInput
        placeholder="Input text solid without label"
        type="solid"
        value={input}
        onChangeText={value => setInput(value)}
      />
    </View>
  );
}

export default Form;
