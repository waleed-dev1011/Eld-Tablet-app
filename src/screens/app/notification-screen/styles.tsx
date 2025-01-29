import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  backButton: {
    position: "absolute",
    top: mvs(10),
    left: mvs(10),
  },
  backButtonImage: {
    width: mvs(70),
    height: mvs(70),
    resizeMode: "contain",
  },
  locationButton: {
    position: "absolute",
    right: mvs(20),
    top: mvs(250),
    backgroundColor: colors.white,
    width: mvs(40),
    height: mvs(40),
    borderRadius: mvs(20),
    alignItems: "center",
    justifyContent: "center",
  },
  locationImage: {
    width: mvs(20),
    height: mvs(20),
    resizeMode: "contain",
  },

  sheetContent: {
    padding: mvs(16),
    flex: 1,
  },
  cancelRideButton: {
    marginTop: mvs(5),
  },
});

export default styles;
