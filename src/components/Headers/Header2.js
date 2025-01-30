import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/svg/back-icon';

const Header2 = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <View style={styles.textc}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  icon: {
    alignItems: 'flex-start',
    position: 'absolute',
    paddingRight: 20,
    paddingVertical: 10,
  },
  textc: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
});

export {Header2};
