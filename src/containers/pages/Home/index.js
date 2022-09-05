import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ButtonIcon, ButtonLabel} from '../../../components/atoms';
import {color} from '../../../utils/styles';

function Home() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.white,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Button Icon</Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 17,
          flexWrap: 'wrap',
        }}>
        <ButtonIcon
          solid={true}
          type="primary"
          name="home"
          size={20}
          colorIcon={color.blue}
          onClick={() => console.log('primary')}
        />
      </View>
      <Text>Button Label</Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 17,
          flexWrap: 'wrap',
        }}>
        <ButtonLabel
          type="primary"
          label="Primary"
          onClick={() => console.log('primary')}
        />
        <ButtonLabel
          type="success"
          label="success"
          onClick={() => console.log('success')}
        />
        <ButtonLabel
          type="warning"
          label="warning"
          onClick={() => console.log('warning')}
        />
        <ButtonLabel
          type="default"
          label="default"
          onClick={() => console.log('default')}
        />
        <ButtonLabel
          type="danger"
          label="danger"
          onClick={() => console.log('danger')}
        />
      </View>
      <Text>Button Label Solid</Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 17,
          flexWrap: 'wrap',
        }}>
        <ButtonLabel
          type="primary"
          solid={true}
          label="Primary"
          onClick={() => console.log('primary')}
        />
        <ButtonLabel
          type="success"
          solid={true}
          label="success"
          onClick={() => console.log('success')}
        />
        <ButtonLabel
          type="warning"
          solid={true}
          label="warning"
          onClick={() => console.log('warning')}
        />
        <ButtonLabel
          type="default"
          solid={true}
          label="default"
          onClick={() => console.log('default')}
        />
        <ButtonLabel
          type="danger"
          solid={true}
          label="danger"
          onClick={() => console.log('danger')}
        />
      </View>

      <Button
        title="Go to Typography"
        onPress={() => navigation.navigate('Typography')}
      />
    </View>
  );
}

export default Home;
