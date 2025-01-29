import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/UI/Header';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Header title={'Settings'} />

    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
