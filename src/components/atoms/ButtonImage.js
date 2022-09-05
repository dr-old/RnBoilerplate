import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {color} from '../../utils/styles';

function ButtonImage(props) {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <Image source={{uri: props.image}} style={stylesCust.photo} />
    </TouchableOpacity>
  );
}

const stylesCust = StyleSheet.create({
  photo: {
    height: 100,
    width: 100,
    backgroundColor: color.white2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: color.white3,
    borderWidth: 1,
  },
});

export default ButtonImage;
