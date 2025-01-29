import React, { useState, useMemo } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Animated,
  TouchableOpacity,
  Modal,
  Text,
} from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";
import Regular from "../../../typography/regular-text";
import Bold from "../../../typography/bold-text";
import Medium from "../../../typography/medium-text";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";
import {
  StartMapSvg,
  EndMapSvg,
  BackIcon,
  CalenderSvg,
} from "../../../assets/icons/user";
import Calendar from "./../../../components/molicules/calendar/Calendarlogic";
import { useQuery } from "@apollo/client";
import { GET_GSMDATA } from "../../../services/query/gsmQuery";
import styles from "./styles";
import { stops } from "../../../config/dummyData"; // Dummy data
import { useModalAnimation } from "../../../components/molicules/useModalAnimation";

const TrackHistory = ({ navigation }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const { modalHeight, panResponder } = useModalAnimation();

  const phoneNumber = "938476";

  const { data, loading, error } = useQuery(GET_GSMDATA, {
    variables: { phoneNumber },
    context: { clientName: "server" },
  });

  console.log("data------", data);

  const handleCalendarClose = () => {
    setShowCalendar(false);
  };

  const handleDateChange = (date, type) => {
    if (type === "START_DATE") {
      setSelectedStartDate(date);
    } else if (type === "END_DATE") {
      setSelectedEndDate(date);
    }
  };

  const resetDates = () => {
    setSelectedStartDate(null);
    setSelectedEndDate(null);
  };

  // Handle loading and error states
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading GSM Data...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching GSM Data. Please try again later.</Text>
      </View>
    );
  }

  const gsmLocations = data?.getGSMData || [];
  const markerCoordinates = useMemo(
    () =>
      gsmLocations.map((location) => ({
        latitude: parseFloat(location.latitude),
        longitude: parseFloat(location.longitude),
      })),
    [gsmLocations]
  );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.613496,
          longitude: 73.066439,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markerCoordinates.map((coord, index) => (
          <Marker
            key={index}
            coordinate={coord}
            title={`Location ${index + 1}`}
          >
            {index === 0 ? (
              <StartMapSvg />
            ) : index === markerCoordinates.length - 1 ? (
              <EndMapSvg />
            ) : (
              <View style={styles.marker} />
            )}
          </Marker>
        ))}

        {markerCoordinates.length > 1 && (
          <Polyline
            coordinates={markerCoordinates}
            strokeColor={colors.blue}
            strokeWidth={4}
          />
        )}
      </MapView>

      <Modal
        visible={showCalendar}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCalendarClose}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={handleCalendarClose}
        >
          <View style={styles.calendarModalContent}>
            <Calendar
              selectedStartDate={selectedStartDate}
              selectedEndDate={selectedEndDate}
              onDateChange={handleDateChange}
              resetValues={resetDates}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      <Animated.View
        style={[styles.modalContent, { height: modalHeight }]}
        {...panResponder.panHandlers}
      >
        <ScrollView>
          <View style={styles.lineContainer}>
            <View style={styles.line}></View>
          </View>

          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => setShowCalendar(true)}
              style={styles.headerTouchable}
            >
              <Medium label="Today" style={styles.dateText} />
              <CalenderSvg style={{ marginLeft: mvs(10) }} />
            </TouchableOpacity>
          </View>

          {stops.map((stop, index) => (
            <View style={styles.stopContainer} key={index}>
              <View style={styles.iconContainer}>{stop.icon}</View>
              <View style={styles.details}>
                <Bold label={stop.name} style={styles.stopName} />
                <Medium label={stop.address} style={styles.stopAddress} />
              </View>
              <Regular label={stop.time} style={styles.stopTime} />
            </View>
          ))}
        </ScrollView>
      </Animated.View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
        accessibilityLabel="Go back"
      >
        <BackIcon />
      </TouchableOpacity>
    </View>
  );
};

export default TrackHistory;
