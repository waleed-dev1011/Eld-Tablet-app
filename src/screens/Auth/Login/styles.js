import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../util/color';
import {mvs} from '../../../util/metrices';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
  },
  leftImage: {
    width: '100%',
    height: '100%',
  },
  rightContainer: {
    flex: 1,
    backgroundColor: colors.white,
    padding: mvs(20),
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: mvs(20),
    marginBottom: mvs(10),
  },
  logo: {
    height: mvs(80),
    width: mvs(80),
  },
  formArea: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginContainer: {
    width: '70%',
    maxWidth: 400,
    alignItems: 'center',
  },
  loginTitle: {
    fontSize: mvs(24),
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: mvs(30),
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: mvs(15),
  },
  inputLabel: {
    fontSize: mvs(14),
    color: colors.text.primary,
    marginBottom: mvs(6),
    fontWeight: '500',
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: mvs(5),
    paddingHorizontal: mvs(16),
    paddingVertical: mvs(8),
    fontSize: mvs(16),
    backgroundColor: 'white',
    color: colors.text.primary,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: mvs(5),
    backgroundColor: 'white',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: mvs(16),
    paddingVertical: mvs(8),
    fontSize: mvs(16),
    color: colors.text.primary,
  },
  eyeButton: {
    paddingHorizontal: mvs(16),
    paddingVertical: mvs(8),
  },
  loginButton: {
    backgroundColor: colors.black,
    borderRadius: mvs(7),
    paddingVertical: mvs(12),
    alignItems: 'center',
    marginTop: mvs(10),
    marginBottom: mvs(30),
  },
  loginButtonText: {
    color: 'white',
    fontSize: mvs(16),
    fontWeight: '600',
  },
  footerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  infoWrapper: {
    width: '70%',
  },
  copyrightContainer: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: colors.border,
    marginTop: mvs(30),
    paddingTop: mvs(10),
  },
  copyright: {
    fontSize: mvs(14),
    color: colors.text.primary,
    textAlign: 'center',
    fontWeight: '400',
  },
});

export default styles;
