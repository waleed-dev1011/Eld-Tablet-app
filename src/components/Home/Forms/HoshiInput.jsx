import React, {useState} from 'react';
import {Animated, StyleSheet, TextInput} from 'react-native';
import {Hoshi} from 'react-native-textinput-effects';

const HoshiInput = ({
  label,
  value,
  onChangeText,
  error,
  secureTextEntry,
  shakeAnim,
}) => {
  return (
    <Animated.View style={{transform: [{translateX: shakeAnim}]}}>
      <Hoshi
        label={label}
        borderColor={'#6200ee'}
        borderHeight={3}
        inputPadding={16}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, error && styles.errorBorder]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: '3%',
  },
  errorBorder: {
    borderColor: 'red',
  },
});

export default HoshiInput;
