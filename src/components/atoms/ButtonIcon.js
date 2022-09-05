import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {color} from '../../utils/styles';

function ButtonIcon({type, solid, onClick, disabled, name, size, style}) {
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
      disabled={disabled}
      style={style ? style : stylesCust.filterBackground(bgcolor)}
      onPress={onClick}>
      <FontAwesome5 name={name} size={size} color={textcolor} />
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

export default ButtonIcon;
