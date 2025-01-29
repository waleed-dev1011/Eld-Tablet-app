import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors";
import { mvs, width } from "../../../config/metrices";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: mvs(16),
    color: colors.black,


  },
  instructionText: {
    fontSize: mvs(14),
  },
  loginBtn: {
    marginTop: mvs(10),
  },
});
export default styles;
