import { Formik } from "formik";
import React from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import { BackIcon, CloseEyeIconSvg, LogoSvg } from "../../../assets/icons/user";
import { KeyboardAvoidScrollview } from "../../../components/atoms/keyboard-avoid-scrollview";
import PrimaryButton from "../../../components/carts/button";
import CustomTextInput from "../../../components/carts/customTextInput";
import { colors } from "../../../config/colors";
import Medium from "../../../typography/medium-text";
import Regular from "../../../typography/regular-text";
import styles from "./styles";
import { mvs } from "../../../config/metrices";
import { HomeHeader } from "../../../components/molicules/home-header";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const ChangePassword = ({ navigation }) => {
  const handleFormSubmit = (values) => {
    console.log("Form Values:", values);
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidScrollview>
      <StatusBar backgroundColor={colors.white} />
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
         <HomeHeader back  noti title/>
            <View style={styles.logo}>
              <LogoSvg />
            </View>
            <View style={{ padding: mvs(16)}}>
              <Medium style={styles.titleText} label={"Set New Password"} />

              <Regular
                style={styles.instructionText}
                label={
                  "The password must consist of at least one number and one special character"
                }
              />

              <CustomTextInput
                rightIcon={<CloseEyeIconSvg />}
                placeholder="Enter new password"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                secureTextEntry
                error={touched.password && errors.password}
              />
              <CustomTextInput
                rightIcon={<CloseEyeIconSvg />}
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                secureTextEntry
                error={touched.confirmPassword && errors.confirmPassword}
              />

              <PrimaryButton
                onclick={handleSubmit}
                label="Confirm"
                height={56}
                style={styles.loginBtn}
              />
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAvoidScrollview>
  );
};

export default ChangePassword;
