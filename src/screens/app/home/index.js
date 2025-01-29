import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  Text,
  Alert,
  Platform,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useQuery } from "@apollo/client";
import { GET_VEHICLES } from "../../../services/query/vehicleQuery";
import { GET_GSMDATA } from "../../../services/query/gsmQuery"; // Import GSM query
import { Truck } from "../../../assets/images";
import { DownArrowSvg, UpArrowSvg } from "../../../assets/icons/user";
import { HomeHeader } from "../../../components/molicules/home-header";
import { colors } from "../../../config/colors";
import Bold from "../../../typography/bold-text";
import Regular from "../../../typography/regular-text";
import styles from "./styles";

const HomeScreen = ({ navigation }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  const {
    data: vehicleData,
    loading: vehicleLoading,
    error: vehicleError,
  } = useQuery(GET_VEHICLES);

  // const phoneNumber = "938476";
  // const {
  //   data: gsmData,
  //   loading: gsmLoading,
  //   error: gsmError,
  // } = useQuery(GET_GSMDATA, {
  //   variables: { phoneNumber },
  //   context: { clientName: "server" },
  // });

  // // Request Location Permissions
  // useEffect(() => {
  //   const requestLocationPermission = async () => {
  //     try {
  //       if (Platform.OS === "android") {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //           {
  //             title: "Location Permission Required",
  //             message:
  //               "This app needs access to your location to display vehicles on the map.",
  //             buttonNeutral: "Ask Me Later",
  //             buttonNegative: "Cancel",
  //             buttonPositive: "OK",
  //           }
  //         );

  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //           setHasPermission(true);
  //           console.log("Location permission granted");
  //         } else {
  //           setHasPermission(false);
  //           Alert.alert(
  //             "Permission Denied",
  //             "Location access is required for this feature."
  //           );
  //         }
  //       } else {
  //         // iOS permissions handled automatically with library
  //         setHasPermission(true);
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   };

  //   requestLocationPermission();
  // }, []);

  // if (!hasPermission) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Location permission is required to use this feature.</Text>
  //     </View>
  //   );
  // }

  // if (vehicleLoading || gsmLoading) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Loading data...</Text>
  //     </View>
  //   );
  // }

  // if (vehicleError || gsmError) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>
  //         Error fetching data: {vehicleError?.message || gsmError?.message}
  //       </Text>
  //     </View>
  //   );
  // }
  if (vehicleError) {
    return (
      <View style={styles.container}>
        <Text>
          Error fetching data: {vehicleError?.message}
        </Text>
      </View>
    );
  }

  const vehicles = vehicleData?.getVehicles || [];
  // const gsmLocations = gsmData?.getGSMData || [];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.620798,
          longitude: 73.066439,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {vehicles.map((vehicle, index) => (
          <Marker
            key={vehicle.id || index}
            coordinate={{
              latitude: parseFloat(vehicle.latitude),
              longitude: parseFloat(vehicle.longitude),
            }}
            title={vehicle.registrationNumber}
          >
            <View style={styles.marker}>
              <Image source={Truck} style={styles.markerIcon} />
              <Regular
                label={vehicle.registrationNumber}
                style={styles.markerText}
              />
            </View>
          </Marker>
        ))}

        {/* {gsmLocations.map((location, index) => ( */}
    
          <Marker
            // key={index}
            coordinate={{
              // latitude: parseFloat(location.latitude),
              // longitude: parseFloat(location.longitude),
              latitude: 33.620798,
              longitude: 73.066439,
            }}
            // title={`Distance: ${location.distance || 0} km`}
          >
            <View style={styles.marker}>
              {/* <Text style={styles.markerText}>{`Phone: ${phoneNumber}`}</Text> */}
            </View>
          </Marker>
        {/* ))} */}
      </MapView>

      <View style={styles.bottomSheet}>
        <TouchableOpacity>
          <View style={styles.header}>
            <Bold label="Vehicles" style={styles.headerText} />
            <TouchableOpacity
              onPress={() => setIsExpanded(!isExpanded)}
              style={{
                backgroundColor: colors.primary,
                position: "absolute",
                top: -30,
                right: 10,
                padding: 4,
                borderRadius: 30,
              }}
            >
              {isExpanded ? <UpArrowSvg /> : <DownArrowSvg />}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {isExpanded && (
          <FlatList
            columnWrapperStyle={{ gap: 20 }}
            data={vehicles}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.vehicleItem} onPress={()=> navigation.navigate("TrackScreen")}>
                <Image source={Truck} style={styles.vehicleImage} />
                <Regular
                  label={item.registrationNumber}
                  style={styles.vehicleText}
                />
              </TouchableOpacity>
            )}
          />
        )}
      </View>

      <View style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
        <HomeHeader title="Home" />
      </View>
    </View>
  );
};

export default HomeScreen;
