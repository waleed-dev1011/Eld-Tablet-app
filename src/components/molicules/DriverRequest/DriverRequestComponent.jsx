import React from "react";
import { View, StyleSheet } from "react-native";
import { DriverInfo } from "./DriverInfo";
import { CarInfo } from "./CarInfo";
import { SmallButton } from "../SmallButton";
import { mvs } from "../../../config/metrices";

const DriverRequestComponent = ({ handleAccept, onCancel }) => {
  return (
    <View style={styles.container}>
      <DriverInfo car />
      <CarInfo />
      <View style={styles.buttonsContainer}>
        <SmallButton title="Cancel" onPress={onCancel} />
        <SmallButton title="Accept" onPress={handleAccept} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: mvs(15),
    paddingVertical: mvs(10),
    marginTop: mvs(10),
    paddingHorizontal: mvs(10),
  },
  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    gap: mvs(15),
  },
});

export { DriverRequestComponent };
