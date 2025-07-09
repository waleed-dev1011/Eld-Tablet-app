import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {EYESVG, HideSvg} from '../../../assets/svg';
import InfoBar from '../../../components/InfoBar';
import styles from './styles'; // Updated styles
import {mvs} from '../../../util/metrices';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Login pressed', {email, password});
    navigation.navigate('DrawerNavigation');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      {/* Left Side - Image */}
      <View style={styles.leftContainer}>
        <FastImage
          source={require('../../../assets/img/Login_Left.png')}
          style={styles.leftImage}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>

      {/* Right Side - Form */}
      <View style={styles.rightContainer}>
        <View style={styles.logoContainer}>
          <FastImage
            source={require('../../../assets/img/Book_ELD.png')}
            style={styles.logo}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>

        <View style={styles.formArea}>
          <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>Login to Your Account</Text>

            <View style={styles.formContainer}>
              {/* Email */}
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

              {/* Password */}
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
                    {showPassword ? (
                      <EYESVG height={mvs(15)} width={mvs(15)} />
                    ) : (
                      <HideSvg height={mvs(15)} width={mvs(15)} />
                    )}
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

          {/* Footer */}
          <View style={styles.footerContainer}>
            <View style={styles.infoWrapper}>
              <InfoBar message="This app does not support account registration. Please reach out to your fleet manager for assistance." />
            </View>
            <View style={styles.copyrightContainer}>
              <Text style={styles.copyright}>Copyright © 2025 OneBook ELD</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
