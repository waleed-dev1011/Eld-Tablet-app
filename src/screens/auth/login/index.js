import React, { useEffect, useState } from "react";
import { Field, Formik } from "formik";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import { CloseEyeIconSvg, LogoSvg } from "../../../assets/icons/user";
import { KeyboardAvoidScrollview } from "../../../components/atoms/keyboard-avoid-scrollview";
import PrimaryButton from "../../../components/carts/button";
import { colors } from "../../../config/colors";
import { useMutation } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomTextInput from "../../../components/carts/customTextInput";
import { LOGIN_MUTATION } from "../../../services/mutation/loginMutation";
import styles from "./styles";

const FormikTextInput = ({ field, form, error, ...props }) => {
  const hasError = error && error.length > 0;
  return (
    <View>
      <CustomTextInput
        {...props}
        value={field.value}
        onChangeText={(text) => form.setFieldValue(field.name, text)}
        onBlur={() => form.setFieldTouched(field.name)}
      />
      {hasError && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

// Validation schema
const validationSchema = Yup.object().shape({
  accountnumber: Yup.string()
    .required("Account number is required")
    .matches(/^\d+$/, "Account number must contain only numbers"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
});

const Login = ({ navigation }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [initialValues, setInitialValues] = useState({
    accountnumber: "",
    password: "",
  });
  const [login] = useMutation(LOGIN_MUTATION);

  useEffect(() => {
    const getSavedCredentials = async () => {
      try {
        const savedCredentials = await AsyncStorage.getItem("remembered-credentials");
        if (savedCredentials) {
          const parsedCredentials = JSON.parse(savedCredentials);
          setInitialValues({
            accountnumber: parsedCredentials.accountnumber,
            password: parsedCredentials.password,
          });
          setRememberMe(true);
        }
      } catch (error) {
        console.error("Error retrieving credentials:", error);
      }
    };

    getSavedCredentials();
  }, []);

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleForgetPassword = () => {
    navigation.navigate("ForgetPasswordScreen");
  };

  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    setLoading(true);
    setLoginError("");

    try {
      await AsyncStorage.removeItem("auth-token");
      const response = await login({
        variables: {
          accountnumber: parseInt(values.accountnumber),
          password: values.password,
        },
      });

      const token = response?.data?.login?.token;
      await AsyncStorage.setItem("auth-token", token);
      if (rememberMe) {
        const credentialsToStore = {
          accountnumber: values.accountnumber,
          password: values.password,
        };
        await AsyncStorage.setItem("remembered-credentials", JSON.stringify(credentialsToStore));
      } else {
        await AsyncStorage.removeItem("remembered-credentials");
      }
      navigation.replace("DrawerNavigation");
    } catch (err) {
      setLoginError(err.message || "An error occurred during login");

      if (err.graphQLErrors?.[0]?.message) {
        setLoginError(err.graphQLErrors[0].message);
      }

      if (err.networkError) {
        setLoginError("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidScrollview>
      <StatusBar backgroundColor={colors.white} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={handleLogin}
        validateOnMount={true}
      >
        {({ handleSubmit, isValid, errors, touched, isSubmitting }) => (
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <LogoSvg />
            </View>

            <View style={styles.headerContainer}>
              <Text style={styles.loginTitle}>Login</Text>
              <Text style={styles.loginSubtitle}>
                Enter the credentials to login to the system
              </Text>
            </View>

            {loginError ? (
              <Text style={styles.errorMessage}>{loginError}</Text>
            ) : null}

            <Field
              name="accountnumber"
              component={FormikTextInput}
              placeholder="Account number"
              error={touched.accountnumber && errors.accountnumber}
            />

            <Field
              name="password"
              component={FormikTextInput}
              placeholder="Password"
              secureTextEntry
              rightIcon={<CloseEyeIconSvg />}
              error={touched.password && errors.password}
            />

            <View style={styles.row}>
              <View style={styles.termsContainer}>
                <TouchableOpacity onPress={toggleRememberMe}>
                  <View
                    style={[
                      styles.checkbox,
                      rememberMe && styles.checkboxSelected,
                    ]}
                  />
                </TouchableOpacity>
                <Text style={styles.rememberMeText}>Remember me</Text>
              </View>
              <TouchableOpacity onPress={handleForgetPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <PrimaryButton
              loading={isSubmitting}
              onclick={handleSubmit}
              label="Login"
              height={56}
              style={styles.loginBtn}
              disabled={!isValid || isSubmitting}
            />
          </View>
        )}
      </Formik>
    </KeyboardAvoidScrollview>
  );
};

export default Login;
