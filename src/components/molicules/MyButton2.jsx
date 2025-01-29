import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { mvs } from "../../config/metrices";

const MyButton2 = ({ title, icon, style }) => {
  return (
    <TouchableOpacity disabled={true} style={[styles.container, style]}>
      <View style={styles.content}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: mvs(50),
    borderWidth: mvs(2),
    height: mvs(40),
    alignSelf: "flex-start",
    paddingHorizontal: mvs(20),
  },
  content: {
    flexDirection: "row",
    gap: mvs(5),
    alignItems: "center",
  },
  icon: {
    width: mvs(20),
    height: mvs(20),
    resizeMode: "contain",
  },
  text: {
    fontSize: mvs(14),
    fontWeight: "400",
    color: "#9A0B09",
  },
});

export { MyButton2 };
