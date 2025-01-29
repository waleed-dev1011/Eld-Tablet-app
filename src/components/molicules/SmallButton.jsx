import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const SmallButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.cancelButton,
        { backgroundColor: title === "Accept" ? "#9A0B09" : "#E7E6EB" },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          { color: title === "Accept" ? "#fff" : "#000" },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cancelButton: {
    backgroundColor: "#f44336",
    padding: 10,
    borderRadius: 10,
    height: 40,
    width: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export { SmallButton };
