import {StyleSheet} from 'react-native';
import {colors} from '../../../util/color';
import {mvs} from '../../../util/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
  },
  leftContent: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  rightContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  loginContainer: {
    width: '70%',
    maxWidth: 400,
    alignItems: 'center',
  },
  logoContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  loginTitle: {
    fontSize: mvs(28),
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: mvs(40),
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: colors.text.primary,
    marginBottom: 8,
    fontWeight: '500',
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: mvs(5),
    paddingHorizontal: 16,
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
    paddingHorizontal: 16,
    paddingVertical: mvs(8),
    fontSize: mvs(16),
    color: colors.text.primary,
  },
  eyeButton: {
    paddingHorizontal: 16,
    paddingVertical: mvs(8),
  },
  eyeIcon: {
    fontSize: mvs(16),
  },
  loginButton: {
    backgroundColor: colors.black,
    borderRadius: mvs(7),
    paddingVertical: mvs(12),
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 30,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

  copyright: {
    fontSize: mvs(15),
    color: colors.text.primary,
    fontWeight: '400',
    marginVertical: mvs(20),
    textAlign: 'center',
  },
});

export default styles;
