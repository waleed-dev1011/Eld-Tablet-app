import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  headerContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    color: "black",
    fontSize: 17,
    fontWeight: "500",
    paddingLeft: 20,
    marginBottom: 10,
  },
  sectionContainer: {
    marginTop: 10,
    alignSelf: "center",
  },
  saveButtonContainer: {
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
  },
});

export default styles;
