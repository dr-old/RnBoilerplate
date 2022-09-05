import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {color} from '../../utils/styles';

function ButtonIcon({
  disabled,
  type,
  solid,
  style,
  onClick,
  name,
  size,
  colorIcon,
}) {
  let iconClr = color;
  let iconBg = null;
  if (solid) {
    iconClr = color.white;
    iconBg = colorIcon;
  }
  return (
    <TouchableOpacity
      disabled={disabled}
      style={style ? style : stylesCust.filterBackground(iconBg)}
      onPress={onClick}>
      <FontAwesome5 name={name} size={size} color={iconClr} />
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
