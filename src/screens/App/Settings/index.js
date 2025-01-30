import {View} from 'react-native';
import React from 'react';
import {HomeHeader} from '../../../components/Headers';
import styles from './styles';

const Settings = () => {
  return (
    <View style={styles.container}>
      <HomeHeader title={'Settings'} back />
    </View>
  );
};

export default Settings;
