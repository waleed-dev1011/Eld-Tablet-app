import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {mvs} from '../../../util/metrices';

const AlertBox = ({content, color, color2}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        justifyContent: 'center',
        paddingHorizontal: mvs(10),
        paddingVertical: mvs(10), // add vertical padding
        borderRadius: mvs(10),
        marginVertical: mvs(5),
      }}>
      <Text style={{color: color2, fontSize: mvs(12)}}>{content}</Text>
    </View>
  );
};

export default AlertBox;
