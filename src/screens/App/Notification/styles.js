import {StyleSheet} from 'react-native';
import {colors} from '../../../util/color';
import {mvs} from '../../../util/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: mvs(20),
    backgroundColor: colors.white,
  },
  notificationItem: {
    padding: mvs(14),
    backgroundColor: colors.gray,
    borderRadius: mvs(8),
    marginVertical: mvs(10),
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: mvs(2)},
    shadowOpacity: 0.1,
    shadowRadius: mvs(4),
    elevation: mvs(2),
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: mvs(40),
    height: mvs(40),
    marginRight: mvs(12),
  },
  textContainer: {
    flexDirection: 'column',
  },
});

export default styles;
