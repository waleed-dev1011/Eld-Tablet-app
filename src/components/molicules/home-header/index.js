import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  BackIconIconSvg,
  DrawerSvg,
  Notificationsvg,
  PlusSvg, // Added PlusSvg import
} from "../../../assets/icons/user";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";

const HomeHeader = ({
  title = "",
  back = false,
  save = false,
  noti = false,
  onSave,
  rightButton = null, 
  hideTitle = false, 
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      {back ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIconIconSvg />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
      
          }}
        >
          <DrawerSvg />
        </TouchableOpacity> 
      )}
      {!hideTitle && <Text style={[styles.text]}>{title || "Home"}</Text>}
      {rightButton ? (
        rightButton // Render rightButton if provided
      ) : save ? (
        <TouchableOpacity onPress={onSave}>
          <Text style={[styles.text]}>{"Save"}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate("NotificationScreen")}
        >
          {!noti && <Notificationsvg />}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.transparent,
    alignItems: "center",
    justifyContent: "space-between",
    height: mvs(56),
    flexDirection: "row",
    paddingRight: mvs(20),
    paddingLeft: mvs(15),
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: mvs(16),
  },
  notificationBadge: {
    backgroundColor: "red",
    borderRadius: mvs(10),
    position: "absolute",
    right: mvs(-15),
    top: mvs(-9),
    height: mvs(20),
    width: mvs(25),
    justifyContent: "center",
  },
  notificationText: {
    color: "white",
    textAlign: "center",
    fontSize: mvs(12),
  },
});

export { HomeHeader };
