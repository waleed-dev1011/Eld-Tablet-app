import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

const PickDrop = ({
  title,
  img,
  placeholder,
  onPicDropPress = () => {},
  setSecond,
  value,
  onChangeText,
}) => {
  return (
    <TouchableOpacity
      style={[styles.inputContainer, { width: "100%" }]}
      onPress={onPicDropPress}
    >
      <Image source={img} style={styles.imageStyle} />
      <Text style={styles.itemText}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#000"
        editable={false}
        // value={value}
        // onChangeText={onChangeText}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 50,
    gap: 5,
    backgroundColor: "#E7E6EB",
    borderRadius: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  imageStyle: {
    width: 20,
    height: 20,
    borderRadius: 12,
  },

  itemText: {
    fontSize: 16,
    color: "grey",
  },
});

export { PickDrop };
