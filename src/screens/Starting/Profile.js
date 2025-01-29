import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/UI/Header';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header title={'Profile'} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}></View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
