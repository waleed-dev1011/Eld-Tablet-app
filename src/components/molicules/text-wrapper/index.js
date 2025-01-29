import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';

export const TextWrapper = props => {
  const {text1 = '', text2 = '', onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.firstText}>
        {text1}
        <Text style={styles.secondTxt}> {text2}</Text>
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  firstText: {
    fontSize: 12,
    color: colors.grey,
    marginTop: mvs(10),
    marginLeft: '40%',
  },
  secondTxt: {
    color: colors.primary,
    fontWeight: '600',
  },
});
