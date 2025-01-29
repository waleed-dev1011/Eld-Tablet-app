import React from 'react';
import {
  ActivityIndicator,
  ColorValue,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../../../config/colors';
import Medium from '../../../typography/medium-text';
type props = {
  style?: StyleProp<ViewStyle>;
  label?: string;
  color?: ColorValue;
  children?: JSX.Element | JSX.Element[];
  loading?: boolean;
};
export const EmptyList = (props: props) => {
  const {
    children,
    loading,
    style,
    label = 'No Result Found',
    color = colors.primary,
  } = props;
  return (
    <View style={[styles.contentContainerStyle, style]}>
      {loading ? <ActivityIndicator size={'small'} /> : children}
      {!loading && <Medium label={label} color={color} />}
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
