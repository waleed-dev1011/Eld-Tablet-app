import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { mvs } from "../../config/metrices";
import { Car2 } from "../../assets/images";

export default function CarDetail() {
  return (
    <View style={styles.container}>
      <Image source={Car2} style={styles?.image1} />
      <Text style={styles.sheetText}>{"Standard Car"}</Text>
      <Text style={styles.text2}>- initial 10 miles : $25</Text>
      <Text style={styles.text2}>- additional miles: $2 per mile</Text>
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
    marginTop: 6,
  },
  sheetText: {
    marginTop: 6,
    fontSize: 17,
    color: "#000",
    fontWeight: "600",
  },
});
