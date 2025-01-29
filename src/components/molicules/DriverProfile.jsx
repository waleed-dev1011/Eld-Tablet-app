import { View, StyleSheet, Text, Image } from "react-native";
import { Person } from "../../assets/images";

const DriverProfile = () => {
  return (
    <View style={styles.info}>
      <View style={{ flexDirection: "row" }}>
        <Image source={Person} style={styles.image1} />
        <View>
          <Text style={styles.text1}>Jerome Bell</Text>
          <Text style={styles.text2}>Audi Etron Gt . DFZ-1234</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image1: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  text1: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
  text2: {
    fontSize: 15,
    color: "black",
  },
  text3: {
    fontSize: 15,
    color: "grey",
  },
});
export { DriverProfile };
