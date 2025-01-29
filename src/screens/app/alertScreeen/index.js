import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { HomeHeader } from "../../../components/molicules/home-header";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";
import Medium from "../../../typography/medium-text";
import Regular from "../../../typography/regular-text";
import { Row } from "../../../components/atoms/row";
import styles from "./styles";

const PaymentScreen = () => {
  const alerts = [
    {
      id: "1",
      type: "Fuel Consumption",
      time: "11:05 pm 29/10/2024",
      description: "Device ABC12346YT is running out of fuel.",
    },
    {
      id: "2",
      type: "Fuel Efficiency",
      time: "11:05 pm 29/10/2024",
      description: "Device ABC12346YT, fuel’s efficiency is below average",
    },
    {
      id: "3",
      type: "Over Speed",
      time: "11:05 pm 29/10/2024",
      description: "Device ABC12346YT is overspeeding",
    },
    {
      id: "4",
      type: "Fuel Consumption",
      time: "11:05 pm 29/10/2024",
      description: "Device ABC12346YT is running out of fuel.",
    },
  ];

  const renderAlert = ({ item }) => (
    <View style={styles.alertCard}>
      <Row>
        <Medium label={item.type} style={styles.alertType} />
        <Regular label={item.time} style={styles.alertTime} />
      </Row>
      <Regular label={item.description} style={styles.alertDescription} />
    </View>
  );

  return (
    <View style={styles.container}>
      <HomeHeader title="Alert" />

      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={renderAlert}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};
export default PaymentScreen;
