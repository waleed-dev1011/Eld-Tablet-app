import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { RidesButton } from "../../../components/molicules";
import CancelledRideCard from "../../../components/molicules/CancelledRidesCard";
import CompletedRideCard from "../../../components/molicules/CompletedRideCard";
import MainHeader from "../../../components/molicules/MainHeader";

const HistoryScreen = ({ navigation }) => {
  const [active, setActive] = useState("Running");
  return (
    <ScrollView
      style={styles.cont}
      contentContainerStyle={{ paddingBottom: 75 }}
    >
      <MainHeader
        title="History"
        handleNotification={() => navigation.navigate("NotificationScreen")}
      />
      <RidesButton
        title1="Cancelled Rides"
        title2="Completed Rides"
        {...{ active, setActive }}
      />
      <View style={{ gap: 12, marginTop: 20 }}>
        {active === "Running"
          ? [1, 3, 3, 3].map((item, index) => <CancelledRideCard key={index} />)
          : [1, 1, 1].map((item, index) => <CompletedRideCard key={index} />)}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cont: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
  },
  auth: {
    alignItems: "center",
    paddingVertical: 6,
  },
  image: {
    width: 25,
    height: 25,
  },
  text2: {
    color: "#000",
    fontWeight: "400",
    fontSize: 16,
  },
  view1: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingTop: 5,
  },
});

export default HistoryScreen;
