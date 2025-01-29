// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Platform,
// } from "react-native";
// import RNFS from "react-native-fs";
// import { PermissionsAndroid } from "react-native";

// const requestStoragePermission = async () => {
//   if (Platform.OS === "android") {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: "Storage Permission Required",
//           message: "This app needs access to your storage to download files.",
//           buttonNeutral: "Ask Me Later",
//           buttonNegative: "Cancel",
//           buttonPositive: "OK",
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn("Permission request error:", err);
//       return false;
//     }
//   }
//   return true; // iOS doesn't require runtime storage permissions
// };

// export const downloadFile = async (
//   fileUrl,
//   fileName,
//   useAppSpecificDir = true
// ) => {
//   const downloadDir = useAppSpecificDir
//     ? `${RNFS.DocumentDirectoryPath}/${fileName}` // App-specific directory
//     : `${RNFS.DownloadDirectoryPath}/${fileName}`; // Public Downloads directory

//   if (!useAppSpecificDir && Platform.OS === "android") {
//     const hasPermission = await requestStoragePermission();
//     if (!hasPermission) {
//       Alert.alert(
//         "Permission Denied",
//         "Cannot download file without storage permission."
//       );
//       return;
//     }
//   }

//   try {
//     const result = await RNFS.downloadFile({
//       fromUrl: fileUrl,
//       toFile: downloadDir,
//     }).promise;

//     if (result.statusCode === 200) {
//       Alert.alert("Success", `File downloaded to: ${downloadDir}`);
//       console.log(`File saved at: ${downloadDir}`);
//     } else {
//       Alert.alert("Error", "Failed to download file.");
//       console.error("Download failed with status:", result.statusCode);
//     }
//   } catch (error) {
//     console.error("Download error:", error);
//     Alert.alert("Error", error.message);
//   }
// };

// const FileDownload = () => {
//   const basePath = RNFS.DocumentDirectoryPath; // Or choose RNFS.DownloadDirectoryPath for the public folder
//   const fileName = "Osama.pdf"; // Dynamic file name
//   const fileUrl = "https://example.com/sample.pdf"; // Replace with your file URL

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>File Download Example</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => downloadFile(fileUrl, `${basePath}/Osama.pdf`)}
//       >
//         <Text style={styles.buttonText}>
//           Download to App-Specific Directory
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => downloadFile(fileUrl, `${basePath}/Osama.pdf`, false)}
//       >
//         <Text style={styles.buttonText}>
//           Download to Public Downloads Folder
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#f9f9f9",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#333",
//   },
//   button: {
//     backgroundColor: "#007bff",
//     padding: 15,
//     borderRadius: 8,
//     marginVertical: 10,
//     width: "80%",
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default FileDownload;
