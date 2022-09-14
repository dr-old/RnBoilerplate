import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles, color} from '../../utils/styles';
import {ButtonIcon, Divider, InputText} from '../atoms';

function FormInput({
  label,
  type,
  textRight,
  placeholder,
  value,
  disabled,
  onChangeText,
  refInput,
  onKeyPress,
  onSubmitEditing,
  multiline,
  icon,
}) {
  let brcolor = '';
  let bgcolor = 'transparent';
  let brradius = 0;
  let padhrz = 0;
  if (type === 'outline') {
    brcolor = color.white3;
  } else if (type === 'solid') {
    bgcolor = color.white3;
    brcolor = color.white3;
    brradius = 10;
    padhrz = 10;
  }
  return (
    <View style={stylesCust.inputText(brcolor, brradius, padhrz, bgcolor)}>
      {label && (
        <>
          <Text style={styles.textBase()}>{label} :</Text>
          <Divider width={10} />
        </>
      )}
      <InputText
        myHeight={multiline ? 100 : null}
        textRight={textRight}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChangeText={onChangeText}
        refInput={refInput}
        onKeyPress={onKeyPress}
        onSubmitEditing={onSubmitEditing}
        multiline={multiline}
      />
      {icon?.name ? (
        <ButtonIcon
          type={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: icon?.color ? icon.color : color.blue,
          }}
          style={stylesCust.inputIcon}
          name={icon.name}
          size={20}
          onClick={icon.onClick}
        />
      ) : null}
    </View>
  );
}

const stylesCust = StyleSheet.create({
  input: (textRight = 'left') => ({
    fontFamily: 'Poppins-Medium',
    width: '100%',
    paddingVertical: 8,
    textAlign: textRight,
    color: color.grey2,
    backgroundColor: color.white2,
  }),
  inputText: (
    borderColor,
    borderRadius,
    paddingHorizontal,
    backgroundColor,
  ) => ({
    flexDirection: 'row',
    borderColor: borderColor,
    borderBottomWidth: 1,
    borderRadius: borderRadius,
    paddingHorizontal: paddingHorizontal,
    marginHorizontal: 17,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  }),
  inputIcon: {
    paddingLeft: 17,
    marginVertical: 10,
    justifyContent: 'center',
  },
});

export default FormInput;
