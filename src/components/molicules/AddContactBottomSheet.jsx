import React, { useEffect, useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { TextField } from "./TextField";
import { MyButton } from "./MyButton";

const AddContactBottomSheet = ({ onClose, second }) => {
  const refRBSheet = useRef();
  useEffect(() => {
    refRBSheet.current.open();
  }, []);

  return (
    <View style={styles.container}>
      <RBSheet
        ref={refRBSheet}
        height={290}
        openDuration={300}
        closeDuration={200}
        onClose={onClose}
        closeOnPressMask={true}
        closeOnPressBack={true}
        draggable={true}
        dragOnContent={true}
        useNativeDriver={false}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <ScrollView contentContainerStyle={styles.sheetContent}>
          <View style={styles.driverSearching}>
            <TextField
              placeholder="Full Name"
              second={true}
              // value={name}
              // onChangeText={setName}
            />
            <TextField
              num={true}
              second={true}
              placeholder=""
              // value={phone}
              // onChangeText={setPhone}
            />
            <View style={{ marginTop: 20, width: "100%" }}>
              <MyButton
                title="Save Contact"
                onPress={onClose}
                disabled={false}
              />
            </View>
          </View>
        </ScrollView>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sheetContent: {
    padding: 20,
  },
  sheetText: {
    fontSize: 17,
    color: "#000",
    fontWeight: "600",
  },
  view1: {},
  image1: {
    width: 120,
    height: 70,
    resizeMode: "cover",
  },
  text2: {
    color: "#000314",
    fontSize: 14,
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    color: "black",
  },
  text1: {
    color: "black",
    fontWeight: "500",
    fontSize: 17,
  },
  driverSearching: {},
});

export { AddContactBottomSheet };
