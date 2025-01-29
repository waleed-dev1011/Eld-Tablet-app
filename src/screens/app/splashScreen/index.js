import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { LogoSvg } from '../../../assets/icons/user';
import { mvs } from '../../../config/metrices';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);
  const [isReady, setIsReady] = useState(false);  

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem("auth-token");
        if (token) {
          navigation.replace("DrawerNavigation");
        } else {
          navigation.replace("Login");
        }
      } catch (error) {
        console.error("Error retrieving token from storage:", error);
        navigation.replace("Login");
      } finally {
        setIsReady(true);  
      }
    };

    getToken(); 

  }, [navigation, fadeAnim]);

  if (!isReady) {
    return ( 
      <View style={styles.logoContainer}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <LogoSvg width={mvs(350)} height={mvs(350)} />
        </Animated.View>
      </View>
    );
  }

  return null;  
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
