import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {color, styles} from '../../../utils/styles';

function Typography() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.textBase(20, color.blue, 'textBlack', 'capitalize')}>
        I'm Jason Voorhees
      </Text>
      <Text
        style={styles.textBase(
          20,
          color.blue,
          'textBlackItalic',
          'capitalize',
        )}>
        I'm Jason Voorhees
      </Text>
      <Text style={styles.textBase(20, color.blue, 'textBold', 'capitalize')}>
        I'm Jason Voorhees
      </Text>
      <Text
        style={styles.textBase(20, color.blue, 'textBoldItalic', 'capitalize')}>
        I'm Jason Voorhees
      </Text>
      <Text
        style={styles.textBase(20, color.blue, 'textExtraBold', 'capitalize')}>
        I'm Jason Voorhees
      </Text>
      <Text
        style={styles.textBase(
          20,
          color.blue,
          'textExtraBoldItalic',
          'capitalize',
        )}>
        I'm Jason Voorhees
      </Text>
      <Text
        style={styles.textBase(20, color.blue, 'textExtraLight', 'capitalize')}>
        I'm Jason Voorhees
      </Text>
      <Text
        style={styles.textBase(
          20,
          color.blue,
          'textExtraLightItalic',
          'capitalize',
        )}>
        I'm Jason Voorhees
      </Text>
      <Text style={styles.textBase(20, color.blue, 'textItalic', 'capitalize')}>
        I'm Jason Voorhees
      </Text>
      <Text style={styles.textBase(20, color.blue, 'textLight', 'capitalize')}>
        I'm Jason Voorhees
      </Text>
      <Text
        style={styles.textBase(
          20,
          color.blue,
          'textLightItalic',
          'capitalize',
        )}>
        I'm Jason Voorhees
      </Text>
      <Text style={styles.textBase(20, color.blue, 'textMedium', 'capitalize')}>
        I'm Jason Voorhees
      </Text>
      <Text
        style={styles.textBase(
          20,
          color.blue,
          'textMediumItalic',
          'capitalize',
        )}>
        I'm Jason Voorhees
      </Text>
      <Text
        style={styles.textBase(20, color.blue, 'textRegular', 'capitalize')}>
        I'm Jason Voorhees
      </Text>
      <Text
        style={styles.textBase(20, color.blue, 'textSemiBold', 'capitalize')}>
        I'm Jason Voorhees
      </Text>
      <Text
        style={styles.textBase(
          20,
          color.blue,
          'textSemiBoldItalic',
          'capitalize',
        )}>
        I'm Jason Voorhees
      </Text>
      <Text style={styles.textBase(20, color.blue, 'textThin', 'capitalize')}>
        I'm Jason Voorhees
      </Text>
      <Text
        style={styles.textBase(20, color.blue, 'textThinItalic', 'capitalize')}>
        I'm Jason Voorhees
      </Text>
    </View>
  );
}

export default Typography;
