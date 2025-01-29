import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../../config/colors";
import { mvs } from "../../config/metrices";

const MainHeader = ({ title, handleNotification = () => {} }) => {
  console.log("🚀 ~ MainHeader ~ title:", title);
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        title ? styles.titleBackground : styles.defaultBackground,
      ]}
    >
      {title != "Hi, Abuzar" && (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" type="ionicon" size={25} />
        </TouchableOpacity>
      )}
      <Text
        style={[styles.text, title ? styles.titleText : styles.defaultText]}
      >
        {title || "Hi, Abuzar"}
      </Text>

      {title !== "Notification" && (
        <TouchableOpacity
          onPress={handleNotification}
          style={styles.notificationContainer}
        >
          <Icon type="ionicon" name="notifications-outline" size={24} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>20</Text>
          </View>
        </TouchableOpacity>
      )}
      {title == "Notification" && <View></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: mvs(56),
    paddingRight: mvs(30),
    paddingLeft: mvs(15),
  },
  titleBackground: {
    backgroundColor: colors.gray,
  },
  defaultBackground: {
    backgroundColor: colors.white,
  },
  text: {
    color: colors.black,
  },
  titleText: {
    fontSize: mvs(18),
    fontWeight: "400",
  },
  defaultText: {
    fontSize: mvs(16),
    fontWeight: "400",
  },
  notificationContainer: {
    position: "relative",
  },
  badge: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    position: "absolute",
    right: mvs(-15),
    top: mvs(-9),
    height: mvs(20),
    width: mvs(25),
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: colors.white,
    fontSize: mvs(10),
  },
});

export default MainHeader;
