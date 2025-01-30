import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {mvs} from '../../../config/metrices';
import {colors} from '../../../config/colors';

export const KeyboardAvoidScrollview = props => {
  const {
    children,
    contentContainerStyle,
    keyboardShouldPersistTaps = 'never',
  } = props;
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      contentContainerStyle={[
        styles.contentContainerStyle,
        contentContainerStyle,
      ]}>
      {children}
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
});
