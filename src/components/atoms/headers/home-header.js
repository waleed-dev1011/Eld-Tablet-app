import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';

const BackHeader = ({name = 'Abuzer', date = 'Today Jan 27'}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Bold label={`Hi,${name}`} style={styles.userName} />
        <Text style={styles.location}>
          Your current location: Coppell, Virginia
        </Text>
      </View>
      <View style={styles.notification}>
        <Text style={styles.notificationIcon}>🔔 20</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: mvs(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: mvs(20),
  },
  userInfo: {
    flex: 1,
    alignItems: 'flex-start',
  },
  userName: {
    fontSize: mvs(18),
    color: colors.black,
  },
  location: {
    fontSize: mvs(14),
    color: colors.grey,
  },
  notification: {
    alignItems: 'center',
  },
  notificationIcon: {
    fontSize: mvs(18),
    color: colors.red,
  },
});

export default BackHeader;
