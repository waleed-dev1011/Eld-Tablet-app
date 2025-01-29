import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Instant, Stepper } from "../../assets/images";
import { MyButton2 } from "./MyButton2";
import Line from "../atoms/line";
import { colors } from "../../config/colors";
import { mvs } from "../../config/metrices";
import Bold from "../../typography/bold-text";

const RunningRidesCard = ({ handlePress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.innerContainer}>
        <MyButton2
          icon={Instant}
          title={"Instant Ride"}
          style={styles.rideButton}
        />
        <Bold label={"03/02/2024, 11:29 am"} style={styles.dateTimeText} />
        <View style={styles.rideInfoContainer}>
          <Image source={Stepper} style={styles.stepperImage} />
          <View style={styles.rideInfoTextContainer}>
            <Text style={styles.secondaryText}>Pick-up</Text>
            <Text style={styles.infoText}>Near RUMF7314, 7314UF-45634</Text>
            <Line marginTop={mvs(10)} bgColor={colors.grey} />
            <View style={styles.dropInfo}>
              <Text style={styles.secondaryText}>Drop off</Text>
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
    marginHorizontal: mvs(24),
    paddingHorizontal: mvs(15),
    paddingTop: mvs(10),
    backgroundColor: colors.gray,
    borderRadius: mvs(32),
  },
  innerContainer: {
    paddingHorizontal: mvs(10),
    paddingBottom: mvs(20),
  },
  rideButton: {
    marginTop: mvs(10),
    backgroundColor: "#FFB6361A",
    borderColor: "#FFBF00",
  },
  dateTimeText: {
    marginTop: mvs(19),
  },
  rideInfoContainer: {
    flexDirection: "row",
    marginTop: mvs(10),
  },
  rideInfoTextContainer: {
    flex: 1,
    paddingLeft: mvs(10),
  },
  dropInfo: {
    marginTop: mvs(12),
  },
  infoText: {
    fontSize: mvs(15),
    fontWeight: "400",
    color: "black",
  },
  secondaryText: {
    color: "#737480",
    marginBottom: mvs(3),
  },
  stepperImage: {
    width: mvs(25),
    height: mvs(130),
    resizeMode: "contain",
  },
});

export { RunningRidesCard };
