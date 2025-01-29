import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    blueBackground: {
      flex: 0.8,
      backgroundColor: colors.lightBlue + 50,
    },
    headerContainer: {
      padding: 20,
      marginTop: mvs(20),
    },
    image1: {
      width: 24,
      height: 24,
    },
    backIcon: {
      backgroundColor: colors.white,
      borderRadius: 20,
      alignSelf: "flex-start",
      padding: 7,
    },
    header: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 25,
    },
    plansContainer: {
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    planCard: {
      borderRadius: 12,
      padding: 15,
      marginBottom: 15,
      backgroundColor: colors.grey + 40,
      borderWidth: 1,
      borderColor: `${colors.grey}20`,
    },
    selectedPlan: {
      borderColor: colors.black,
    },
    planType: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 5,
      color: colors.black,
    },
    price: {
      fontSize: 16,
      color: "#666",
    },
    bestValueContainer: {
      position: "absolute",
      top: 10,
      right: 10,
      backgroundColor: "#4CAF50",
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 12,
    },
    bestValueText: {
      color: "#fff",
      fontSize: 12,
      fontWeight: "600",
    },
    contentContainer: {
      padding: 20,
    },
    featuresContainer: {
      marginBottom: 30,
    },
    includedText: {
      fontSize: 16,
      fontWeight: "600",
      marginBottom: 15,
    },
    featureItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    checkmark: {
      color: "#4CAF50",
      fontSize: 18,
      marginRight: 10,
    },
    featureText: {
      fontSize: 16,
      color: "#666",
    },
    termsText: {
      fontSize: 12,
      color: "#999",
      textAlign: "center",
      marginBottom: 20,
    },
    subscribeButton: {
      fontSize: 18,
      fontWeight: "bold",
    },
    saveButton: {
      backgroundColor: colors.primary,
      padding: mvs(16),
      borderRadius: mvs(50),
      marginTop: mvs(16),
      alignItems: "center",
    },
    saveButtonText: {
      color: colors.white,
      fontSize: mvs(16),
      fontWeight: "bold",
    },
  });

  export default styles;