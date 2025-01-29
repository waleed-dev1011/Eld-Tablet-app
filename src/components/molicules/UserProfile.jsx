import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Person, Star2 } from "../../assets/images";

const UserProfile = () => {
  return (
    <View style={[styles.container]}>
      <Image source={Person} style={styles.pic} />
      <Text style={styles.text}>Ibrahim Ali</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image source={Star2} style={styles.image2} />
        <Text style={[styles.text, { fontWeight: "400", fontSize: 14 }]}>
          4.7 (1200)
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "black",
    fontSize: 17,
    fontWeight: "500",
  },
  pic: {
    width: 60,
    height: 60,
  },
  image2: {
    width: 20,
    height: 20,
  },
});

export { UserProfile };
