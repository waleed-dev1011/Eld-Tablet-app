import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BackIconSvg from '../../../assets/icons/user/back-icon-svg';
import {Profile} from '../../../assets/images';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import {Row} from '../row';
import {useNavigation} from '@react-navigation/native';

const BackHeader = ({name = 'abid', date = 'Today Jan 27'}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Row style={{gap: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIconSvg />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Image source={Profile} style={styles.profilePic} />
          <Text style={styles.userName}>{name}</Text>
        </View>
      </Row>
      <View style={styles.dateView}>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(9),
    backgroundColor: colors.primary,
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: mvs(41),
    height: mvs(41),
    borderRadius: mvs(20),
    marginRight: mvs(8),
  },
  userName: {
    color: colors.white,
    fontSize: mvs(18),
    fontWeight: 'bold',
  },
  dateView: {
    padding: mvs(7),
    borderWidth: mvs(2),
    borderColor: colors.primary2,
    borderRadius: mvs(3),
  },
  date: {
    color: colors.white,
    fontSize: mvs(14),
  },
});

export default BackHeader;
