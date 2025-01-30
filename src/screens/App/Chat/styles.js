import {StyleSheet} from 'react-native';
import {colors} from '../../../util/color';
import {mvs} from '../../../util/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: mvs(20),
    backgroundColor: colors.white,
  },
  customBox: {
    backgroundColor: '#e0e0e0',
    borderColor: '#888',
    borderWidth: mvs(2),
  },
  customText: {
    fontSize: 18,
    color: colors.blue,
  },
  message: {
    fontSize: 18,
    color: colors.green,
    marginVertical: mvs(10),
  },
});

export default styles;
