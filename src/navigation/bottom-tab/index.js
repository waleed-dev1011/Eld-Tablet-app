import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreenSvg from "./../../assets/icons/user/homeScreen";
import DevicesSvg from "../../assets/icons/user/device";
import AlertScreenSvg from "../../assets/icons/user/alertScreen";
import ProfileScreenSvg from "../../assets/icons/user/profile";
import CenterSvg from "../../assets/icons/user/centerSvg";
import HomeScreen from "../../screens/app/home";
import DevicesScreen from "../../screens/app/devices";
// import PaymentScreen from "../../screens/app/payment";
import PaymentScreen from "../../screens/app/alertScreeen"
import ProfileScreen from "../../screens/app/profile";
import { colors } from "../../config/colors";
import { mvs } from "../../config/metrices";
import TrackVehicle from "../../screens/app/track-vehicle";
import TrackScreen from "../../screens/app/track";
// import TrackVehicle from "../../screens/app/track-vehicle";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          let IconComponent;
          let label;

          switch (route.name) {
            case "Home":
              IconComponent = HomeScreenSvg;
              label = "Home";
              break;
            case "Devices":
              IconComponent = DevicesSvg;
              label = "Devices";
              break;
            case "Alert":
              IconComponent = AlertScreenSvg;
              label = "Alert";
              break;
            case "TrackScreen":
              IconComponent = CenterSvg;
              // label = "Tracker";
              break;
            case "Profile":
              IconComponent = ProfileScreenSvg;
              label = "Profile";
              break;
            default:
              IconComponent = HomeScreenSvg;
          }

          if (IconComponent) {
            return (
              <View style={styles.iconContainer}>
                <IconComponent color={focused ? colors.primary : colors.grey} />
                <Text
                  style={[
                    styles.label,
                    { color: focused ? colors.primary : colors.grey },
                  ]}
                >
                  {label}
                </Text>
              </View>
            );
          } else {
            return null;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Devices" component={DevicesScreen} />
      <Tab.Screen name="TrackScreen" component={TrackScreen} />

      <Tab.Screen name="Alert" component={PaymentScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    height: mvs(65),
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    textAlign: "center",
    width: 50,
    marginTop: mvs(3),
    fontFamily: "DMSans-regular",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});

export default MyTabs;
