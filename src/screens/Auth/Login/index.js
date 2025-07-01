import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {mvs} from '../../../util/metrices';
import {colors} from '../../../util/color';
import {EYESVG, HideSvg} from '../../../assets/svg';
import InfoBar from '../../../components/InfoBar';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login pressed', {email, password});
    navigation.navigate('DrawerNavigation');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      {/* Left Side - Red Gradient with App Download */}
      <View style={[styles.leftContainer]}>
        <Image
          source={require('../../../assets/img/Login_Left.png')}
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
          }}
        />
      </View>

      {/* Right Side - Login Form */}
      <View style={styles.rightContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/img/Book_ELD.png')}
            style={{
              height: mvs(80),
              width: mvs(80),
              // backgroundColor:'',
              resizeMode: 'contain',
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>Login to Your Account</Text>

            <View style={styles.formContainer}>
              {/* Email Input */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Username or Email Address</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter Email"
                  placeholderTextColor="#A0A0A0"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* Password Input */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="Enter Password"
                    placeholderTextColor="#A0A0A0"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setShowPassword(!showPassword)}>
                    <>
                      {showPassword ? (
                        <EYESVG height={mvs(15)} width={mvs(15)} />
                      ) : (
                        <HideSvg height={mvs(15)} width={mvs(15)} />
                      )}
                    </>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Login Button */}
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <View style={{width: '70%'}}>
              {/* Info Message */}
              <InfoBar
                message="This app does not support account registration. Please reach out
                to your fleet manager for assistance."
              />
            </View>

            {/* Copyright */}
            <View
              style={{
                width: '100%',
                borderTopWidth: 1,
                borderColor: colors.border,
                marginTop: mvs(40),
              }}>
              <Text style={styles.copyright}>Copyright © 2025 OneBook ELD</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
