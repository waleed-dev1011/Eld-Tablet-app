import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUser} from '../../redux/slices/userSlice';
import {useNavigation} from '@react-navigation/native';
import {EYESVG} from '../../assets/svg';
import Button from '../../components/Home/Structure/Button';
import Input from '../../components/Home/Forms/InputField';
import {colors} from '../../util/color';

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
          <Image
            source={require('../../assets/img/logo.png')}
            style={{
              height: '50%',
              width: '50%',
              resizeMode: 'contain',
              // alignItems: 'center',
            }}
          />
        </View>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Email address"
          error={emailError}
        />

        <View style={styles.passwordContainer}>
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={securePassword}
            error={passwordError}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.iconContainer}>
            <EYESVG />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Sign in" onPress={handleLogin} />
          <Text style={styles.registerText}>
            Don’t have an account?
            <Text style={styles.registerLink} onPress={navigateToRegister}>
              Register
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
  },
  passwordContainer: {
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: colors.black,
  },
  text: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  input: {
    marginRight: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    // justifyContent: 'center',
    height: 50,
    width: '100%',
  },
  inputError: {
    borderColor: 'red', // Border color for error
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },

  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
    zIndex: 1,
  },
  registerText: {
    // color: '#f4f4f4',
    color: colors.halfwhite,
    marginTop: 10,
    textAlign: 'center',
  },
  registerLink: {
    // color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 18,
    fontFamily: 'DMSans-Bold',
  },
});

export default LoginScreen;
