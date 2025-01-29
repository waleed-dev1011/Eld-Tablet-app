import React from "react";
import { StyleSheet, TextInput } from "react-native";

const MultipleLineText = ({
  placeholder = "Type here",
  value,
  onChangeText,
}) => {
  return (
    <TextInput
      style={[styles.input, { height: 100, textAlignVertical: "top" }]}
      placeholder={placeholder}
      placeholderTextColor="#000"
      value={value}
      onChangeText={onChangeText}
      keyboardType={"default"}
      multiline={true}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    color: "black",
  },
});

export default MultipleLineText;
