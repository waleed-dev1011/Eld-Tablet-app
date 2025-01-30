import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Regular from '../../../typography/RegularText';
import styles from './styles';
import {MyButton} from '../../../components/atoms/InputFields/MyButton';
import PrimaryTextInput from '../../../components/atoms/InputFields/PrimaryTextInput';
import {setUser} from '../../../redux/slices/userSlice';
import LogoSvg from '../../../assets/svg/logo-svg';
import {EYESVG} from '../../../assets/svg';
import PrimaryPasswordInput from '../../../components/atoms/InputFields/PrimaryPasswordInput';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    if (!isEmailValid(email)) {
      setEmailError('Please enter a valid email.');
      return;
    } else {
      setEmailError('');
    }

    if (!isPasswordValid(password)) {
      setPasswordError('Password must be at least 8 characters.');
      return;
    } else {
      setPasswordError('');
    }

    const dummyToken = '12345';
    dispatch(setUser(dummyToken));
    console.log('Navigating to drawer');
    navigation.navigate('DrawerNavigation');
  };

  const isEmailValid = email => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = password => {
    return password.length >= 8;
  };
  const navigateToRegister = () => {
    navigation.navigate('Register');
  };
  const togglePasswordVisibility = () => {
    setSecurePassword(!securePassword);
  };

  return (
    <KeyboardAvoidingView
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

        <View style={styles.buttonContainer}>
          <MyButton title="Sign in" onPress={handleLogin} />
          <Regular style={styles.registerText}>
            Don’t have an account?
            <Regular style={styles.registerLink} onPress={navigateToRegister}>
              Register
            </Regular>
          </Regular>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;
