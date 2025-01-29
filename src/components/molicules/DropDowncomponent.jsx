import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ArrowDown } from "../../assets/images";

const DropdownComponent = ({ title, children, isActive, onPress }) => {
  const animation = useRef(new Animated.Value(isActive ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isActive ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isActive]);

  const arrowRotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Text style={[styles.title, { width: "95%" }]}>{title}</Text>
        <Animated.View style={{ transform: [{ rotate: arrowRotation }] }}>
          {/* <Text style={styles.arrow}>▼</Text> */}
          <Image source={ArrowDown} style={{ height: 16, width: 16 }} />
        </Animated.View>
      </View>
      <Animated.View style={[styles.dropdown, { height: animatedHeight }]}>
        {isActive && <Text style={styles.dropdownText}>{children}</Text>}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderBottomWidth: 0.4,
    borderBottomColor: "grey",
    overflow: "hidden",
    width: "92%",
    alignSelf: "center",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
  arrow: {
    fontSize: 16,
    color: "#000",
  },
  dropdown: {
    overflow: "hidden",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  dropdownText: {
    fontSize: 16,
    color: "grey",
  },
});

export { DropdownComponent };
