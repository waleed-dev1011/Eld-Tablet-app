import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { HomeHeader } from "../../../components/molicules/home-header";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";
import { CARDSVG, DownArrowSvg } from "../../../assets/icons/user";
import CountryPicker from "react-native-country-picker-modal";
import Bold from "../../../typography/bold-text";

const RenewScreen = ({ navigation }) => {
  const [country, setCountry] = useState(null);
  const [isPickerVisible, setPickerVisible] = useState(false);

  const handleCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry);
    setPickerVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HomeHeader
        back
        title="New Subscription"
        noti
        rightButton={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.renewText}>Cancel</Text>
          </TouchableOpacity>
        }
      />
      <View style={styles.inputContainer}>
        <Text style={styles.label1}>
          Card Number <Text style={styles.asterisk}>*</Text>
        </Text>
        <TextInput
          placeholder="*************"
          style={styles.input}
        />
        <View style={styles.iconContainer}>
          <CARDSVG style={styles.cardIcon} />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Card Holder Name <Text style={styles.asterisk}>*</Text>
        </Text>
        <TextInput placeholder="John Doe" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Organization Name</Text>
        <TextInput placeholder="Example Corp" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput placeholder="johndoe@example.com" style={styles.input} />
      </View>

      <View style={styles.row}>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.label}>
            MM/YYYY <Text style={styles.asterisk}>*</Text>
          </Text>
          <TextInput placeholder="12/23" style={styles.input} />
        </View>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.label}>
            CVV <Text style={styles.asterisk}>*</Text>
          </Text>
          <TextInput placeholder="123" style={styles.input} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.label}>Country</Text>
          <View style={styles.inputWrapper}>
            <Bold>{country?.name }</Bold>
            <TouchableOpacity
              onPress={() => setPickerVisible(true)}
              style={styles.iconOverlay}
            >
              <DownArrowSvg />
            </TouchableOpacity>
            <CountryPicker
              visible={isPickerVisible}
              withFilter
              onSelect={handleCountrySelect}
              onClose={() => setPickerVisible(false)}
              countryCode={country?.cca2 }
            />
          </View>
        </View>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.label}>Zip Code</Text>
          <TextInput placeholder="Zip Code" style={styles.input} />
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Subscribe</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  inputContainer: {
    marginBottom: mvs(15),
  },
  label: {
    fontSize: mvs(14),
    fontWeight: "bold",
    marginBottom: mvs(5),
    marginLeft: mvs(25),
  },
  label1: {
    fontSize: mvs(14),
    fontWeight: "bold",
    marginBottom: mvs(5),
    marginLeft: mvs(25),
    marginTop: mvs(10),
  },
  asterisk: {
    color: colors.red,
  },
  input: {
    backgroundColor: colors.grey + "60",
    padding: mvs(15),
    borderRadius: mvs(10),
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: mvs(25),
    fontWeight:"bold"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  halfWidth: {
    flex: 1,
  },
  saveButton: {
    backgroundColor: colors.primary,
    padding: mvs(16),
    borderRadius: mvs(10),
    marginTop: mvs(16),
    alignItems: "center",
    marginHorizontal: mvs(25),
  },
  saveButtonText: {
    color: colors.white,
    fontSize: mvs(16),
    fontWeight: "bold",
  },
  renewText: {
    fontSize: mvs(16),
    color: colors.red,
    fontWeight: "bold",
  },
  iconContainer: {
    position: "absolute",
    right: mvs(35),
    top: "80%",
    transform: [{ translateY: -mvs(10) }],
  },
  cardIcon: {
    width: mvs(20),
    height: mvs(20),
  },
  iconOverlay: {
    position: "absolute",
    right: mvs(5),
    top: "120%",
    transform: [{ translateY: -12 }],
    backgroundColor: colors.primary,
    padding: 3,
    borderRadius: 30,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: mvs(14),
    backgroundColor: colors.grey + "60",
    borderRadius: mvs(10),
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: mvs(25),
  },
});

export default RenewScreen;
