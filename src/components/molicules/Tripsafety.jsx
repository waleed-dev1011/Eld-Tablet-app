import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { Safety } from "../../assets/images";

const TripSafety = ({ bottom = 315, onSafetyPress }) => {
  console.log("🚀 ~ TripSafety ~ bottom:", bottom);

  return (
    <TouchableOpacity
      onPress={onSafetyPress}
      style={[styles.safety, { bottom: bottom }]}
      activeOpacity={0.7} // Ensure responsiveness on touch
    >
      <View style={{ flexDirection: "row", gap: 6 }}>
        <Image source={Safety} style={styles.image2} />
        <View>
          <Text style={[styles.text1, { fontWeight: "600" }]}>
            Make your trip safety first
          </Text>
          <Text style={[styles.text1, { fontSize: 13 }]}>
            Check how we make our customers more safe
          </Text>
        </View>
        <Icon name="arrow-forward" type="ionicon" size={20} color={"black"} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: "black",
    fontSize: 15,
    fontWeight: "400",
  },
  image2: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  safety: {
    width: "90%",
    flexDirection: "row",
    backgroundColor: "white",
    position: "absolute",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 24,
    alignSelf: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export { TripSafety };
