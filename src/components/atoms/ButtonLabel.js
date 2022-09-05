import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {color, styles} from '../../utils/styles';

function ButtonLabel({type, solid, onClick, disabled, label, alignSelf}) {
  let bgcolor = '';
  let textcolor = '';
  if (type === 'primary') {
    bgcolor = color.blue4;
    textcolor = color.blue;
  } else if (type === 'success') {
    bgcolor = color.green2;
    textcolor = color.green3;
  } else if (type === 'danger') {
    bgcolor = color.red3;
    textcolor = color.red;
  } else if (type === 'warning') {
    bgcolor = color.orange2;
    textcolor = color.orange;
  } else {
    bgcolor = color.white2;
    textcolor = color.grey;
  }
  if (solid) {
    bgcolor = textcolor;
    textcolor = color.white;
  }
  return (
    <TouchableOpacity
      onPress={onClick}
      disabled={disabled}
      style={stylesCust.filterBackground(bgcolor, alignSelf)}>
      <Text style={styles.textBase(13, textcolor, 'textMedium', 'capitalize')}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const stylesCust = StyleSheet.create({
  filterBackground: (backgroundColor = color.white, alignSelf = 'center') => ({
    backgroundColor: backgroundColor,
    padding: 10,
    borderRadius: 13,
    marginVertical: 10,
    justifyContent: 'center',
    alignSelf: alignSelf,
  }),
});

export default ButtonLabel;
