import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../util/color';

const Input = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  error,
  editable = true,
  keyboardType = 'default',
}) => {
  return (
    <View style={{marginBottom: 5}}>
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholder={placeholder}
        placeholderTextColor={colors.white}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        editable={editable}
        keyboardType={keyboardType}
      />
      <View style={styles.errorContainer}>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.inputfield,
    color: colors.white,
    height: 50,
  },
  inputError: {
    borderWidth: 1,
  },
  errorContainer: {
    height: 20,
    justifyContent: 'flex-end',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    textAlign: 'left',
    marginTop: 4,
  },
});
export default Input;
