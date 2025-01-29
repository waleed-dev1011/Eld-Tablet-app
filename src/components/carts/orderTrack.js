import React from 'react';
import {StyleSheet, View} from 'react-native';

import {SmWatch} from 'assets/svgs';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import * as SVG from '../../assets/svgs/index';
import Label from './Label';
import Bold from './bold';
const OrderTrack = ({style, icon}) => {
  const LeftIcon = SVG[icon];
  return (
    <Row style={{...styles.main, ...style}}>
      {LeftIcon ? <LeftIcon /> : null}
      <View style={styles.right}>
        <Bold label="Order received" color={'black'} />
        <Row style={styles.main}>
          <SmWatch />
          <Label label="Mar 28, 2023 12:24 PM" size={10} style={styles.right} />
        </Row>
      </View>
    </Row>
  );
};
export default OrderTrack;
const styles = StyleSheet.create({
  main: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  right: {
    marginLeft: mvs(10),
  },
});
