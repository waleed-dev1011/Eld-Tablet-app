import React, { useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DriverInfo } from "./DriverRequest";
import { MyButton2 } from "./MyButton2";
import { PaymentComponent } from "./PaymentComponent";
import { Canceled, Instant, Schedule, Stepper } from "../../assets/images";

const Rides = ({ title = "default", active }) => {
  const navigation = useNavigation();
  const selectedRideOption = useRef(2);

  const handlePress = () => {
    const route = active === 1 ? "Screen9" : "Screen12";
    navigation.navigate(route, { selectedRide: selectedRideOption });
  };

  const renderButton = () => {
    if (title === "Rides") {
      const isInstant = active === 1;
      return (
        <MyButton2
          icon={isInstant ? Instant : Schedule}
          title={isInstant ? "Instant Ride" : "Schedule Ride"}
          style={[
            styles.rideButton,
            {
              backgroundColor: isInstant ? "#FFB6361A" : "#AE00211A",
              borderColor: isInstant ? "#FFBF00" : "#9A0B09",
            },
          ]}
        />
      );
    }

    if (title === "History" && active === 1) {
      return (
        <MyButton2
          icon={Canceled}
          title="Cancelled Ride"
          style={[
            styles.historyButton,
            {
              backgroundColor: "#AE00211A",
              borderColor: "#9A0B09",
            },
          ]}
        />
      );
    }

    if (title === "default") {
      return (
        <MyButton2
          icon={Schedule}
          title="Schedule Ride"
          style={styles.defaultButton}
        />
      );
    }
    return null;
  };

  const renderRideInfo = () => (
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
  );

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={title === "Rides" ? handlePress : undefined}
      activeOpacity={title === "Rides" ? 0.8 : 1}
    >
      <View style={styles.innerContainer}>
        {renderButton()}
        {title === "History" && <DriverInfo n={3} />}
        {renderRideInfo()}
        <PaymentComponent />
        {title === "History" && active === 2 && <PaymentComponent />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    paddingHorizontal: 10,
    backgroundColor: "#C2C1CD33",
    borderRadius: 32,
  },
  innerContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  rideButton: {
    marginTop: 10,
  },
  historyButton: {
    marginBottom: 15,
  },
  defaultButton: {
    marginVertical: 10,
    backgroundColor: "#AE00211A",
    borderColor: "#9A0B09",
  },
  rideInfoContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  rideInfoTextContainer: {
    width: "90%",
    paddingLeft: 10,
  },
  dropInfo: {
    marginTop: 12,
    paddingTop: 8,
  },
  infoText: {
    fontSize: 15,
    fontWeight: "400",
    color: "black",
  },
  secondaryText: {
    color: "#737480",
    marginBottom: 3,
  },
  stepperImage: {
    width: 25,
    height: 100,
    resizeMode: "contain",
  },
});

export { Rides };
