import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../config/colors";

const ProfileCard = ({ item }) => {
  return (
    <View style={[styles.inputContainer, item.style]}>
      <TouchableOpacity style={styles.withtouch} onPress={item?.onPress}>
        <View style={styles.touchview}>
          <Text style={[styles.itemText, item.textStyle]}>{item?.title}</Text>

          {item?.icon2 && typeof item?.icon2 === "object" ? (
            <View>{item?.icon2}</View>
          ) : (
            item?.icon2 && (
              <Image source={item?.icon2} style={[styles.imageStyle]} />
            )
          )}

          {item?.label && <Text style={styles.label}>{item?.label}</Text>}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 12,
    height: 50,
    width: "90%",
    backgroundColor: colors.gray,
  },

  imageStyle: {
    width: 12,
    height: 12,
    borderRadius: 12,
  },

  itemText: {
    fontSize: 16,
    color: "black",
  },
  withtouch: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  touchview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 14,
    color: colors.grey,
  },
});

export default ProfileCard;
