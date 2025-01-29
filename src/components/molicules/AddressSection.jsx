import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Close, Plus, SelectOnMap } from "../../assets/images";
import CustomTextInput from "../carts/customTextInput";

const AddressSection = ({ second }) => {
  const [wayPoints, setWayPoints] = useState([]); // Manage waypoints

  const addWayPoint = () => {
    setWayPoints([...wayPoints, { id: wayPoints.length + 1, value: "" }]);
  };

  const delWayPoint = (id) => {
    setWayPoints(wayPoints?.filter((wayPoint) => wayPoint.id !== id)); // Remove the selected waypoint
  };

  const updateWayPoint = (id, text) => {
    const updatedWayPoints = wayPoints.map((point) =>
      point.id === id ? { ...point, value: text } : point
    );
    setWayPoints(updatedWayPoints);
  };

  return (
    <>
      <CustomTextInput
        placeholder="Pickup"
        second={second}
        containerStyle={styles.input}
      />

      {wayPoints.map((wayPoint) => (
        <CustomTextInput
          rightIcon={
            <TouchableOpacity onPress={() => delWayPoint(wayPoint.id)}>
              <Image source={Close} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
          }
          containerStyle={styles.input}
          key={wayPoint.id}
          placeholder={`Waypoint ${wayPoint.id}`}
          value={wayPoint.value}
          onChangeText={(text) => updateWayPoint(wayPoint.id, text)}
        />
      ))}

      <TouchableOpacity
        style={styles.lineContainer}
        disabled={false}
        onPress={addWayPoint}
      >
        <View style={styles.line} />
        <Image source={Plus} style={styles.lineImage} />
      </TouchableOpacity>

      <CustomTextInput placeholder="Dropoff" containerStyle={styles.input} />

      <TouchableOpacity style={styles.view1}>
        <Image source={SelectOnMap} style={styles.image2} />
        <Text style={styles.text1}>Select on map</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    paddingVertical: 0,
    marginTop: 0,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -10,
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "grey",
  },
  lineImage: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: -10,
    // borderBottomColor: "grey",
    // borderBottomWidth: 1,
    paddingBottom: 15,
  },
  text1: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  image2: {
    width: 25,
    height: 25,
  },
});

export default AddressSection;
