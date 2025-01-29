import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MyButton2 } from "./MyButton2";
import { Stepper } from "../../assets/images";

const SelectedRideInfo = ({ title = "default", dateTime }) => {
  console.log("aaaaaa", dateTime);
  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <Image source={Stepper} style={styles.image2} />
      <View style={{ width: "90%", paddingLeft: 10 }}>
        <Text
          style={[styles?.text1, { color: "#737480", marginBottom: 3 }]}
        >{`Pick up${dateTime ? " 2/02/2024, 12:03pm" : ""}`}</Text>
        <Text style={[styles?.text1]}>Near RUMF7314, 7314UF-45634</Text>
        <View style={styles?.dropView}>
          <Text style={[styles?.text1, { color: "#737480" }]}>{`Drop off${
            dateTime ? " 2/02/2024, 12:03pm" : ""
          }`}</Text>
          <Text style={styles?.text1}>Home</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: "black",
    fontSize: 15,
    fontWeight: "400",
  },
  image2: {
    width: 25,
    height: 100,
    resizeMode: "contain",
  },
  dropView: {
    marginTop: 12,
    paddingTop: 8,
    // borderTopColor: "grey",
    // borderTopWidth: 1,
    width: "100%",
    gap: 3,
  },
});

export { SelectedRideInfo };
