import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  map: {
    flex: 1,
  },
  modalContent: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
  bottomSheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: mvs(20),
    borderTopRightRadius: mvs(20),
  },
  sheetContent: {
    padding: mvs(15),
  },
  vehicleNumber: {
    fontSize: mvs(18),
    color: colors.black,
    flex: 1,
  },
  date: {
    fontSize: mvs(14),
    color: colors.grey,
    textAlign: "right",
  },
  sectionTitle: {
    fontSize: mvs(14),
    color: colors.grey,
    lineHeight: 24,
    marginTop: mvs(10),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: mvs(10),
  },
  locationText: {
    fontSize: mvs(14),
    color: colors.darkBlack,
    flex: 1,
  },
  valueText: {
    fontSize: mvs(14),
    color: colors.darkBlack,
    marginBottom: mvs(10),
  },
  efficiencyText: {
    fontSize: mvs(14),
    color: colors.orange,
  },
  lineContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: mvs(5),
    marginBottom: mvs(15),
  },
  line: {
    width: "30%",
    height: 5,
    backgroundColor: colors.grey,
    borderRadius: 3,
  },
  iconContainer: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  stopContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  vehicleInfoRow: {
    alignItems: "center",
    marginBottom: mvs(10),
  },
  infoContainer: {
    // backgroundColor: "red",
    paddingTop: mvs(15),
  },
});

export default styles;
