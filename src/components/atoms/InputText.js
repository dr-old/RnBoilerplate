import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {styles, color} from '../../utils/styles';

function InputText({
  myHeight,
  textRight,
  value,
  placeholder,
  disabled,
  onChangeText,
  refInput,
  onKeyPress,
  onSubmitEditing,
  multiline,
}) {
  return (
    <TextInput
      style={stylesCust.input(
        textRight,
        multiline ? 'top' : 'center',
        myHeight,
      )}
      value={value}
      editable={!disabled}
      placeholder={placeholder}
      placeholderTextColor={color.grey}
      onChangeText={onChangeText}
      ref={refInput}
      onKeyPress={onKeyPress}
      onSubmitEditing={onSubmitEditing}
      multiline={multiline}
      numberOfLines={multiline ? 4 : 2}
    />
  );
}

const stylesCust = StyleSheet.create({
  input: (textRight = 'left', textAlignVertical = 'center', height = 50) => ({
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    flex: 1,
    paddingVertical: 8,
    height: height,
    textAlign: textRight,
    color: color.grey2,
    textAlignVertical: textAlignVertical,
  }),
});

export default InputText;
