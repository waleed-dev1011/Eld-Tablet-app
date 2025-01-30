import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../../util/color';
import {mvs, width} from '../../../util/metrices';
const PrimaryPasswordInput = ({
  placeholder,
  leftIcon,
  rightIcon,
  value,
  onChangeText,
  onBlur,
  keyboardType = 'default',
  secureTextEntry,
  error,
  touched,
  editable,
  style, // This should target the TextInput field specifically
  containerStyle, // New prop for customizing the outer container
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  const togglePasswordVisibility = () => {
    setIsSecure(!isSecure);
  };
  return (
    <View
      style={[
        styles.inputContainer,
        containerStyle, // Allow customization for the container
        {
          borderColor: error ? colors.red : colors.gray,
          borderWidth: mvs(1.4),
        },
      ]}>
      {leftIcon && leftIcon}
      <TextInput
        editable={editable}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={isSecure}
        style={[styles.input, style]} // Merge default and custom styles for TextInput
        placeholderTextColor={colors.grey}
        keyboardType={keyboardType}
      />
      {rightIcon && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          {React.cloneElement(rightIcon, {
            style: [rightIcon.props.style, styles.iconStyle],
          })}
        </TouchableOpacity>
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: mvs(1),
    marginTop: mvs(13),
    flexDirection: 'row',
    backgroundColor: colors.gray,
    gap: mvs(7),
    borderRadius: mvs(8),
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: mvs(5),
    marginBottom: mvs(10),
  },
  input: {
    fontSize: mvs(14),
    color: colors.black,
    width: width - mvs(100),
  },
  errorText: {
    position: 'absolute',
    color: colors.red,
    fontSize: mvs(12),
    fontWeight: '500',
    bottom: -16,
    // left: 10,
  },
});
export default PrimaryPasswordInput;
