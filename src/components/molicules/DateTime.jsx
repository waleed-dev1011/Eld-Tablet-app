import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
const DateTime = ({ item, setOpen, index, setID, datevalue, onDateChange }) => {
  return (
    <TouchableOpacity
      style={[styles.inputContainer, { width: "100%" }]}
      onPress={() => {
        setOpen(true);
        setID(index);
      }}
    >
      <Icon
        name={item?.icon}
        type="ionicon"
        size={24}
        color="#9A0B09"
        style={styles.icon}
      />
      <Text style={styles.selectedTextStyle}>
        {datevalue ? datevalue : item?.placeHolder}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#E7E6EB",
    borderRadius: 12,
    height: 55,
  },
  icon: {
    marginRight: 10,
  },

  selectedTextStyle: {
    fontSize: 16,
    color: "#000",
  },
});

export { DateTime };
