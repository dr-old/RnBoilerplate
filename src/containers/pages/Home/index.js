import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ButtonIcon, ButtonLabel, Divider} from '../../../components/atoms';
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
          outline={true}
          type="primary"
          name="home"
          size={20}
          onClick={() => console.log('primary')}
        />
        <ButtonIcon
          type="success"
          name="home"
          size={20}
          onClick={() => console.log('success')}
        />
        <ButtonIcon
          outline={true}
          type="warning"
          name="home"
          size={20}
          onClick={() => console.log('warning')}
        />
        <ButtonIcon
          type="default"
          name="home"
          size={20}
          onClick={() => console.log('default')}
        />
        <ButtonIcon
          outline={true}
          type="danger"
          name="home"
          size={20}
          onClick={() => console.log('danger')}
        />
      </View>
      <Text>Button Icon Solid</Text>
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
          onClick={() => console.log('primary')}
        />
        <ButtonIcon
          solid={true}
          type="success"
          name="home"
          size={20}
          onClick={() => console.log('success')}
        />
        <ButtonIcon
          solid={true}
          type="warning"
          name="home"
          size={20}
          onClick={() => console.log('warning')}
        />
        <ButtonIcon
          solid={true}
          type="default"
          name="home"
          size={20}
          onClick={() => console.log('default')}
        />
        <ButtonIcon
          solid={true}
          type="danger"
          name="home"
          size={20}
          onClick={() => console.log('danger')}
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
          outline={true}
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
          outline={true}
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
          outline={true}
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
      <Divider height={10} mTop={10} mBot={10} bgColor={color.white2} />
      <ButtonLabel
        type="primary"
        solid={true}
        label="go to typography"
        onClick={() => navigation.navigate('Typography')}
      />
      <ButtonLabel
        type="success"
        solid={true}
        label="go to form"
        onClick={() => navigation.navigate('Form')}
      />
    </View>
  );
}

export default Home;
