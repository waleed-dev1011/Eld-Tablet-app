import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: mvs(20),
  },
  logoContainer: {
    alignItems: "center",
    // marginTop: mvs(50),
    marginBottom: mvs(30),
  },
  titleText: {
    fontSize: mvs(16),
    color: colors.black,
    marginBottom: mvs(8),
    fontWeight: "bold",
  },
  instructionText: {
    fontSize: mvs(14),
    width: mvs(290),
    lineHeight: mvs(23),
    color: colors.grey,
    marginBottom: mvs(20),
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: mvs(15),
    marginTop: mvs(10),
  },
  inputBox: {
    borderWidth: 1,
    borderColor: colors.grey,
    width: mvs(50),
    height: mvs(50),
    textAlign: "center",
    borderRadius: mvs(8),
    fontSize: mvs(18),
    color: colors.black,
  },
  resendText: {
    fontSize: mvs(14),
    color: colors.grey,
    textAlign: "right",
    marginBottom: mvs(10),
    marginRight: mvs(40),
    marginTop:mvs(10)
  },
  resendLink: {
    color: colors.primary,
    fontWeight: "700",
    fontSize: 16,
  },

});
export default styles;
