import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: mvs(10),
  },
  dateText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  headerTouchable: {
    flexDirection: "row",
    alignItems: "center",
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
  stopContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  iconContainer: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  stopName: {
    fontSize: 16,
    color: colors.black,
  },
  stopAddress: {
    fontSize: 14,
    color: colors.grey,
  },
  stopTime: {
    fontSize: 14,
    color: colors.grey,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
  },

  lineContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: mvs(5), // Adjust for spacing
    marginBottom: mvs(15),
  },
  line: {
    width: "30%",
    height: 5,
    backgroundColor: colors.grey,
    borderRadius: 3,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calendarModalContent: {
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default styles;
