import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const RadioButton = ({ label, selected = false, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon
        name={selected ? "radio-button-checked" : "radio-button-unchecked"}
        type="material"
        color={selected ? "#9A0B09" : "#C7C7CC"}
        size={24}
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  label: {
    marginLeft: 5,
    fontSize: 15,
    color: "#000",
  },
});

export { RadioButton };
