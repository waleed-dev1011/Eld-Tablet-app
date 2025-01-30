import {Alert, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {MyButton} from '../../../components/atoms/InputFields/MyButton';
import {HomeHeader} from '../../../components/Headers';
import Regular from '../../../typography/RegularText';

const Chat = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed');
  };
  return (
    <View style={styles.container}>
      <HomeHeader title={'Chat'} />
      <TouchableOpacity>
        <Regular>This is a Box</Regular>
      </TouchableOpacity>
      <MyButton title="Press Me" onPress={handlePress} />
      <MyButton title={'Disabled Button'} />
    </View>
  );
};

export default Chat;
