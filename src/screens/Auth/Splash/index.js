import React, {useEffect} from 'react';
import {View, Animated} from 'react-native';
import {mvs} from '../../../util/metrices';
import LogoSvg from '../../../assets/svg/logo-svg';
import {useSelector} from 'react-redux';
import styles from './styles';
import {CommonActions} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
  const fadeAnim = new Animated.Value(0);
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (token) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'DrawerNavigation'}],
          }),
        );
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Login'}],
          }),
        );
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.logoContainer}>
      <Animated.View style={{opacity: fadeAnim}}>
        <LogoSvg width={mvs(350)} height={mvs(350)} />
      </Animated.View>
    </View>
  );

  return null;
};
export default SplashScreen;
