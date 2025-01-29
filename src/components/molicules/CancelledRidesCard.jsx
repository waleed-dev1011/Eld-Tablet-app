import React from "react";
import { StyleSheet, View } from "react-native";
import { Canceled } from "../../assets/images";
import { colors } from "../../config/colors";
import { mvs } from "../../config/metrices";
import Bold from "../../typography/bold-text";
import Line from "../atoms/line";
import { DriverInfo } from "./DriverRequest";
import LocationInfoCard from "./LocationInfoCard";
import { MyButton2 } from "./MyButton2";

const CancelledRideCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <MyButton2
          icon={Canceled}
          title={"Cancelled By Driver"}
          style={styles.rideButton}
        />
        <DriverInfo />
        <Line bgColor={colors.grey} height={0.5} marginVertical={10} />
        <Bold label={"03/02/2024, 11:29 am"} />
        <LocationInfoCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: mvs(15),
    paddingHorizontal: mvs(10),
    backgroundColor: "#C2C1CD33",
    borderRadius: mvs(32),
  },
  innerContainer: {
    paddingHorizontal: mvs(10),
    paddingBottom: mvs(20),
  },
  rideButton: {
    marginTop: mvs(10),
    backgroundColor: "#AE00211A",
    borderColor: "#9A0B09",
  },
  rideInfoContainer: {
    flexDirection: "row",
    marginTop: mvs(10),
  },
  rideInfoTextContainer: {
    width: "90%",
    paddingLeft: mvs(10),
  },
  dropInfo: {
    marginTop: mvs(12),
    paddingTop: mvs(8),
  },
  infoText: {
    fontSize: mvs(16),
    fontWeight: "400",
    color: "black",
  },
  secondaryText: {
    fontSize: mvs(12),
    color: "#737480",
    marginBottom: mvs(3),
  },
  stepperImage: {
    width: mvs(25),
    height: mvs(100),
    resizeMode: "contain",
  },
});

export default CancelledRideCard;
