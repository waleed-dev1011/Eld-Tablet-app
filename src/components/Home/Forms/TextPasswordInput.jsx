import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const MyPasswordInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry} // Optional for password fields
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
  },
});

export {MyPasswordInput};
