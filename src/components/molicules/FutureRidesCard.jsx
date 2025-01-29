import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Schedule, Stepper } from "../../assets/images";
import { MyButton2 } from "./MyButton2";
import { DriverInfo } from "./DriverRequest";
import { mvs } from "../../config/metrices";

const FutureRideCard = ({ handlePress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.innerContainer}>
        <MyButton2
          icon={Schedule}
          title={"Schedule Ride"}
          style={styles.rideButton}
        />
        <DriverInfo />
        <View style={styles.rideInfoContainer}>
          <Image source={Stepper} style={styles.stepperImage} />
          <View style={styles.rideInfoTextContainer}>
            <Text style={[styles.infoText, styles.secondaryText]}>
              Pick-up - 02/02/2024, 12:03 am
            </Text>
            <Text style={styles.infoText}>Near RUMF7314, 7314UF-45634</Text>
            <View style={styles.dropInfo}>
              <Text style={[styles.infoText, styles.secondaryText]}>
                Drop off - 03/02/2024, 01:03 pm
              </Text>
              <Text style={styles.infoText}>Home</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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

export default FutureRideCard;
