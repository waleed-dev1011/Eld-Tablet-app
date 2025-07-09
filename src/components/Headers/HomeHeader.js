import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {mvs} from '../../util/metrices';
import {colors, shadows} from '../../util/color';
import {
  DrawerSvg,
  MessageSvg,
  RestartSvg,
  SunSvg,
  MoonSvg,
} from '../../assets/svg';
import Notificationsvg from '../../assets/svg/notification-svg';
import FastImage from 'react-native-fast-image';

const HomeHeader = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.drawerButton, shadows.xs]}
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <DrawerSvg height={25} width={30} />
      </TouchableOpacity>

      <View>
        <FastImage
          source={require('../../assets/img/Book_ELD.png')}
          style={styles.logo}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>

      <View style={styles.iconRow}>
        <View style={[styles.iconWrapper, shadows.xs]}>
          <MessageSvg height={25} width={25} />
        </View>
        <View style={[styles.iconWrapper, shadows.xs]}>
          <Notificationsvg height={25} width={25} />
        </View>
        <View style={[styles.iconWrapper, shadows.xs]}>
          <RestartSvg height={25} width={25} />
        </View>
        <View style={[styles.themeSwitcher, shadows.sm]}>
          <SunSvg height={18} width={18} />
          <View style={styles.separator} />
          <MoonSvg height={18} width={18} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: mvs(56),
    flexDirection: 'row',
    paddingRight: mvs(20),
    paddingLeft: mvs(15),
  },
  drawerButton: {
    borderWidth: 1,
    borderRadius: mvs(4),
    borderColor: colors.border,
    padding: mvs(2),
    backgroundColor: '#fff',
  },
  logo: {
    height: 80,
    width: 80,
  },
  iconRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  iconWrapper: {
    borderWidth: 1,
    borderRadius: mvs(6),
    borderColor: colors.border,
    padding: mvs(4),
    backgroundColor: '#fff',
  },
  themeSwitcher: {
    borderWidth: 1,
    borderRadius: mvs(6),
    borderColor: colors.border,
    paddingHorizontal: mvs(9),
    paddingVertical: mvs(7),
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    backgroundColor: '#777E90',
    height: mvs(20),
    width: mvs(2),
    marginHorizontal: mvs(8),
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: mvs(16),
  },
  notificationBadge: {
    backgroundColor: 'red',
    borderRadius: mvs(10),
    position: 'absolute',
    right: mvs(-15),
    top: mvs(-9),
    height: mvs(20),
    width: mvs(25),
    justifyContent: 'center',
  },
  notificationText: {
    color: 'white',
    textAlign: 'center',
    fontSize: mvs(12),
  },
});

export {HomeHeader};
