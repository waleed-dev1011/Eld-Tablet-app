import {CommonActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GallerySvg} from '../../assets/svg';
import {useSelector} from 'react-redux';
const SplashScreen = ({navigation}) => {
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
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.logoText}>Planto.Shop</Text>
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.separatorLine} />
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Plant a</Text>
          <Text style={styles.titleText}>tree for</Text>
          <Text style={styles.titleText}>life</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <GallerySvg />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Worldwide delivery</Text>
        <Text style={styles.footerText}>within 10-15 days</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  txtContainer: {
    // flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Nunito-Bold',
    transform: [{rotate: '270deg'}],
    position: 'absolute',
    top: 94,
    // right: -40,
    left: -10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separatorLine: {
    backgroundColor: 'gray',
    height: '90%',
    width: 2,
    marginRight: 20,
  },
  titleTextContainer: {
    // alignItems: 'center',
  },
  titleText: {
    color: 'black',
    fontSize: 42,
    fontFamily: 'Nunito-ExtraBold',
  },
  imageContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  footerContainer: {
    flex: 0.25,
    // justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 30,
  },
  footerText: {
    fontSize: 18,
    color: 'black',
    // textAlign: 'center',
    fontFamily: 'Nunito-Bold',
  },
});
export default SplashScreen;
