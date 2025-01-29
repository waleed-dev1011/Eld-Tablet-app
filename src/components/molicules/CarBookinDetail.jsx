import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { mvs } from "../../config/metrices";
import { Car2 } from "../../assets/images";
import Regular from "../../typography/regular-text";
import SemiBold from "../../typography/semi-bold-text";
import { CarInfo } from "./DriverRequest/CarInfo";

export default function CarBookingDetail() {
  return (
    <View style={styles.container}>
      <Image source={Car2} style={styles?.image1} />
      <SemiBold label={"Audi e Tron GT - Black"} style={styles.sheetText} />
      <Regular label={"Car Number : DFZ-1254"} />
      <CarInfo column />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: mvs(10),
  },
  image1: {
    width: 120,
    height: 70,
    resizeMode: "cover",
  },
  text2: {
    color: "#000314",
    fontSize: 14,
  },
  sheetText: {
    marginTop: 6,
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
});
