import { StyleSheet, Text, View } from "react-native";
import { mvs } from "../../config/metrices";
const AcceptedCarinfo = () => {
  return (
    <View style={{ alignItems: "center", marginBottom: mvs(10) }}>
      <Text style={styles.txt1}>Audi E Tron GT-Black</Text>
      <View style={styles.plate}>
        <Text style={styles.txt1}>DFZ-112</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  plate: {
    borderColor: "grey",
    borderWidth: 1,
    width: 120,
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 25,
  },
  txt1: {
    color: "#000",
    fontWeight: "600",
    fontSize: 18,
  },
});
export { AcceptedCarinfo };
