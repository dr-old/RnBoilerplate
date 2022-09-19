import {StyleSheet, Platform} from 'react-native';

const color = {
  blue: '#14539a',
  blue2: '#097bed',
  blue3: '#e0f7fa',
  blue4: '#e4effb',
  blue5: '#3670b2',
  blue6: '#255e9f',
  grey: '#bbb',
  grey2: '#666',
  grey3: '#7a7a7a',
  grey4: '#34495e',
  grey5: '#545454',
  white: '#fff',
  white2: '#f2f2f2',
  white3: '#e8e8e8',
  white4: '#f4f8fb',
  white5: 'rgba(255, 255, 255, 0.5)',
  white6: '#ffffff3d',
  red: '#da1414',
  red2: '#ff2d55',
  red3: '#ffeef2',
  orange: '#ff9500',
  orange2: '#fff6e7',
  green: '#1ABC9C',
  green2: '#def0db',
  green3: '#019f4a',
  loading: '#00000060',
};

const styles = StyleSheet.create({
  textBlack: {fontFamily: 'Poppins-Black'},
  textBlackItalic: {fontFamily: 'Poppins-BlackItalic'},
  textBold: {fontFamily: 'Poppins-Bold'},
  textBoldItalic: {fontFamily: 'Poppins-BoldItalic'},
  textExtraBold: {fontFamily: 'Poppins-ExtraBold'},
  textExtraBoldItalic: {fontFamily: 'Poppins-ExtraBoldItalic'},
  textExtraLight: {fontFamily: 'Poppins-ExtraLight'},
  textExtraLightItalic: {fontFamily: 'Poppins-ExtraLightItalic'},
  textItalic: {fontFamily: 'Poppins-Italic'},
  textLight: {fontFamily: 'Poppins-Light'},
  textLightItalic: {fontFamily: 'Poppins-LightItalic'},
  textMedium: {fontFamily: 'Poppins-Medium'},
  textMediumItalic: {fontFamily: 'Poppins-MediumItalic'},
  textRegular: {fontFamily: 'Poppins-Regular'},
  textSemiBold: {fontFamily: 'Poppins-SemiBold'},
  textSemiBoldItalic: {fontFamily: 'Poppins-SemiBoldItalic'},
  textThin: {fontFamily: 'Poppins-Thin'},
  textThinItalic: {fontFamily: 'Poppins-ThinItalic'},
  textBase: (
    size = 13,
    clr = color.grey2,
    type = 'textMedium',
    transform = 'capitalize',
  ) => [
    styles[type],
    {
      fontSize: size,
      color: clr,
      textTransform: transform,
    },
  ],
});

export {styles, color};
