import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Logo } from "../../assets/images";

const Header = ({ num = 2 }) => {
  return (
    <View style={[styles.container, { marginTop: num == 1 ? 10 : 50 }]}>
      <View style={{ alignItems: "center" }}>
        <Image source={Logo} style={num == 1 ? styles.image2 : styles.image} />
        {/* <Text style={[styles.text, {fontWeight: '800', fontSize: 35}]}>
          LIMOLANE
        </Text>
        <Text style={[styles.text, {fontWeight: '600',fontSize: 13}]}>
          THE OTHER SIDE OF TRAVEL
        </Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
  image: {
    width: 230,
    height: 130,
    resizeMode: "contain",
  },
  image2: {
    width: 160,
    height: 70,
    resizeMode: "contain",
  },
});

export { Header };
