import React from "react";
import { StyleSheet, View } from "react-native";
import { mvs } from "../../../config/metrices";
import { SmallButton } from "../SmallButton";
import { DriverInfo } from "./DriverInfo";
import { colors } from "../../../config/colors";

const ResposibleRideRequest = ({ handleAccept, onCancel }) => {
  return (
    <View style={styles.container}>
      <DriverInfo away />
      <View style={styles.buttonsContainer}>
        <SmallButton title="Cancel" onPress={onCancel} />
        <SmallButton title="Accept" onPress={handleAccept} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: 17,
    marginTop: 10,
    paddingHorizontal: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginVertical: mvs(10),
    gap: 15,
  },
});

export default ResposibleRideRequest;
