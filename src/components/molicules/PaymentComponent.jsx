import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Stripe } from "../../assets/images";

const PaymentComponent = () => {
  return (
    <View style={[styles.container]}>
      <View style={{ alignItems: "center", flexDirection: "row", gap: 5 }}>
        <Image source={Stripe} style={styles.image} />
        <Text style={[styles.text]}>Stripe</Text>
      </View>
      <Text style={[styles.text, { fontWeight: "700" }]}>$30</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
  image: {
    width: 20,
    height: 40,
    resizeMode: "contain",
  },
});

export { PaymentComponent };
