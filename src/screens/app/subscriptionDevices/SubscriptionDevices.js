import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useQuery } from "@apollo/client";
import { HomeHeader } from "../../../components/molicules/home-header";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";
import DownloadIconSvg from "../../../assets/icons/user/downloadSvg";
import Line from "../../../components/atoms/line";
import { GET_LICENCE } from "../../../services/query/licenceQuery";
import { CancelSubcription } from "../../../components/molicules/CancelSubscription"; 
import { MyButton } from "../../../components/molicules";

const DetailRow = ({ label, value, valueStyle = {} }) => (
  <View style={styles.detailRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={[styles.value, valueStyle]}>{value}</Text>
  </View>
);

const SubscriptionDevices = ({ navigation, route }) => {
  const { data, loading, error } = useQuery(GET_LICENCE);
  const device = route.params?.device;
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (loading || error || !device) {
    return (
      <View style={styles.container}>
        <Text style={loading ? styles.loadingText : styles.errorText}>
          {loading
            ? "Loading..."
            : error
            ? `Error: ${error.message}`
            : "No device selected!"}
        </Text>
      </View>
    );
  }

  const license = data?.getLicenses?.find(
    (license) =>
      license?.device?.vehicle?.registrationNumber === device.number ||
      license?.device?.number === device.number ||
      license?.device?.id === device.id
  );

  if (!license) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          No license found for device number: {device.number}
        </Text>
      </View>
    );
  }

  const isActive = license?.status?.toLowerCase() === "active";

  return (
    <View style={styles.container}>
      <HomeHeader
        back
        title={device.number || "Device Details"}
        noti
      />

      <View style={styles.detailsContainer}>
        <DetailRow
          label="Vehicle Number"
          value={
            license?.device?.vehicle?.registrationNumber ||
            "N/A"
          }
        />

        <Line marginVertical={20} />
        <DetailRow
          label="Monthly Subscription since"
          value={license.subscriptionStart || "N/A"}
        />
        <Line marginVertical={20} />
        <DetailRow label="Billing Type" value={license.billingType || "N/A"} />
        <Line marginVertical={20} />
        <DetailRow label="Billing Plan" value={license.plan || "N/A"} />
        <Line marginVertical={20} />
        <DetailRow
          label="Billing Amount"
          value={license?.invoices?.[0]?.amount || "N/A"}
        />
        <Line marginVertical={20} />
        <DetailRow
          label="Status"
          value={isActive ? "Active" : "Inactive"}
          valueStyle={{ color: isActive ? colors.green : colors.red }}
        />
        <Line marginVertical={20} />
        <DetailRow
          label="Next Billing"
          value={license.subscriptionEnd || "N/A"}
        />

        <Line marginVertical={20} />
        {isActive && license.invoices.length > 0 && (
          <TouchableOpacity
            style={styles.downloadContainer}
            onPress={() => {
           navigation.navigate("InvoiceScreen", { invoiceNumber: license.invoices[0].invoiceNumber });

            }}
          >
            <Text style={styles.downloadText}>
              {license.invoices[0].invoiceNumber}
            </Text>
            <DownloadIconSvg />
          </TouchableOpacity>
        )}
        {isActive && (
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => setIsModalVisible(true)} 
          >
            <Text style={styles.saveButtonText}>Cancel Subscription</Text>
          </TouchableOpacity>
        )}

        {!isActive && (
          <MyButton
            title={"Renew"}
            onPress={() =>
              navigation.navigate("SubscriptionRenew", { device })
            }
          />
        )}
      </View>

      <CancelSubcription
        visible={isModalVisible} 
        onClose={() => setIsModalVisible(false)} 
        onConfirm={() => {
          console.log("Subscription canceled!");
          setIsModalVisible(false); 
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    padding: mvs(20),
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: colors.black,
    fontWeight: "bold",
  },
  value: {
    fontSize: 14,
    color: colors.black,
    fontWeight: "500",
    flex: 1,
    textAlign: "right",
  },
  downloadContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.grey + "30",
    padding: mvs(15),
    borderRadius: mvs(8),
  },
  downloadText: {
    fontSize: 14,
    color: colors.black,
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
  renewText: {
    fontSize: 16,
    color: colors.black,
    fontWeight: "bold",
  },
  sectionContainer: {
    marginTop: mvs(5),
    alignSelf: "center",
  },
  saveButton: {
    backgroundColor: colors.red1 ,
    padding: mvs(16),
    borderRadius: mvs(12),
    marginTop: mvs(16),
    alignItems: "center",
  },
  saveButtonText: {
    color: colors.white,
    fontSize: mvs(16),
    fontWeight: "bold",
  },
});

export default SubscriptionDevices;
