import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {MyButton} from '../../../components/atoms/InputFields/MyButton';
import PrimaryTextInput from '../../../components/atoms/InputFields/PrimaryTextInput';
import {colors} from '../../../util/color';
import {EYESVG} from '../../../assets/svg';
import LogoSvg from '../../../assets/svg/logo-svg';
import PrimaryPasswordInput from '../../../components/atoms/InputFields/PrimaryPasswordInput';
import {KeyboardAvoidScrollview} from '../../../components/atoms/InputFields/KeyboardAvoidScroll';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const PHONE_NUMBER_LENGTH = 11;
  const isEmailValid = email => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailRegex.test(email);
  };
  const isPasswordValid = password => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,21}$/;
    return passwordRegex.test(password);
  };
  const isPhoneNumberValid = phoneNumber => {
    return (
      phoneNumber.length === PHONE_NUMBER_LENGTH && /^\d+$/.test(phoneNumber)
    );
  };
  const isFormValid = () => {
    return (
      fullName &&
      email &&
      phoneNumber &&
      password &&
      isEmailValid(email) &&
      isPasswordValid(password) &&
      isPhoneNumberValid(phoneNumber) &&
      acceptTerms
    );
  };
  const handleSignUp = async () => {
    let valid = true;
    if (!fullName) {
      setNameError('Full name is required');
      valid = false;
    } else {
      setNameError('');
    }
    if (!phoneNumber) {
      setNumberError('Phone number is required');
      valid = false;
    } else if (!isPhoneNumberValid(phoneNumber)) {
      setNumberError('Invalid phone number');
      valid = false;
    } else {
      setNumberError('');
    }
    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!isEmailValid(email)) {
      setEmailError('Invalid email');
      valid = false;
    } else {
      setEmailError('');
    }
    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else if (!isPasswordValid(password)) {
      setPasswordError(
        'Password must be 8-21 characters, with at least one uppercase letter',
      );
      valid = false;
    } else {
      setPasswordError('');
    }
    if (!acceptTerms) {
      Alert.alert('You must accept the Terms of Service');
      valid = false;
    }
    if (!valid) {
      return;
    }
    try {
      const users = await AsyncStorage.getItem('users');
      const parsedUsers = users ? JSON.parse(users) : [];
      const userExists = parsedUsers.some(user => user.email === email);
      if (userExists) {
        Alert.alert('User already exists');
        return;
      }
      const newUser = {fullName, email, phoneNumber, password};
      parsedUsers.push(newUser);
      await AsyncStorage.setItem('users', JSON.stringify(parsedUsers));
      setUserData({
        username: fullName,
        email: email,
        phoneNumber: phoneNumber,
        profileImage: null,
      });
      Alert.alert('Account created successfully!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('AsyncStorage error: ', error);
      Alert.alert('Error creating account. Please try again.');
    }
  };
  const togglePasswordVisibility = () => {
    setSecurePassword(!securePassword);
  };
  const toggleAcceptTerms = () => {
    setAcceptTerms(!acceptTerms);
  };
  return (
    <KeyboardAvoidScrollview
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView>
        <View
          style={{
            height: 300,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LogoSvg />
        </View>
        <PrimaryPasswordInput
          value={fullName}
          onChangeText={setFullName}
          placeholder="Full name"
          error={nameError}
        />
        <PrimaryPasswordInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Phone number"
          error={numberError}
          keyboardType="phone-pad"
        />
        <PrimaryPasswordInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email address"
          error={emailError}
        />
        <View style={styles.passwordContainer}>
          <PrimaryPasswordInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            rightIcon={<EYESVG />}
            secureTextEntry={securePassword}
            error={passwordError}
          />
        </View>
        <View style={styles.termsContainer}>
          <TouchableOpacity
            onPress={toggleAcceptTerms}
            style={styles.termsContent}>
            <View
              style={[
                styles.checkbox,
                acceptTerms && {backgroundColor: colors.white},
              ]}
            />
            <Text style={styles.termsText}>
              I accept all
              <Text style={styles.termsLink}>Terms of Service</Text> and
              <Text style={styles.termsLink}>Privacy Policy</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonContainer}>
          <MyButton title="Sign up" onPress={handleSignUp} />
          <Text style={styles.loginText}>
            Already have an account?
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate('Login')}>
              Sign in
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidScrollview>
  );
};
export default SignUp;
