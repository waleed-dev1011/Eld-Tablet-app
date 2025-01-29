import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../config/colors";
import { mvs } from "../../config/metrices";

const FaqButton = ({ title1, title2, active, setActive }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setActive(1)}
        style={[
          styles.button,
          active === 1 && styles.activeButton,
          active !== 1 && styles.inactiveButton1,
        ]}
      >
        <Text style={[styles.text, active === 1 && styles.activeText]}>
          {title1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActive(0)}
        style={[
          styles.button,
          active === 0 && styles.activeButton,
          active !== 0 && styles.inactiveButton2,
        ]}
      >
        <Text style={[styles.text, active === 0 && styles.activeText]}>
          {title2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: mvs(50),
    paddingHorizontal: mvs(3),
    marginTop: mvs(20),
    flexDirection: "row",
    borderColor: colors.grey,
    borderWidth: 0.5,
    paddingVertical: mvs(3),
    width: "65%",
    overflow: "hidden",
  },
  text: {
    fontSize: mvs(14),
    fontWeight: "400",
    color: "#000",
  },
  activeText: {
    color: colors.white,
  },
  button: {
    flex: 1,
    borderRadius: mvs(25),
    height: mvs(50),
    alignItems: "center",
    justifyContent: "center",
  },
  activeButton: {
    backgroundColor: colors.primary,
  },
  inactiveButton1: {
    backgroundColor: colors.white,
  },
  inactiveButton2: {
    backgroundColor: "transparent",
  },
});

export default FaqButton;
