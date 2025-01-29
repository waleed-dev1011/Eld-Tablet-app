import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import NotificationCard from "../../../components/molicules/NotificationCard";
import { HomeHeader } from "../../../components/molicules/home-header";
import { colors } from "../../../config/colors";

const NotificationScreen = () => {
  const notificationData = [
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
   
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
    {
      title: "Lorem ipsum",
      message: "Lorem ipsum",
      time: "11:05 pm 29/10/2024 ",
    },
  ];
  return (
    <ScrollView
      style={styles.cont}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <HomeHeader back title="Notification" noti />
      {notificationData?.map((item, index) => (
        <View style={{borderBottomWidth:1,borderBottomColor:colors.gray}} key={index}>
          <NotificationCard item={item} />
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cont: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.white,
  },
  auth: {
    alignItems: "center",
    paddingVertical: 6,
  },
});

export default NotificationScreen;
