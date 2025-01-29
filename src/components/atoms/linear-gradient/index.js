import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const GradientBackground = ({ colors, children, style }) => {
  return (
    <LinearGradient
      colors={colors}
      style={[styles.gradientContainer, style]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

// Default styles for the Gradient container
const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
});

export default GradientBackground;
