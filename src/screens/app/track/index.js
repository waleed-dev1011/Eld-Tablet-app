import React from "react";
import { FlatList, Image, TouchableOpacity, View, Text } from "react-native";
import { SearchSvg } from "../../../assets/icons/user";
import { Truck } from "../../../assets/images";
import CustomTextInput from "../../../components/carts/customTextInput";
import { HomeHeader } from "../../../components/molicules/home-header";
import Bold from "../../../typography/bold-text";
import Regular from "../../../typography/regular-text";
import { useQuery } from "@apollo/client";
import { GET_VEHICLES } from "../../../services/query/vehicleQuery"; // Import the GraphQL query
import styles from "./styles";

const TrackScreen = ({ navigation }) => {

  const { data, loading, error } = useQuery(GET_VEHICLES);


  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading vehicles...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error loading vehicles: {error.message}</Text>
      </View>
    );
  }

  const renderDeviceCard = ({ item }) => {

    const deviceType = item.devices.length > 0 ? item.devices[0].type : "Unknown";

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("TrackVehicle", { vehicleId: item.id })}
        style={styles.card}
      >
        <Image source={Truck} style={styles.deviceImage} />
        <Bold label={item.registrationNumber} style={styles.deviceName} />
        <Regular label={deviceType} style={styles.deviceModel} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <HomeHeader title="Track" back />
      <View style={{ paddingHorizontal: 20 }}>
        <CustomTextInput
          containerStyle={styles.searchInput}
          placeholder={"Search"}
          leftIcon={<SearchSvg />}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.getVehicles} 
          renderItem={renderDeviceCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

export default TrackScreen;
