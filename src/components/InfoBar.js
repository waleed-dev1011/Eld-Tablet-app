import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {mvs} from '../util/metrices';
import {colors} from '../util/color';
import ISvg from '../assets/svg/iSvg';

const InfoBar = ({
  icon = 20,
  message = '',
  fontSize = 14,
  colour = '#666',
  marginTop = 20,
  marginBottom = 0,
}) => {
  return (
    <View
      style={[
        styles.infoContainer,
        {marginTop: mvs(marginTop), marginBottom: mvs(marginBottom)},
      ]}>
      <View style={styles.infoIcon}>
        <ISvg height={mvs(icon)} width={mvs(icon)} />
      </View>
      <View style={styles.infoTextContainer}>
        <Text style={[styles.infoText, {fontSize: fontSize, color: colour}]}>
          {message}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    backgroundColor: colors.base.grayBg,
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(10),
    borderRadius: mvs(10),
    alignItems: 'flex-start',
  },
  infoIcon: {
    fontSize: mvs(20),
    marginRight: mvs(12),
    marginTop: mvs(2),
  },
  infoTextContainer: {
    flex: 1,
  },
  infoText: {
    lineHeight: 20,
  },
});

export default memo(InfoBar);
