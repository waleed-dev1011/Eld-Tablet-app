import {StyleSheet} from 'react-native';
import {colors} from '../../../util/color';
import {mvs} from '../../../util/metrices';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.border,
    marginBottom: 10,
  },
  header: {
    fontSize: mvs(18),
    fontWeight: '600',
    marginBottom: mvs(15),
    color: colors.black,
  },
  notificationContainner: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#F6F6F6',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  list: {
    paddingBottom: mvs(20),
  },
  notificationItem: {
    paddingBottom: mvs(12),
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: 5,
  },
  notificationContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 1,
    paddingRight: mvs(10),
  },
  title: {
    fontSize: mvs(14),
    color: colors.black,
  },
  message: {
    fontSize: mvs(12),
    color: '#777E90',
    marginTop: mvs(4),
  },
  timestamp: {
    fontSize: mvs(10),
    fontWeight: '500',
    color: '#777E90',
    marginTop: mvs(2),
  },
});

export default styles;
