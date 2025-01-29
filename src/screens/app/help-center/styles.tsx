import { StyleSheet } from "react-native";
import { mvs } from "../../../config/metrices";
import { colors } from "../../../config/colors";

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 15,
  },
  contactUs: {
    marginTop: 20,
  },
  contactItem: {
    alignSelf: "center",
    gap: 6,
    marginTop: -5,
  },
  text2: {
    color: "#000",
    fontWeight: "500",
    fontSize: 18,
  },
  faqContainer: {
    marginTop: 20,
  },
});

export default styles;
