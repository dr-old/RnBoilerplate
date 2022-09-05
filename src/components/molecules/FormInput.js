import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles, color} from '../../utils/styles';
import {Divider, InputText} from '../atoms';

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
    <View
      style={{
        flexDirection: 'row',
        borderColor: brcolor,
        borderBottomWidth: 1,
        borderRadius: brradius,
        paddingHorizontal: padhrz,
        marginHorizontal: 17,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgcolor,
      }}>
      {label && (
        <>
          <Text style={styles.textBase()}>{label} :</Text>
          <Divider width={10} />
        </>
      )}
      <InputText
        textRight={textRight}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChangeText={onChangeText}
        refInput={refInput}
        onKeyPress={onKeyPress}
        onSubmitEditing={onSubmitEditing}
      />
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
  divInput: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
});

export default FormInput;
