import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { TextField } from "../../../components/molicules";
import { HomeHeader } from "../../../components/molicules/home-header";
import PrimaryButton from "../../../components/carts/button";

import styles from "./styles";
import Bold from "../../../typography/bold-text";
const EditPassword = () => {
  return (
    <View style={styles.cont}>
      <HomeHeader back noti title="Password Setting" />
      <View style={styles.content}>
     
          <Bold style={styles.label}>Old Password</Bold>
          <TextInput
            placeholder="**********"
            style={styles.input}
            secureTextEntry
            toggleIcon
          />
       
          <Bold style={styles.label}>New Password</Bold>
          <TextInput
            placeholder="**********"
            style={styles.input}
            secureTextEntry
            toggleIcon
          />
     

          <Bold style={styles.label}>Confirm Password</Bold>
          <TextInput
            placeholder="**********"
            style={styles.input}
            secureTextEntry
            toggleIcon
          />

        <PrimaryButton label="Save" style={styles.button} />
      </View>
    </View>
  );
};

export default EditPassword;
