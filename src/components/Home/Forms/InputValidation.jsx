import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Platform} from 'react-native';

const InputValidation = ({
  withoutForm,
  name,
  label,
  placeholder,
  value,
  onChangeText,
  type,
  required,
  message,
  size,
  disabled,
  validator,
  textArea,
  secureTextEntry,
  errorMessage,
  style,
  ...props
}) => {
  const [isValid, setIsValid] = useState(true); // State to track input validity
  const [inputValue, setInputValue] = useState(value || ''); // Track value of input
  const [error, setError] = useState(''); // State for error message

  // Handle change and validate
  const handleChange = text => {
    setInputValue(text);
    onChangeText && onChangeText(text); // Call the parent's onChangeText if provided

    // Validate input based on provided validator
    if (validator) {
      const isInputValid = validator(text);
      setIsValid(isInputValid);
      if (!isInputValid) {
        setError(errorMessage || message);
      } else {
        setError('');
      }
    } else if (required && !text) {
      setIsValid(false);
      setError(message || 'This field is required');
    } else {
      setIsValid(true);
      setError('');
    }
  };

  const renderInput = () => {
    if (textArea) {
      return (
        <TextInput
          style={[
            styles.input,
            {height: 100, textAlignVertical: 'top'},
            !isValid && styles.errorInput,
            style,
          ]}
          placeholder={placeholder || ''}
          value={inputValue}
          onChangeText={handleChange}
          multiline
          numberOfLines={4}
          editable={!disabled}
          {...props}
        />
      );
    }

    if (type === 'password') {
      return (
        <TextInput
          style={[styles.input, !isValid && styles.errorInput, style]}
          placeholder={placeholder || ''}
          value={inputValue}
          onChangeText={handleChange}
          secureTextEntry={secureTextEntry}
          editable={!disabled}
          {...props}
        />
      );
    }

    return (
      <TextInput
        style={[styles.input, !isValid && styles.errorInput, style]}
        placeholder={placeholder || ''}
        value={inputValue}
        onChangeText={handleChange}
        editable={!disabled}
        {...props}
      />
    );
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, {textAlign: 'left'}]}>{label}</Text>
      )}

      {withoutForm ? (
        renderInput()
      ) : (
        <View style={styles.formItem}>
          {renderInput()}
          {!isValid && error && <Text style={styles.errorText}>{error}</Text>}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  errorInput: {
    borderColor: 'red',
  },
  formItem: {
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default InputValidation;
