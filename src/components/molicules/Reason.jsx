import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox } from "@rneui/themed";
import { colors } from "../../config/colors";

const Reason = ({ item, checked, setchecked }) => {
  return (
    <View style={styles.cont}>
      <CheckBox
        checked={checked === item.index}
        onPress={() => setchecked(item.index)}
        iconType="material-community"
        checkedIcon="radiobox-marked"
        uncheckedIcon="radiobox-blank"
        checkedColor="#9A0B09"
        uncheckedColor="grey"
      />
      <Text style={styles.txt1}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -30,
    width: "100%",
  },
  txt1: {
    color: colors.black,
    fontWeight: "400",
    fontSize: 14,
    marginLeft: -12,
  },
});

export { Reason };
