import React, { useState } from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  Alert,
  Text,
} from "react-native";
import { EditSvg, RefreshSvg, SearchSvg } from "../../../assets/icons/user";
import { Truck } from "../../../assets/images";
import CustomTextInput from "../../../components/carts/customTextInput";
import { HomeHeader } from "../../../components/molicules/home-header";
import Bold from "../../../typography/bold-text";
import Regular from "../../../typography/regular-text";
import { useQuery } from "@apollo/client";
import { GET_DEVICES } from "../../../services/query/devicesQuery";

import styles from "./styles";

const DevicesScreen = ({ navigation }) => {
  const { data, loading, error } = useQuery(GET_DEVICES);
  // console.log("data is ", data?.getDevices);

  const renderDeviceCard = ({ item }) => {
    const statusStyle =
      item.status === true
        ? styles.active
        : item.status === false
        ? styles.inactive
        : styles.alert;

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("TrackHistory")}
      >
        <View style={[styles.plateContainer, statusStyle]}>
          <Regular label={item.number} style={styles.deviceModel} />
        </View>
        <Image source={Truck} style={styles.deviceImage} />

        <Bold
          label={item?.vehicle?.registrationNumber}
          style={styles.deviceName}
        />

        <Regular label={item.type} style={styles.deviceName} />

        <View style={styles.actionContainer}>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate("EditDevice", { device: item })}
            style={{ padding: 10 }}
          >
            <EditSvg />
          </TouchableOpacity> */}

          <TouchableOpacity onPress={() => Alert.alert("Refresh Device")}>
            <RefreshSvg />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View>
        <Text>Loading devices...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error loading devices: {error.message}</Text>
      </View>
    );
  }

  const devices = data.getDevices;

  return (
    <View style={styles.container}>
      <HomeHeader title="Devices" />
      <View style={{ paddingHorizontal: 20 }}>
        <CustomTextInput
          containerStyle={styles.searchInput}
          placeholder={"Search"}
          leftIcon={<SearchSvg />}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={devices}
          renderItem={renderDeviceCard}
          keyExtractor={(item) => item.number}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

export default DevicesScreen;
