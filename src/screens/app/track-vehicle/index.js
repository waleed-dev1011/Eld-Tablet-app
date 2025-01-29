import React, { useState } from "react";
import {
  View,
  Animated,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";
import Regular from "../../../typography/regular-text";
import Bold from "../../../typography/bold-text";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";
import styles from "./styles";
import { useModalAnimation } from "../../../components/molicules/useModalAnimation";
import { BackIconIconSvg, CopySvg } from "../../../assets/icons/user";
import Line from "../../../components/atoms/line";
import { GET_GSMDATA } from "../../../services/query/gsmQuery";
import { useQuery } from "@apollo/client";

const TrackHistory = ({ navigation }) => {
  const phoneNumber = "938476";
  const { data, loading, error } = useQuery(GET_GSMDATA, {
    variables: { phoneNumber },
    context: { clientName: "server" },
  });

  const { modalHeight, panResponder } = useModalAnimation();
  if (loading) {
    return (
      <View style={styles.container}>
        <Regular label="Loading data..." style={styles.loadingText} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Regular
          label="Error fetching data. Please try again later."
          style={styles.errorText}
        />
      </View>
    );
  }

  // Process data from the API
  const gsmData = data?.getGSMData || [];
  const markerCoordinates = gsmData.map((location) => ({
    latitude: parseFloat(location.latitude),
    longitude: parseFloat(location.longitude),
  }));

  const copyToClipboard = () => {
    if (markerCoordinates.length > 0) {
      const { latitude, longitude } = markerCoordinates[0];
      const locationText = `Lat: ${latitude}, Lon: ${longitude}`;

      Alert.alert("Location Copied", locationText);
    } else {
      Alert.alert("No Location Data", "No location available to copy.");
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: markerCoordinates[0]?.latitude || 33.613496,
          longitude: markerCoordinates[0]?.longitude || 73.066439,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markerCoordinates.map((coord, index) => (
          <Marker
            key={index}
            coordinate={coord}
            title={`Location ${index + 1}`}
            description={`Lat: ${coord.latitude}, Lon: ${coord.longitude}`}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        ))}

        {markerCoordinates.length > 1 && (
          <Polyline
            coordinates={markerCoordinates}
            strokeColor={colors.blue}
            strokeWidth={4}
          />
        )}
      </MapView>

      <Animated.View
        style={[styles.modalContent, { height: modalHeight }]}
        {...panResponder.panHandlers}
      >
        <ScrollView>
          <View style={styles.lineContainer}>
            <View style={styles.line}></View>
          </View>

          <View style={styles.infoContainer}>
            <View style={[styles.row, styles.vehicleInfoRow]}>
              <Bold label={phoneNumber} style={styles.vehicleNumber} />
              <Regular
                label={`Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()}`}
                style={styles.date}
              />
            </View>

            <Regular label="Current Location" style={styles.sectionTitle} />
            <View style={styles.row}>
              <Regular
                label={
                  markerCoordinates[0]
                    ? `Lat: ${markerCoordinates[0].latitude}, Lon: ${markerCoordinates[0].longitude}`
                    : "No Data"
                }
                style={styles.locationText}
              />
              <TouchableOpacity onPress={copyToClipboard}>
                <CopySvg />
              </TouchableOpacity>
            </View>

            <Line />

            <Regular label="Fuel Efficiency" style={styles.sectionTitle} />
            <Regular label="Data not available" style={styles.efficiencyText} />
          </View>
        </ScrollView>
      </Animated.View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <BackIconIconSvg />
      </TouchableOpacity>
    </View>
  );
};

export default TrackHistory;


// const getLocation = async () => {
//   navigator.geolocation.getCurrentPosition(
//     position => {
//       const { latitude, longitude } = position.coords;
//       console.log("Current Location: ", latitude, longitude);
//     },
//     error => console.log(error)
//   );
// };
