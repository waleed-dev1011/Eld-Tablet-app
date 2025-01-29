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
  marker: {
    alignItems: "center",
    justifyContent: "center",
  },
  markerIcon: {
    width: mvs(30),
    height: mvs(30),
    tintColor: colors.primary,
  },
  markerText: {
    color: colors.gray,
    fontSize: mvs(12),
    marginTop: mvs(4),
  },
  bottomSheet: {
    backgroundColor: colors.white,
    borderRadius: mvs(16),
    padding: mvs(20),
    elevation: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    bottom: 50,

    position: "absolute",
    left: 20,
    right: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: mvs(16),
    color: colors.black,
  },
  arrow: {
    fontSize: mvs(14),
    color: colors.primary,
  },
  vehicleItem: {
    alignItems: "center",
    margin: mvs(15),
  },
  vehicleImage: {
    width: mvs(50),
    height: mvs(50),
    borderRadius: mvs(25),
  },
  vehicleText: {
    fontSize: mvs(12),
    marginTop: mvs(4),
    color: colors.primary,
  },
});

export default styles;
