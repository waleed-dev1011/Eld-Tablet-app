import { Image, StyleSheet, Text, View } from "react-native";
import { ArrowRight } from "../../assets/images";

const SafetyTooltip = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.container}>
      <View style={styles.view2}>
        <Image source={item?.icon} style={styles.image1} />
        <View style={{}}>
          <Text style={styles.text1}>{item?.title}</Text>
          <Text style={styles.text3}>{item?.message}</Text>
        </View>
      </View>
      {item.icon2 ? (
        <Image
          source={item?.icon2}
          style={[styles.image1, { width: 30, height: 30 }]}
        />
      ) : (
        <View>
          <Image
            source={ArrowRight}
            style={[styles.imageStyle, { width: 10, height: 10 }]}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
  },
  image1: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
  },
  text1: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  text3: {
    fontSize: 13,
    color: "black",
  },
});
export { SafetyTooltip };
