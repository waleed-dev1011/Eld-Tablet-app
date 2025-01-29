import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import MapView, { Marker, Circle, Polygon } from "react-native-maps";
import { HomeHeader } from "../../../components/molicules/home-header";
import { MyButton } from "../../../components/molicules";
import { mvs } from "../../../config/metrices";
import { colors } from "../../../config/colors";

const GeoFenceType = ({ navigation }) => {
  const initialRegion = {
    latitude: 33.620798,
    longitude: 73.066439,
    latitudeDelta: 0.027,
    longitudeDelta: 0.027,
  };
  const [selectedType, setSelectedType] = useState("circle");
  const [radius, setRadius] = useState(200);
  const [size, setSize] = useState(0.002);
  // const [vehiclePosition, setVehiclePosition] = useState({
  //   latitude: initialRegion.latitude,
  //   longitude: initialRegion.longitude,
  // });
  const handleAddPress = () => {
    navigation.navigate("AssignVehicle");
  };



  // useEffect(() => {
  //   // Simulate vehicle movement every 3 seconds
  //   const intervalId = setInterval(() => {
  //     setVehiclePosition((prevPosition) => {
  //       return {
  //         latitude: prevPosition.latitude + 0.001, // Change latitude
  //         longitude: prevPosition.longitude + 0.001, // Change longitude
  //       };
  //     });
  //   }, 3000); // 3 seconds interval

  //   return () => clearInterval(intervalId); // Clear interval on unmount
  // }, []);


  const rectangleCoords = [
    {
      latitude: initialRegion.latitude + size,
      longitude: initialRegion.longitude - size,
    },
    {
      latitude: initialRegion.latitude + size,
      longitude: initialRegion.longitude + size,
    },
    {
      latitude: initialRegion.latitude - size,
      longitude: initialRegion.longitude + size,
    },
    {
      latitude: initialRegion.latitude - size,
      longitude: initialRegion.longitude - size,
    },
  ];

  const increaseCircleSize = () => {
    setRadius((prevRadius) => prevRadius + 50);
  };

  const decreaseCircleSize = () => {
    if (radius > 50) {
      setRadius((prevRadius) => prevRadius - 50);
    }
  };

  const increaseRectangleSize = () => {
    setSize((prevSize) => prevSize + 0.001);
  };

  const decreaseRectangleSize = () => {
    if (size > 0.001) {
      setSize((prevSize) => prevSize - 0.001);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader back title={"Geofence Type"} noti />
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          scrollEnabled={false}
          zoomEnabled={false}
        >
          {/* <Marker coordinate={vehiclePosition} /> */}
          <Marker coordinate={initialRegion} />
          {selectedType === "circle" && (
            <Circle
              center={initialRegion}
              radius={radius}
              fillColor="rgba(0, 100, 255, 0.2)"
              strokeColor="rgba(0, 100, 255, 0.5)"
              strokeWidth={2}
            />
          )}

          {selectedType === "rectangle" && (
            <Polygon
              coordinates={rectangleCoords}
              fillColor="rgba(0, 100, 255, 0.2)"
              strokeColor="rgba(0, 100, 255, 0.5)"
              strokeWidth={2}
            />
          )}
        </MapView>
      </View>

      <View style={styles.bottomSheet}>
        <Text style={styles.instructionText}>
          Select and resize your preferred geofence type
        </Text>

        <View style={styles.typeContainer}>
          <TouchableOpacity
            onPress={() => setSelectedType("circle")}
            style={styles.typeOption}
          >
            <View
              style={[
                styles.circle,
                selectedType === "circle" && styles.selectedBorder,
              ]}
            />
            <Text
              style={[
                styles.typeText,
                selectedType === "circle" && styles.selectedText,
              ]}
            >
              Circle
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedType("rectangle")}
            style={styles.typeOption}
          >
            <View
              style={[
                styles.rectangle,
                selectedType === "rectangle" && styles.selectedBorder,
              ]}
            />
            <Text
              style={[
                styles.typeText,
                selectedType === "rectangle" && styles.selectedText,
              ]}
            >
              Rectangle
            </Text>
          </TouchableOpacity>
        </View>

        {selectedType === "circle" && (
          <View style={styles.resizeButtons}>
            <TouchableOpacity
              onPress={decreaseCircleSize}
              style={styles.resizeButton}
            >
              <Text style={styles.resizeButtonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={increaseCircleSize}
              style={styles.resizeButton}
            >
              <Text style={styles.resizeButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        )}

        {selectedType === "rectangle" && (
          <View style={styles.resizeButtons}>
            <TouchableOpacity
              onPress={decreaseRectangleSize}
              style={styles.resizeButton}
            >
              <Text style={styles.resizeButtonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={increaseRectangleSize}
              style={styles.resizeButton}
            >
              <Text style={styles.resizeButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        )}

        <MyButton title={"Next"} onPress={handleAddPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  bottomSheet: {
    backgroundColor: "#fff",
    padding: mvs(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  instructionText: {
    textAlign: "center",
    fontSize: mvs(16),
    color: "#666",
    marginBottom: mvs(14),
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: mvs(32),
    marginBottom: mvs(24),
  },
  typeOption: {
    alignItems: "center",
    gap: mvs(8),
  },
  circle: {
    width: mvs(40),
    height: mvs(40),
    borderRadius: mvs(24),
    borderWidth: mvs(2),
    borderColor: "transparent",
    backgroundColor: colors.grey,
  },
  rectangle: {
    width: mvs(40),
    height: mvs(40),
    borderWidth: mvs(2),
    borderColor: "transparent",
    backgroundColor: colors.grey,
  },
  selectedBorder: {
    borderColor: colors.primary,
  },
  typeText: {
    color: colors.black,
    fontSize: mvs(14),
  },
  selectedText: {
    color: colors.black,
  },
  resizeButtons: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // marginTop: mvs(10),
  },
  resizeButton: {
    backgroundColor: colors.primary,
    paddingVertical: mvs(4),
    paddingHorizontal: mvs(12),
    borderRadius: mvs(5),
    marginHorizontal: mvs(10),
    marginBottom: mvs(15),
  },
  resizeButtonText: {
    color: colors.white,
    fontSize: mvs(18),
  },
});

export default GeoFenceType;

// const geofence = {
//   latitude: 33.620798,
//   longitude: 73.066439,
//   radius: 200,  // in meters
// };

// const checkIfInsideGeofence = (vehicleLat, vehicleLon) => {
//   const distance = getDistanceFromLatLonInKm(
//     geofence.latitude,
//     geofence.longitude,
//     vehicleLat,
//     vehicleLon
//   );
//   if (distance > geofence.radius) {
//     sendNotification("The vehicle is out of the geofenced area!");
//   }
// };

// const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
//   const R = 6371; // Radius of the Earth in km
//   const dLat = deg2rad(lat2 - lat1);
//   const dLon = deg2rad(lon2 - lon1);
//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
//     Math.sin(dLon / 2) * Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   const distance = R * c; // Distance in km
//   return distance * 1000; // convert to meters
// };

// const deg2rad = (deg) => {
//   return deg * (Math.PI / 180);
// };
