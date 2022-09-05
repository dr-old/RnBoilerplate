import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {color, styles} from '../../utils/styles';

function ButtonLabel({
  type,
  solid,
  outline,
  onClick,
  disabled,
  label,
  alignSelf,
}) {
  let bgcolor = '';
  let textcolor = '';
  let brcolor = '';
  if (type === 'primary') {
    bgcolor = color.blue4;
    brcolor = color.blue4;
    textcolor = color.blue;
  } else if (type === 'success') {
    bgcolor = color.green2;
    brcolor = color.green2;
    textcolor = color.green3;
  } else if (type === 'danger') {
    bgcolor = color.red3;
    brcolor = color.red3;
    textcolor = color.red;
  } else if (type === 'warning') {
    bgcolor = color.orange2;
    brcolor = color.orange2;
    textcolor = color.orange;
  } else {
    bgcolor = color.white2;
    brcolor = color.white2;
    textcolor = color.grey;
  }
  if (solid) {
    brcolor = textcolor;
    bgcolor = textcolor;
    textcolor = color.white;
  }
  if (outline) {
    brcolor = textcolor;
  }
  return (
    <TouchableOpacity
      onPress={onClick}
      disabled={disabled}
      style={stylesCust.filterBackground(bgcolor, alignSelf, brcolor)}>
      <Text style={styles.textBase(13, textcolor, 'textMedium', 'capitalize')}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const stylesCust = StyleSheet.create({
  filterBackground: (
    backgroundColor = color.white,
    alignSelf = 'center',
    borderColor,
  ) => ({
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderWidth: 1,
    padding: 10,
    borderRadius: 13,
    marginVertical: 10,
    justifyContent: 'center',
    alignSelf: alignSelf,
  }),
});

export default ButtonLabel;
