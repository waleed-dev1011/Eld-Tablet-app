// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet,
//   TextInput,
//   Text,
//   TouchableOpacity,
//   Alert,
//   FlatList,
// } from "react-native";
// import { HomeHeader } from "../../../components/molicules/home-header";
// import { colors } from "../../../config/colors";
// import { mvs } from "../../../config/metrices";
// import { useMutation, useQuery } from "@apollo/client";
// import { UPDATE_DEVICE_MUTATION } from "../../../services/mutation/updateDeviceMutation";
// import { GET_VEHICLES } from "../../../services/query/vehicleQuery";
// import { DownArrowSvg, UpArrowSvg } from "../../../assets/icons/user";
// import Bold from "../../../typography/bold-text";

// const EditDevice = ({ route, navigation }) => {
//   const { device } = route.params;

//   const [deviceName, setDeviceName] = useState(device.name);
//   const [vehicleNumber, setVehicleNumber] = useState(
//     device?.vehicle?.registrationNumber || ""
//   );
//   const [selectedVehicle, setSelectedVehicle] = useState(
//     device?.vehicle || null
//   );
//   const [selectedStatus, setSelectedStatus] = useState(device?.status || false);
//   const [isVehicleDropdownExpanded, setIsVehicleDropdownExpanded] =
//     useState(false);
//   const [isStatusDropdownExpanded, setIsStatusDropdownExpanded] =
//     useState(false);

//   const { data: vehiclesData } = useQuery(GET_VEHICLES);

//   const [updateDevice, { loading }] = useMutation(UPDATE_DEVICE_MUTATION, {
//     onCompleted: () => {
//       Alert.alert("Success", "Device details updated successfully!");
//       navigation.goBack();
//     },
//     onError: (error) => {
//       console.error("Error updating device:", error);
//     },
//   });

//   const handleSave = () => {
//     if (!deviceName.trim()) {
//       Alert.alert("Error", "Device name is required");
//       return;
//     }

//     const updatedDeviceInput = {
//       id: device.id,
//       name: deviceName.trim(),
//       ...(selectedVehicle?.id ? { vehicleId: selectedVehicle.id } : {}),
//       status: selectedStatus,
//     };

//     updateDevice({ variables: { input: updatedDeviceInput } });
//   };

//   const handleVehicleSelect = (vehicle) => {
//     setSelectedVehicle(vehicle);
//     setVehicleNumber(vehicle.registrationNumber);
//     setIsVehicleDropdownExpanded(false);
//   };

//   const handleStatusSelect = (status) => {
//     setSelectedStatus(status);
//     setIsStatusDropdownExpanded(false);
//   };

//   const filteredVehicles =
//     vehiclesData?.getVehicles.filter(
//       (vehicle) => vehicle.registrationNumber !== vehicleNumber
//     ) || [];

//   return (
//     <View style={styles.container}>
//       <HomeHeader
//         title="Edit Device"
//         noti
//         back
//         onSave={handleSave}
//         navigation={navigation}
//       />

//       <View style={styles.form}>
 
//         <View style={styles.inputContainer}>
//           <Bold style={styles.label}>Device Name</Bold>
//           <TextInput
//             style={styles.input}
//             value={deviceName}
//             onChangeText={setDeviceName}
//             placeholder="Enter Device Name"
//           />
//         </View>


//         <View style={styles.inputContainer}>
//           <Bold style={styles.label}>Vehicle Number</Bold>
//           <View style={styles.dropdownContainer}>
//             <TextInput
//               style={styles.input}
//               value={vehicleNumber}
//               placeholder="Select Vehicle"
//               editable={false}
//             />
//             <TouchableOpacity
//               onPress={() =>
//                 setIsVehicleDropdownExpanded(!isVehicleDropdownExpanded)
//               }
//               style={styles.arrow}
//             >
//               {isVehicleDropdownExpanded ? <UpArrowSvg /> : <DownArrowSvg />}
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.inputContainer}>
//           <Bold style={styles.label}>Status</Bold>
//           <View style={styles.dropdownContainer}>
//             <TextInput
//               style={styles.input}
//               value={selectedStatus ? "true" : "false"}
//               editable={false}
//             />
//             <TouchableOpacity
//               onPress={() =>
//                 setIsStatusDropdownExpanded(!isStatusDropdownExpanded)
//               }
//               style={styles.arrow}
//             >
//               {isStatusDropdownExpanded ? <UpArrowSvg /> : <DownArrowSvg />}
//             </TouchableOpacity>
//           </View>
//         </View>

//         <TouchableOpacity
//           style={[styles.saveButton, loading && styles.saveButtonDisabled]}
//           onPress={handleSave}
//           disabled={loading}
//         >
//           <Text style={styles.saveButtonText}>
//             {loading ? "Saving..." : "Save"}
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {isVehicleDropdownExpanded && (
//         <View style={styles.modalContainer}>
//           <FlatList
//             data={filteredVehicles}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={styles.vehicleListItem}
//                 onPress={() => handleVehicleSelect(item)}
//               >
//                 <Text style={styles.vehicleListText}>
//                   {item.registrationNumber}
//                 </Text>
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       )}

//       {isStatusDropdownExpanded && (
//         <View style={styles.modalContainer}>
//           <FlatList
//             data={[true, false]}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={styles.vehicleListItem}
//                 onPress={() => handleStatusSelect(item)}
//               >
//                 <Text style={styles.vehicleListText}>
//                   {item ? "true" : "false"}
//                 </Text>
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.white,
//   },
//   form: {
//     padding: mvs(16),
//   },
//   inputContainer: {
//     marginBottom: mvs(12),
//     backgroundColor: colors.gray,
//     borderRadius: mvs(8),
//     paddingLeft: mvs(20),
//     paddingTop: mvs(10),
//   },
//   label: {
//     color: colors.grey,
//     fontSize: mvs(14),
//   },
//   input: {
//     fontSize: mvs(16),
//     color: colors.black,
//     fontWeight: "bold",
//   },
//   vehicleInputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   saveButton: {
//     backgroundColor: colors.primary,
//     padding: mvs(16),
//     borderRadius: mvs(8),
//     marginTop: mvs(16),
//     alignItems: "center",
//   },
//   saveButtonText: {
//     color: colors.white,
//     fontSize: mvs(16),
//     fontWeight: "bold",
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     marginLeft: mvs(20),
//     marginRight: mvs(20),
//   },
//   vehicleListItem: {
//     padding: mvs(10),
//     backgroundColor: colors.primary,
//     marginBottom: mvs(8),
//     borderRadius: mvs(8),
//   },
//   vehicleListText: {
//     fontSize: mvs(16),
//     fontWeight: "bold",
//     color: colors.white,
//   },

//   saveButtonDisabled: {
//     opacity: 0.7,
//   },
//   dropdownContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   arrow: {
//     marginRight: mvs(15),
//     backgroundColor: colors.primary,
//     borderRadius: mvs(15),
//     padding: mvs(3),
//     marginBottom: mvs(10),
//   },
// });

// export default EditDevice;
