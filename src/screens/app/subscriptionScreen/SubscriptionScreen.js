// SubscriptionScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useQuery } from "@apollo/client";
import { HomeHeader } from "../../../components/molicules/home-header";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";
import RightArrowSvg from "../../../assets/icons/user/right-arrow-svg";
// import { GET_DEVICES } from "./queries";
import { GET_DEVICES } from "../../../services/query/devicesQuery";

const SubscriptionScreen = ({ navigation }) => {
  const { data, loading, error } = useQuery(GET_DEVICES);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading devices...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Error loading devices: {error.message}
        </Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.deviceContainer,
        item.status ? styles.active : styles.inactive,
      ]}
      onPress={() =>
        navigation.navigate("SubscriptionDevices", { device: item })
      }
    >
      <Text style={[styles.deviceText, !item.status && styles.inactiveText]}>
        Device Number: {item.number}
      </Text>
      <RightArrowSvg />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HomeHeader back title="Subscription" noti />
      <FlatList
        data={data.getDevices}
        keyExtractor={(item) => item.number.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listContainer: {
    padding: mvs(10),
  },
  deviceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: mvs(20),
    marginVertical: mvs(5),
    borderRadius: 8,
  },
  active: {
    backgroundColor: colors.green + "20",
  },
  inactive: {
    backgroundColor: colors.red + "20",
  },
  deviceText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.green,
  },
  inactiveText: {
    color: colors.red,
  },
  loadingText: {
    fontSize: 16,
    color: colors.black,
    textAlign: "center",
    marginTop: mvs(20),
  },
  errorText: {
    fontSize: 16,
    color: colors.red,
    textAlign: "center",
    marginTop: mvs(20),
  },
});

export default SubscriptionScreen;
