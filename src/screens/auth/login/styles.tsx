import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs, width} from '../../../config/metrices';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: mvs(20),
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: mvs(70),
    marginBottom: mvs(10),
  },
  headerContainer: {
    marginTop: mvs(20),
  },
  loginTitle: {
    fontSize: 20,
    marginBottom: mvs(5),
    color: colors.black,
    fontWeight: "bold",
  },
  loginSubtitle: {
    marginBottom: mvs(15),
    color: "#081428",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: mvs(10),
  },
  forgotPasswordText: {
    color: colors.black,
    fontWeight: "bold",
  },
  termsContainer: {
    flexDirection: "row",
  },
  checkbox: {
    width: 18,
    height: 18,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: "transparent",
    borderRadius: 5,
  },
  checkboxSelected: {
    backgroundColor: colors.black,
  },
  rememberMeText: {
    color: colors.black,
  },
  loginBtn: {
    marginTop: mvs(20),
  },
  loader: {
    marginTop: mvs(20),
  },  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: mvs(10),
    padding: mvs(10),
    backgroundColor: '#ffebee',
    borderRadius: 4,
  },
});
export default styles;
