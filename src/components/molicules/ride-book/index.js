import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const BookRide = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={item?.onPress}>
      <Image source={item?.icon} style={styles.image1} />
      <Text style={styles.text1}>{item?.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: "#C2C1CD4D",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
  },
  text1: {
    color: "#000",
    fontWeight: "400",
    fontSize: 13,
    fontFamily: "DMSans",
  },
  image1: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
});

export { BookRide };
