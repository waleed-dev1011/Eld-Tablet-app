import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listContent: {
    padding: mvs(16),
  },
  alertCard: {
    marginBottom: mvs(20),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.darkBlack,
    paddingBottom: mvs(10),
  },
  alertType: {
    fontSize: mvs(14),
    color: colors.black,
  },
  alertTime: {
    fontSize: mvs(12),
    color: colors.darkBlack,
    marginVertical: mvs(5),
  },
  alertDescription: {
    fontSize: mvs(14),
    color: colors.black,
  },
});
export default styles;
