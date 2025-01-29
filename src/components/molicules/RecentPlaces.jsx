import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

const RecentPlaces = ({ item, index }) => {
  return (
    <View style={styles.cont} key={index}>
      <View style={styles.imageview}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Icon type="ionicon" name="time-outline" size={20} color={"grey"} />
          <View>
            <Text style={styles.txt1}>{item?.title}</Text>
            <Text style={styles.txt3}>{item?.description}</Text>
          </View>
        </View>
        <Text style={[styles.txt1, { fontSize: 15 }]}>{item?.distance}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  txt1: {
    color: "#000",
    fontWeight: "500",
    fontSize: 17,
  },
  txt3: {
    color: "grey",
    fontWeight: "400",
    fontSize: 15,
  },
  secondView: {
    gap: 10,
    paddingTop: 10,
  },
  imageview: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between",
  },
});

export { RecentPlaces };
