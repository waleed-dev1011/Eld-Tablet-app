import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {mvs} from '../../util/metrices';
import {colors} from '../../util/color';
import {DrawerSvg, HOMESVG, MoonSvg, SunSvg} from '../../assets/svg';
import {shadows} from '../../util/color';
import HomeSvg from '../../assets/svg/home-svg';
import {MessageSvg} from '../../assets/svg';
import {NotificationSVG} from '../../assets/svg';
import {Notification2Svg} from '../../assets/svg';
import Notificationsvg from '../../assets/svg/notification-svg';
import RefreshSvg from '../../assets/svg/refresh-svg';
import {RestartSvg} from '../../assets/svg';
const HomeHeader = ({
  title = '',
  back = false,
  save = false,
  noti = false,
  onSave,
  rightButton = null,
  hideTitle = false,
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={[
          {
            borderWidth: 1,
            borderRadius: mvs(4),
            borderColor: colors.border,
            padding: mvs(2),
            backgroundColor: '#fff',
          },
          shadows.xs,
        ]}
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <DrawerSvg height={25} width={30} />
      </TouchableOpacity>
      <View>
        <Image
          source={require('../../assets/img/Book_ELD.png')}
          style={{
            height: 80,
            width: 80,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}>
        <View
          style={[
            {
              borderWidth: 1,
              borderRadius: mvs(4),
              borderColor: colors.border,
              padding: mvs(4),
              backgroundColor: '#fff',
            },
            shadows.xs,
          ]}>
          <MessageSvg height={25} width={25} />
        </View>
        <View
          style={[
            {
              borderWidth: 1,
              borderRadius: mvs(4),
              borderColor: colors.border,
              padding: mvs(4),
              backgroundColor: '#fff',
            },
            shadows.sm,
          ]}>
          <Notificationsvg height={25} width={25} />
        </View>
        <View
          style={[
            {
              borderWidth: 1,
              borderRadius: mvs(4),
              borderColor: colors.border,
              padding: mvs(4),
              backgroundColor: '#fff',
            },
            shadows.xs,
          ]}>
          <RestartSvg height={25} width={25} />
        </View>
        <View
          style={[
            {
              borderWidth: 1,
              borderRadius: mvs(8),
              borderColor: colors.border,
              paddingHorizontal: mvs(12),
              paddingVertical: mvs(4),
              backgroundColor: '#fff',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            },
            shadows.sm,
          ]}>
          <SunSvg height={22} width={22} />
          <MoonSvg height={22} width={22} />
        </View>
      </View>
    </View>
  );
};

{
  /* <View style={[styles.container]}>
{back ? (
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <HOMESVG />
  </TouchableOpacity>
) : (
  <TouchableOpacity
    onPress={() => {
      navigation.toggleDrawer();
    }}>
    <DrawerSvg />
  </TouchableOpacity>
)}
{!hideTitle && <Text style={[styles.text]}>{title || 'Home'}</Text>}
{rightButton ? (
  rightButton 
) : save ? (
  <TouchableOpacity onPress={onSave}>
    <Text style={[styles.text]}>{'Save'}</Text>
  </TouchableOpacity>
) : (
  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    {!noti && <HOMESVG />}
  </TouchableOpacity>
)}
</View>
); */
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.transparent,
    alignItems: 'center',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    height: mvs(56),
    flexDirection: 'row',
    paddingRight: mvs(20),
    paddingLeft: mvs(15),
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
