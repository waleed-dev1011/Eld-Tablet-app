import {StyleSheet} from 'react-native';
import {colors} from '../../../util/color';
import {mvs} from '../../../util/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: mvs(20),
  },
  title: {
    fontSize: mvs(28),
    // fontWeight: ,

    marginBottom: mvs(20),
    color: colors.gray,
  },
  logoutButton: {
    backgroundColor: colors.red,
    paddingVertical: mvs(12),
    paddingHorizontal: mvs(30),
    borderRadius: mvs(30),
    marginBottom: mvs(20),
  },
  logoutButtonText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: mvs(16),
    fontWeight: 'bold',
  },
});

export default styles;
