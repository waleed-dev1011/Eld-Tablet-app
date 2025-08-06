// components/InfoCard.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../../util/color';
import {mvs} from '../../../../util/metrices';

const InfoCard = ({data}) => {
  return (
    <View style={styles.infoCard}>
      {data.map((item, index) => (
        <View key={index} style={styles.infoRow}>
          <Text style={styles.infoLabel}>{item.label}</Text>
          <Text style={[styles.infoValue, item.isError && styles.errorText]}>
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  infoCard: {
    flexDirection: 'row',
    backgroundColor: colors.base.grayBg,
    borderRadius: mvs(12),
    paddingHorizontal: mvs(16),
    paddingVertical: mvs(12),
    marginBottom: mvs(20),
    borderWidth: 2,
    borderColor: colors.border,
  },
  infoRow: {
    flex: 1,
    justifyContent: 'space-between',
    // flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: mvs(9),
  },
  infoLabel: {
    fontSize: mvs(16),
    fontWeight: '400',
    color: colors.text.placeholder,
    flex: 1,
    alignSelf: 'flex-start',
  },
  infoValue: {
    fontSize: mvs(16),
    fontWeight: '600',
    color: colors.text.primary,
    textAlign: 'left',
    flex: 1,
    alignSelf: 'flex-start',
  },
  errorText: {
    color: colors.text.red,
  },
});

export default InfoCard;
