import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";;
import { LogoSvg, Pass } from "../../../assets/icons/user";
import { mvs } from "../../../config/metrices";
import Medium from "../../../typography/medium-text";
import Regular from "../../../typography/regular-text";
import { colors } from "../../../config/colors";
import PrimaryButton from "../../../components/carts/button";
import CustomTextInput from "../../../components/carts/customTextInput";
import { HomeHeader } from "../../../components/molicules/home-header";
import Bold from "../../../typography/bold-text";
const ForgetPasswordScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
         <HomeHeader back  noti title/>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <LogoSvg />
        </View>
        <Bold style={styles.titleText} label={"Forget Password"} />
        <Regular
          style={styles.instructionText}
          label={"Enter your email to reset your password"}
        />

        <CustomTextInput placeholder="Enter email Address" />

        <PrimaryButton
          onclick={() => navigation.navigate("VerificationScreen")}
          label="Reset Password"
          style={{marginTop:10}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: mvs(20),
  },
  logoContainer: {
    alignItems: "center",

    marginBottom: mvs(30),
  },
  titleText: {
    fontSize: mvs(16),
    color: colors.black,
    marginBottom: mvs(8),
    fontWeight: "bold",
  },
});
export default ForgetPasswordScreen;
