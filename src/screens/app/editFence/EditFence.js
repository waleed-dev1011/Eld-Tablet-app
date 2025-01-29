import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { HomeHeader } from "../../../components/molicules/home-header";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";
import { Truck } from "../../../assets/images";
import Bold from "../../../typography/bold-text";
import { RemoveSvg } from "../../../assets/icons/user";
import { MyButton } from "../../../components/molicules";
import Regular from "../../../typography/regular-text";

const EditFence = ({ route, navigation }) => {
  const { warehouseId } = route.params;
  const [fenceName, setFenceName] = useState("");
  const [geofenceAddress, setGeofenceAddress] = useState("");
  const [assignedVehicles, setAssignedVehicles] = useState([
    { id: "AMG-6752", avatar: Truck },
    { id: "HGY-0098", avatar: Truck },
    { id: "SSO-0987", avatar: Truck },
  ]);
  const [toggledVehicles, setToggledVehicles] = useState(() => {
    const initialState = {};
    assignedVehicles.forEach((vehicle) => {
      initialState[vehicle.id] = true;
    });
    return initialState;
  });
  const assignVehcileScreen = () => {
    navigation.navigate("AssignVehicle", { vehicles: assignedVehicles });
  };
  const [isChanged, setIsChanged] = useState(false);

  const handleNextPress = () => {
    navigation.navigate("GeoFenceScreen");
  };

  const handleInputChange = (setter) => (value) => {
    setIsChanged(true);
    setter(value);
  };

  const toggleVehicle = (vehicleId) => {
    setIsChanged(true);
    setToggledVehicles((prevState) => ({
      ...prevState,
      [vehicleId]: !prevState[vehicleId],
    }));
  };

  const removeVehicle = (vehicleId) => {
    setIsChanged(true);
    setAssignedVehicles((prevVehicles) =>
      prevVehicles.filter((vehicle) => vehicle.id !== vehicleId)
    );
    setToggledVehicles((prevState) => {
      const newState = { ...prevState };
      delete newState[vehicleId];
      return newState;
    });
  };

  const VehicleItem = ({ vehicle }) => {
    const isToggled = toggledVehicles[vehicle.id] || false;

  
    return (
      <View style={styles.vehicleItem}>
        <View style={styles.vehicleInfo}>
          <Image source={vehicle.avatar} style={styles.vehicleImage} />
          <Bold style={styles.vehicleId}>{vehicle.id}</Bold>
        </View>
        <View style={styles.vehicleActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isToggled ? colors.primary : colors.primary}
              onValueChange={() => toggleVehicle(vehicle.id)}
              value={isToggled}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeVehicle(vehicle.id)}>
            <RemoveSvg />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <HomeHeader back title={`Warehouse ${warehouseId}`} noti />
      <View style={styles.content}>
      <Bold style={styles.label}>Fence Name</Bold>
      <TextInput
        placeholder="Fence Name"
        style={styles.input}
        value={fenceName}
        onChangeText={handleInputChange(setFenceName)}
        placeholderTextColor={colors.black}
      />
 <Bold style={styles.label}>Geofence Address</Bold>
      <TextInput
        placeholder="Geofence Address"
        style={styles.input}
        value={geofenceAddress}
        onChangeText={handleInputChange(setGeofenceAddress)}
        placeholderTextColor={colors.black}
      />

      <View style={styles.assignedVehiclesContainer}>
        <View style={styles.assignedVehiclesHeader}>
          <Bold style={styles.assignedVehiclesTitle}>Assigned Vehicles</Bold>
          <TouchableOpacity style={styles.clearButton} onPress={assignVehcileScreen}>
            <Regular style={styles.clearText}>+</Regular>
          </TouchableOpacity>
        </View>

        {assignedVehicles.map((vehicle) => (
          <VehicleItem key={vehicle.id} vehicle={vehicle} />
        ))}

        <View style={styles.spacer} />
        <MyButton
          title={"Save"}
          onPress={handleNextPress}
          color={isChanged ? colors.primary : colors.grey}
        />
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    backgroundColor: colors.grey + 40,
    padding: mvs(15),
    borderRadius: mvs(10),
    borderWidth: 1,
    borderColor: colors.grey,

  },
  assignedVehiclesContainer: {
    marginTop: mvs(20),
  },
  assignedVehiclesHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  assignedVehiclesTitle: {
    fontSize: mvs(16),
    color: colors.black,
  },
  vehicleItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: mvs(10),
    borderBottomWidth: 1,
    borderBottomColor: colors.grey + 40,
    marginTop: mvs(10),
  },
  vehicleInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  vehicleImage: {
    width: mvs(40),
    height: mvs(40),
    borderRadius: mvs(20),
    marginRight: mvs(10),
  },
  vehicleId: {
    fontSize: mvs(14),
    color: colors.black,
  },
  vehicleActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButton: {
    marginRight: mvs(15),
  },
  clearButton: {
    width: mvs(20),
    height: mvs(20),
    borderRadius: mvs(12),
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: mvs(10),
  },
  clearText: {
    color: colors.white,
    fontSize: mvs(14),
    fontWeight: "bold",
    textAlign: "center",
  },

  spacer: {
    marginVertical: mvs(10),
  },
  label:{

    color:colors.grey,

    padding:mvs(7)
  },
  content: {
    padding: mvs(16), 
    // flex: 1,
  },
});

export default EditFence;
