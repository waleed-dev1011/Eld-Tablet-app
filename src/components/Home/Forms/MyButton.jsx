// components/MyButton.jsx

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const MyButton = ({
  title,
  onPress,
  color = '#007bff',
  disabled = false,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: disabled ? '#d3d3d3' : color},
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      {...props}>
      <Text style={[styles.text, disabled && styles.disabledText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  disabledText: {
    color: '#888', // Text color when the button is disabled
  },
});

export default MyButton;
