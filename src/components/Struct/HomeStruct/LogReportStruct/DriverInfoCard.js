// components/DriverInfoCard.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mvs} from '../../../../util/metrices';
import {colors} from '../../../../util/color';
// import {mvs} from '../../../util/metrices';
// import {colors} from '../../../util/color';

const DriverInfoCard = ({data}) => {
  return (
    <View style={styles.section}>
      <View style={styles.infoCard}>
        {data.map((item, index) => (
          <View key={index} style={styles.infoRow}>
            <Text style={styles.infoLabel}>{item.label}</Text>
            <Text style={styles.infoValue}>{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {},
  sectionTitle: {
    fontSize: mvs(21),
    fontWeight: 'bold',
    color: '#000',
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: colors.base.grayBg,
    borderRadius: mvs(12),
    paddingHorizontal: mvs(16),
    paddingVertical: mvs(12),
    borderWidth: 2,
    borderColor: colors.border,
  },
  infoRow: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: mvs(9),
  },
  infoLabel: {
    fontSize: mvs(15),
    color: colors.text.placeholder,
    flex: 1,
  },
  infoValue: {
    fontSize: mvs(16),
    fontWeight: '500',
    color: colors.text.primary,
    textAlign: 'left',
    flex: 1,
  },
});

export default DriverInfoCard;
