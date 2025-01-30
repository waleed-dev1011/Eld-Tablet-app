import {View} from 'react-native';
import React from 'react';
import {HomeHeader} from '../../../components/Headers';
import styles from './styles';

const Profile = () => {
  return (
    <View style={styles.container}>
      <HomeHeader title={'Profile'} back />
    </View>
  );
};

export default Profile;
