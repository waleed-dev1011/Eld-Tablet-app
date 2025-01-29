import React, { useState } from "react";
import { ScrollView, StyleSheet, Switch, View, Modal, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowRight } from "../../../assets/images";
import Line from "../../../components/atoms/line";
import { HomeHeader } from "../../../components/molicules/home-header";
import ProfileCard from "../../../components/molicules/ProfileCard";
import { mvs } from "../../../config/metrices";
import { colors } from "../../../config/colors";
import { DeleteModal } from "../../../components/molicules";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isToggled, setIsToggled] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleSwitchToggle = () => {
    if (!isToggled) {
      setShowModal(true);
    } else {
      setIsToggled(!isToggled);
    }
  };

  const handleModalAction = (action) => {
    setShowModal(false);
    if (action === "yes") {
      setIsToggled(true);
      navigation.navigate("ProfileScreen");
    } else {
      navigation.navigate("InitialScreen");
    }
  };

  const data = [
    {
      title: "Profile Setting",
      icon2: ArrowRight,
      onPress: () => navigation.navigate("SettingScreen"),
    },
    {
      title: "Password Setting",
      icon2: ArrowRight,
      onPress: () => navigation.navigate("EditPassword"),
    },
    {
      title: "Notification",
      icon2: (
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isToggled ? colors.primary : "#f4f3f4"}
          onValueChange={handleSwitchToggle}
          value={isToggled}
        />
      ),
    },
    {
      title: "Delete Account",
      onPress: () => setShowDeleteModal(true),
      style: { backgroundColor: "#CB292B"+20 }, 
      textStyle: { color: colors.red1 }, 
    },
  ];

  return (
    <ScrollView style={styles.cont} contentContainerStyle={{ paddingBottom: 80 }}>
      <HomeHeader
        title="Profile"
        handleNotification={() => navigation.navigate("NotificationScreen")}
      />
      <Line marginVertical={15} bgColor="white" />
      {data?.map((item, index) => (
        <View key={index} style={{ alignSelf: "center" }}>
          <ProfileCard item={item} touchable={true} />
        </View>
      ))}

    
      <Modal
        transparent={true}
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Your notifications are off. Do you want to open it?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => handleModalAction("no")} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleModalAction("yes")} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

  
      <DeleteModal
        visible={showDeleteModal}
        onClose={() => setShowDeleteModal(false)} 
        // onConfirm={() => {
        //   setShowDeleteModal(false);
        //   alert("Account deleted!"); 
        // }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  modalButton: {
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
    width: "40%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ProfileScreen;
