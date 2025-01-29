import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ActiveIconSvg,
  CompanyIconSvg,
  LocationIconSvg,
} from '../../../assets/icons/user';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import Medium from '../../../typography/medium-text';
import Regular from '../../../typography/regular-text';
import Bold from '../../carts/bold';
import PrimaryButton from '../../carts/button';
import {Row} from '../row';

const JobCard = ({item}) => {
  return (
    <View style={styles.card}>
      <View>
        <Bold style={styles.title} label={item?.title} />
        <Row>
          <View>
            <View style={styles.iconContainer}>
              <CompanyIconSvg />
              <Regular style={styles.company} label={item?.company} />
            </View>
            <View style={styles.iconContainer}>
              <LocationIconSvg />
              <Regular style={styles.location} label={item?.location} />
            </View>
          </View>
          <View style={styles.iconContainer}>
            <ActiveIconSvg />
            <Medium style={styles.status} label={item?.status} />
          </View>
        </Row>
      </View>
      <PrimaryButton
        label="Apply"
        style={styles.applyButton}
        textStyle={styles.applyButtonText}
        onPress={() => console.log(`Applied for ${job.title}`)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: mvs(12),
    paddingHorizontal: mvs(14),
    paddingVertical: mvs(8),
    marginHorizontal: mvs(20),
    marginBottom: mvs(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: colors.grey,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: mvs(2)},
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: mvs(16),
    color: colors.black,
    marginBottom: mvs(4),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: mvs(6),
  },
  company: {
    fontSize: mvs(14),
    color: colors.grey,
    marginBottom: mvs(4),
  },
  location: {
    fontSize: mvs(14),
    color: colors.grey,
    marginBottom: mvs(8),
  },
  status: {
    fontSize: mvs(14),
    alignItems: 'center',
    color: colors.green,
  },
  applyButton: {
    backgroundColor: colors.primary,
    borderRadius: mvs(8),
    paddingHorizontal: mvs(16),
    height: mvs(30),
  },
  applyButtonText: {
    fontSize: mvs(14),
    color: colors.white,
  },
});
export default JobCard;
