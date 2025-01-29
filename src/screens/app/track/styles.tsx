import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: mvs(40),
    paddingHorizontal: mvs(20),
    paddingVertical: 0,
    backgroundColor: colors.gray,
  },
  row: {
    justifyContent: "space-between",
  },
  listContainer: {
    paddingBottom: mvs(130),
  },
  card: {
    width: "47%",
    backgroundColor: colors.white,
    borderRadius: mvs(8),
    padding: mvs(8),
    marginHorizontal: mvs(1),
    marginVertical: mvs(8),
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: mvs(1),
    shadowOffset: { width: 0, height: mvs(2) },
    elevation: 4,
  },
  plateContainer: {
    alignSelf: "center",
    paddingVertical: mvs(4),
    paddingHorizontal: mvs(8),
    borderRadius: mvs(12),
    marginBottom: mvs(8),
  },
  plateText: {
    fontSize: mvs(12),
  },
  active: {
    backgroundColor: colors.green + 10,
    borderColor: colors.green,
    borderWidth: 1,
  },
  inactive: {
    backgroundColor: colors.gray + 20,
    borderColor: colors.grey,
    borderWidth: 1,
  },
  alert: {
    backgroundColor: colors.red + 20,

    borderColor: colors.red,
    borderWidth: 1,
  },
  deviceImage: {
    width: mvs(50),
    height: mvs(50),
    borderRadius: mvs(25),
    alignSelf: "center",
    marginBottom: mvs(8),
  },
  deviceName: {
    fontSize: mvs(16),
    textAlign: "center",
    marginBottom: mvs(4),
  },
  deviceModel: {
    fontSize: mvs(14),
    textAlign: "center",
    color: colors.grey,
    marginBottom: mvs(12),
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  icon: {
    width: mvs(24),
    height: mvs(24),
    tintColor: colors.black,
  },
  addButton: {
    position: "absolute",
    bottom: mvs(20),
    alignSelf: "center",
    backgroundColor: colors.primary,
    borderRadius: mvs(50),
    paddingVertical: mvs(12),
    paddingHorizontal: mvs(32),
  },
  addButtonText: {
    fontSize: mvs(16),
    color: colors.white,
  },
});

export default styles;
