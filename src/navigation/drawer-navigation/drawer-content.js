import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ContactSvg,
  EndMapSvg,
  FaqSvg,
  GeoFenceSvg,
  LogoutSvg,
  SubscriptionSvg,
  SupportSvg,
} from "../../assets/icons/user";
import Line from "../../components/atoms/line";
import { colors } from "../../config/colors";
import { mvs } from "../../config/metrices";
import Bold from "../../typography/bold-text";
import Regular from "../../typography/regular-text";
import { LOGOUT_MUTATION } from "../../services/mutation/logoutMutation";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER } from "../../services/query/userQuery";
const CustomDrawerContent = (props) => {
  const { navigation } = props;
  const { data, loading, error } = useQuery(GET_USER);
  const handleNavigate = (screenName) => {
    // console.log("Navigating to:", screenName);
    if (navigation && screenName) {
      navigation.navigate(screenName);
    }
  };

  const [logout, { loading: logoutloading }] = useMutation(LOGOUT_MUTATION, {
    onCompleted: async (data) => {
      try {
        console.log(data?.logout.message || "Successfully logged out!");
        await AsyncStorage.removeItem("auth-token");
        await AsyncStorage.setItem("is-logged-out", "true");
        setTimeout(() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        }, 100);
      } catch (error) {
        console.error("Error in logout completion:", error);
      }
    },
    onError: (error) => {
      console.error("Logout error:", error.message);
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    },
  });

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error during logout:", error.message);
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }
  };

  const menuItems = [
    {
      label: "Geo Fences",
      icon: < GeoFenceSvg/>,
      screen: "GeoFenceScreen",
    },
    {
      label: "Subscription",
      icon: <SubscriptionSvg />,
      screen: "SubscriptionScreen",
    },
    { label: "FAQ", icon: <FaqSvg />, screen: "FAQs" },
    {
      label: "Support & Helpdesk",
      icon: <SupportSvg />,
      screen: "TicketList",
    },
    { label: "Contact Us", icon: <ContactSvg />, screen: "ContactScreen" },
  ];
  const { firstName, lastName, email } = data?.getUsers[0] || {};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Bold
          label={`${firstName || "John"} ${lastName || "Smith"}`}
          style={styles.label}
        />
        <Regular label={email || "john@gmail.com"} style={styles.mail} />
      </View>
      <Line />

      <View style={styles.drawerContent}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index.toString()}
            onPress={() => handleNavigate(item.screen)}
            style={styles.menuItem}
          >
            {item?.icon}
            <Regular label={item?.label} style={styles.label} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={handleLogout}
        style={[styles.menuItem, logoutloading && styles.disabled]}
        disabled={logoutloading}
      >
        <LogoutSvg />
        <Regular
          label={logoutloading ? "Logging out..." : "Logout"}
          style={styles.label}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingLeft: mvs(44),
    paddingBottom: mvs(35),
    paddingTop: mvs(84),
    justifyContent: "center",
  },
  mail: {
    marginTop: 5,
  },
  drawerContent: {
    marginTop: mvs(15),
  },
  menuItem: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: mvs(6),
    gap: mvs(20),
    minHeight: 50,
    marginTop: "auto",
    paddingHorizontal: mvs(37),
  },
  label: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold",
  },
  disabled: {
    opacity: 0.5,
  },
});
