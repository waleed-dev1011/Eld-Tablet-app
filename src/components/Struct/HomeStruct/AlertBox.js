import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {mvs} from '../../../util/metrices';

const AlertBox = ({content, color, color2}) => {
  return (
    <View
      style={{
        height: mvs(40),
        backgroundColor: color,
        justifyContent: 'center',
        paddingHorizontal: mvs(10),
        borderRadius: mvs(10),
        marginVertical: mvs(5),
      }}>
      <Text style={{color: color2}}>{content}</Text>
    </View>
  );
};

export default AlertBox;

const styles = StyleSheet.create({});
