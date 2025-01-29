import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Regular from '../../../../typography/regular-text';

const Button = ({onPress, backgroundColor}) => {
  console.log('button saide rendering');
  return (
    <TouchableOpacity
      style={[styles.plusContainer, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
      <Regular style={styles.plusText} label={'click me'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  plusContainer: {
    backgroundColor: colors.primary,
    marginVertical: mvs(10),
    justifyContent: 'center',
    alignItems: 'center',
    width: mvs(140),
    height: mvs(50),
    borderRadius: mvs(50 / 2),
  },
  plusText: {
    color: colors.black,
    fontSize: mvs(25),
    alignSelf: 'center',
  },
});

export default memo(Button);
