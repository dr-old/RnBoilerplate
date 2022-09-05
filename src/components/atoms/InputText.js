import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles, color} from '../../utils/styles';
import {ButtonIcon} from '../atoms';

function InputText({
  textRight,
  value,
  placeholder,
  disabled,
  onChangeText,
  refInput,
  onKeyPress,
  onSubmitEditing,
}) {
  return (
    <TextInput
      style={stylesCust.input(textRight)}
      value={value}
      editable={!disabled}
      placeholder={placeholder}
      placeholderTextColor={color.grey}
      onChangeText={onChangeText}
      ref={refInput}
      onKeyPress={onKeyPress}
      onSubmitEditing={onSubmitEditing}
    />
  );
}

const stylesCust = StyleSheet.create({
  input: (textRight = 'left') => ({
    fontFamily: 'Poppins-Medium',
    flex: 1,
    paddingVertical: 8,
    textAlign: textRight,
    color: color.grey2,
  }),
});

export default InputText;
