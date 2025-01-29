import React, { useEffect, useRef, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { TextInput, TouchableOpacity, View } from "react-native";
import { LogoSvg } from "../../../assets/icons/user";
import BackIcon from "../../../assets/icons/user/back-icon";
import { KeyboardAvoidScrollview } from "../../../components/atoms/keyboard-avoid-scrollview";
import PrimaryButton from "../../../components/carts/button";
import Medium from "../../../typography/medium-text";
import Regular from "../../../typography/regular-text";
import styles from "./styles";
import { HomeHeader } from "../../../components/molicules/home-header";

const VerificationScreen = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState(Array(5).fill(""));
  const inputRefs = useRef(Array.from({ length: 5 }, () => React.createRef()));

  useEffect(() => {
    if (isFocused && inputRefs.current.length) {
      setTimeout(() => {
        inputRefs.current[0].current.focus();
      }, 100);
    }
  }, [isFocused]);

  const handleChangeText = (text, index) => {
    const newValues = [...inputValues];
    newValues[index] = text;
    setInputValues(newValues);

    if (text.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
    if (newValues.every((value) => value.length === 1)) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidScrollview
      contentContainerStyle={{
        paddingHorizontal: 0,
      }}
    >
         <HomeHeader back  noti title/>
     

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <LogoSvg />
        </View>

        <Medium style={styles.titleText} label={"Forget Password"} />

        <Regular
          style={styles.instructionText}
          label={
            "Enter the 5-digit OTP code sent to your phone number +92 ******54"
          }
        />

        <View style={styles.inputContainer}>
          {Array.from({ length: 5 }).map((_, index) => (
            <TextInput
              key={index}
              ref={inputRefs.current[index]}
              style={styles.inputBox}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(text) => handleChangeText(text, index)}
              value={inputValues[index]}
            />
          ))}
        </View>

        <Regular style={styles.resendText}>
          Didn’t receive code? {" "}
          <Regular
            style={styles.resendLink}
            onPress={() => {
              // Resend OTP logic here
            }}
          >
            Resend again
          </Regular>
        </Regular>

        <PrimaryButton
          onclick={() => navigation.navigate("ChangePassword")}
          label="Verify"
          loading={loading}
        />

        <Regular style={styles.resendText}>
          Remember Password? {" "}
          <Regular
            style={styles.resendLink}
            onPress={() => navigation.navigate("Login")}
          >
            Back to Login
          </Regular>
        </Regular>
      </View>
    </KeyboardAvoidScrollview>
  );
};

export default VerificationScreen;
