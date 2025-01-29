import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Canceled, Instant, Schedule, Stepper } from "../../../assets/images";
import { MyButton2 } from "../MyButton2";
import DriverInfo from "../driver-info";
import { mvs } from "../../../config/metrices";

const Rides = ({ title = "default", active, item }) => {
  const navigation = useNavigation();
  const selectedRideOption = useRef(2);
  const Container = title === "Rides" ? TouchableOpacity : View;

  const handlePress = () => {
    if (active === 1) {
      navigation.navigate("RideStart");
    } else {
      navigation.navigate("BookingDetails");
    }
  };

  return (
    <Container
      style={styles.container}
      onPress={title === "Rides" ? handlePress : undefined}
    >
      <View style={styles.innerContainer}>
        {title === "Rides" && (
          <View style={styles.rideButtonContainer}>
            <MyButton2
              icon={active === 1 ? Instant : Schedule}
              title={active === 1 ? "Instant Ride" : item?.btnText}
              style={[
                styles.rideButton,
                active === 1 ? styles.instantRide : styles.scheduledRide,
              ]}
            />
          </View>
        )}

        {title === "History" && (
          <View style={styles.historyButtonContainer}>
            {active === 1 && (
              <MyButton2
                icon={Canceled}
                title="Cancelled Ride"
                style={[styles.rideButton, styles.cancelledRide]}
              />
            )}
          </View>
        )}

        <View style={styles.infoContainer}>
          {title === "default" && (
            <View style={styles.defaultRideContainer}>
              <MyButton2
                icon={Schedule}
                title="Schedule Ride"
                style={[styles.rideButton, styles.scheduledRide]}
              />
            </View>
          )}
          {title === "active" && (
            <Text style={styles.dateTimeText}>27 July 2024, 11:28 AM</Text>
          )}
        </View>

        {title === "default" && <DriverInfo n={3} />}

        <View
          style={[
            styles.pickupDropContainer,
            title === "History" && active === 2 && styles.historyBorder,
          ]}
        >
          <Image source={Stepper} style={styles.stepperImage} />
          <View style={styles.pickupDropInfo}>
            <Text style={[styles.infoText, styles.grayText]}>
              {`Pick-up - ${item?.endTime}`}
            </Text>
            <Text style={styles.infoText}>{item?.endLocation}</Text>
            <View style={styles.dropoffContainer}>
              <Text style={[styles.infoText, styles.grayText]}>
                {`Drop-off - ${item?.startTime}`}
              </Text>
              <Text style={styles.infoText}>{item?.startLocation}</Text>
            </View>
          </View>
        </View>

        {title === "History" && active === 2 && (
          <View style={styles.paymentContainer}>
            {/* Add Payment Component Here */}
          </View>
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginHorizontal: mvs(15),
    paddingHorizontal: mvs(10),
    backgroundColor: "#C2C1CD33",
    borderRadius: mvs(32),
  },
  innerContainer: {
    paddingHorizontal: mvs(10),
    paddingBottom: mvs(20),
  },
  rideButtonContainer: {
    paddingTop: mvs(10),
  },
  historyButtonContainer: {
    paddingTop: mvs(10),
    gap: mvs(13),
    paddingBottom: mvs(15),
    borderBottomColor: "grey",
    borderBottomWidth: mvs(0.4),
  },
  rideButton: {
    backgroundColor: "#AE00211A",
    borderColor: "#9A0B09",
  },
  instantRide: {
    backgroundColor: "#FFB6361A",
    borderColor: "#FFBF00",
  },
  scheduledRide: {
    backgroundColor: "#AE00211A",
    borderColor: "#9A0B09",
  },
  cancelledRide: {
    backgroundColor: "#AE00211A",
    borderColor: "#9A0B09",
  },
  infoContainer: {
    marginTop: mvs(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  defaultRideContainer: {
    paddingVertical: mvs(10),
  },
  dateTimeText: {
    color: "black",
    fontSize: mvs(15),
    fontWeight: "400",
  },
  pickupDropContainer: {
    flexDirection: "row",
    marginTop: mvs(10),
  },
  stepperImage: {
    width: mvs(25),
    height: mvs(100),
    resizeMode: "contain",
  },
  pickupDropInfo: {
    width: "90%",
    paddingLeft: mvs(10),
  },
  dropoffContainer: {
    marginTop: mvs(12),
    paddingTop: mvs(8),
    gap: mvs(3),
  },
  infoText: {
    color: "black",
    fontSize: mvs(15),
    fontWeight: "400",
  },
  grayText: {
    color: "#737480",
    marginBottom: mvs(3),
  },
  historyBorder: {
    borderBottomColor: "grey",
    borderBottomWidth: mvs(0.4),
    paddingBottom: mvs(15),
  },
  paymentContainer: {
    marginTop: mvs(10),
  },
});

export default Rides;
