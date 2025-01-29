import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: "100%",
  },
  scrollContent: {
    paddingBottom: mvs(75),
  },
  icon: {
    width: mvs(20),
    height: mvs(20),
  },
  sectionTitle: {
    color: colors.black,
    fontWeight: "600",
    fontSize: mvs(16),
  },
  sectionContainer: {
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(15),
  },
  rideOptionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: mvs(15),
  },
  futureRidesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: mvs(15),
    paddingVertical: mvs(10),
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  ridesList: {
    gap: mvs(15),
  },
});

export default styles;
