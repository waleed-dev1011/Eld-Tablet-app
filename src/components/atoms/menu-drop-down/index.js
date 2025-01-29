import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Medium from 'typography/medium-text';
const MenuDropDown = ({items = [], onPress = item => {}}) => {
  return (
    // <TouchableWithoutFeedback>
    <View style={styles.container}>
      {items?.map((item, index) => (
        <TouchableOpacity
          style={{paddingVertical: mvs(5)}}
          key={index}
          onPress={() => onPress(item)}>
          <Medium label={item} fontSize={mvs(15)} color={colors.primary} />
        </TouchableOpacity>
      ))}
    </View>
    // </TouchableWithoutFeedback>
  );
};
export default MenuDropDown;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // width: mvs(140),
    top: mvs(50),
    paddingVertical: mvs(32),
    paddingHorizontal: mvs(30),
    right: mvs(25),
    backgroundColor: colors.white,
    borderRadius: mvs(10),
    alignItems: 'center',
  },
});
