// Navigation.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import Login from '../../screens/Auth/Login';
import Register from '../../screens/Auth/Register';
import SplashScreen from '../../screens/Auth/Splash';
import DrawerNavigation from '../DrawerTab/DrawerNavigation';
import {View} from 'react-native';
import NotificationScreen from '../../screens/App/Notification';
const Stack = createStackNavigator();
// enableScreens();

const AppNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      </Stack.Navigator>
    </View>
  );
};

export default AppNavigator;
