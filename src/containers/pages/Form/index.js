import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {color, styles} from '../../../utils/styles';
import {Divider, InputText} from '../../../components/atoms';
import {FormInput} from '../../../components/molecules';

function Form() {
  const navigation = useNavigation();
  const [input, setInput] = React.useState('');
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: color.white,
      }}>
      <Text style={styles.textBase(20, color.blue)}>Input Text</Text>
      <Divider height={10} />
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
        placeholder="Input text outline + disabled + without label + button"
        type="outline"
        value={input}
        onChangeText={value => setInput(value)}
        disabled={true}
        icon={{
          name: 'chevron-right',
          color: color.red,
          onClick: () => console.log('onclick'),
        }}
      />
      <FormInput
        placeholder="Input text outline + without label + button"
        type="solid"
        value={input}
        onChangeText={value => setInput(value)}
        disabled={true}
        icon={{
          name: 'chevron-right',
          color: color.red,
          onClick: () => console.log('onclick'),
        }}
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
      <FormInput
        placeholder="Input text multiline solid without label"
        type="solid"
        value={input}
        onChangeText={value => setInput(value)}
        multiline={true}
      />
      <Divider height={10} mTop={10} mBot={10} bgColor={color.white2} />
      <Text style={styles.textBase(20, color.blue)}>Radio Button</Text>
    </ScrollView>
  );
}

export default Form;
