// components/Box.jsx

import React from 'react';
import {View, StyleSheet} from 'react-native';

const Box = ({children, style}) => {
  return <View style={[styles.box, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  box: {
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default Box;
