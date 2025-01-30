import {StyleSheet} from 'react-native';
import {mvs} from '../../../util/metrices';
import {colors} from '../../../util/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: mvs(30),
    backgroundColor: colors.black,
  },
  logoContainer: {
    height: mvs(300),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '50%',
    height: '50%',
  },
  passwordContainer: {
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    right: mvs(15),
    top: mvs(15),
  },
  icon1: {
    width: mvs(24),
    height: mvs(24),
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: mvs(10),
  },
  termsContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: mvs(20),
    height: mvs(20),
    marginRight: mvs(10),
    borderWidth: mvs(1),
    borderColor: colors.white,
    backgroundColor: 'transparent',
    borderRadius: mvs(5),
  },
  termsText: {
    color: colors.white,
    fontSize: mvs(14),
  },
  termsLink: {
    fontWeight: 'bold',
  },
  ButtonContainer: {
    marginTop: mvs(30),
  },
  loginText: {
    color: colors.white,
    textAlign: 'center',
    marginTop: mvs(10),
  },
  loginLink: {
    color: colors.white,
    fontFamily: 'DMSans-Bold',
    fontSize: mvs(18),
  },
});

export default styles;
