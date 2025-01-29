import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
} from "react-native";
import { HomeHeader } from "../../../components/molicules/home-header";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";
import { KeyboardAvoidScrollview } from "../../../components/atoms/keyboard-avoid-scrollview";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER } from "../../../services/query/userQuery";
import { UPDATE_USER } from "../../../services/mutation/updateUser";
import PrimaryButton from "../../../components/carts/button";
import Medium from "../../../typography/medium-text";

const SettingScreen = ({ navigation }) => {
  // Fetch user data using GraphQL query
  const { data, loading, error } = useQuery(GET_USER);

  // State to store user data
  const [accountNumber, setAccountNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [userId, setUserId] = useState(null);

  const [updateUser, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_USER);

  // Update user state with fetched data
  useEffect(() => {
    if (data) {
      const user = data.getUsers[0];
      setAccountNumber(user.accountnumber.toString());
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setOrganizationName(user.organizationName);
      setEmail(user.email);
      setPhoneNumber(user.phone);
      setCountry(user.country || "");
      setCity(user.city || "");
      setUserId(user.id);
    }
  }, [data]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  const handleUpdate = () => {
    const input = {
      id: userId,
      firstName,
      lastName,
      email,
      city,
      phone: phoneNumber,
      organizationName,
    };

    updateUser({ variables: { input } })
      .then((response) => {
        console.log("User updated successfully:", response);
        Alert.alert("Success", "Device details updated successfully!");
        navigation.goBack();
      })
      .catch((err) => {
        console.error("Error updating user:", err);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HomeHeader title="Profile Setting" noti back />
      <KeyboardAvoidScrollview
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <View
          style={[
            styles.inPutContainer,
            { backgroundColor: colors.green + 20 },
          ]}
        >
          <Medium style={styles.label}>Account Number</Medium>
          <TextInput
            style={[styles.input, { color: colors.green }]}
            value={accountNumber}
            onChangeText={setAccountNumber}
            editable={false}
          />
        </View>
        <View style={styles.inPutContainer}>
          <Medium style={styles.label}>First Name</Medium>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.inPutContainer}>
          <Medium style={styles.label}>Last Name</Medium>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={styles.inPutContainer}>
          <Medium style={styles.label}>Organization Name</Medium>
          <TextInput
            style={styles.input}
            value={organizationName}
            onChangeText={setOrganizationName}
          />
        </View>

        <View style={styles.inPutContainer}>
          <Medium style={styles.label}>Email Address</Medium>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inPutContainer}>
          <Medium style={styles.label}>Phone Number</Medium>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <View style={styles.inPutContainer}>
          <Medium style={styles.label}>Country</Medium>
          <TextInput
            style={styles.input}
            value={country}
            onChangeText={setCountry}
          />
        </View>
        <View style={styles.inPutContainer}>
          <Medium style={styles.label}>City</Medium>
          <TextInput style={styles.input} value={city} onChangeText={setCity} />
        </View>

        <PrimaryButton
          label="Save"
          onclick={handleUpdate}
          disabled={updateLoading}
          style={{marginTop:mvs(10)}}
        />

        {updateLoading && <Text>Updating...</Text>}
        {updateError && <Text>Error: {updateError.message}</Text>}
      </KeyboardAvoidScrollview>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inPutContainer: {
    backgroundColor: colors.gray,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    paddingTop: 12,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  label: {
    fontSize: mvs(10),
    marginBottom: -8 ,
    color:colors.grey
  },
  input: {
    borderColor: colors.gray1,
  },
});

export default SettingScreen;
