import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ArrowDown, MapPin } from "../../../assets/images";
import { mvs } from "../../../config/metrices";
import { colors } from "../../../config/colors";

const LocationSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.currentLocationText}>Your current location</Text>
      <View style={styles.locationRow}>
        <Image source={MapPin} style={styles.icon} />
        <Text style={styles.locationText}>Coppel, Virginia</Text>
        <Image source={ArrowDown} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: mvs(15),
    paddingVertical: mvs(10),
    backgroundColor: colors.gray,
  },
  currentLocationText: {
    color: colors.grey,
    fontWeight: "400",
    fontSize: mvs(13),
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: mvs(10), // If not supported, replace with marginHorizontal on child components
    paddingTop: mvs(2),
  },
  icon: {
    width: mvs(20),
    height: mvs(20),
    resizeMode: "cover",
  },
  locationText: {
    color: colors.black,
    fontWeight: "600",
    fontSize: mvs(16),
  },
});

export { LocationSection };
