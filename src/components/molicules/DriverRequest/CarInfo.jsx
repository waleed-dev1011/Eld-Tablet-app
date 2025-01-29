import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { mvs } from "../../../config/metrices";

const CarInfo = ({ seats = "5 Seats", bags = "3 luggage bags", column }) => {
  return (
    <View
      style={[styles.info, column ? styles.columnLayout : styles.rowLayout]}
    >
      <View style={styles.row}>
        <Icon name="call-outline" type="ionicon" size={mvs(20)} />
        <Text style={styles.text2}>{seats}</Text>
      </View>
      <View style={styles.row}>
        <Icon name="briefcase-outline" type="ionicon" size={mvs(20)} />
        <Text style={styles.text2}>{bags}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    marginVertical: mvs(10),
  },
  rowLayout: {
    flexDirection: "row",
    gap: mvs(20),
  },
  columnLayout: {
    flexDirection: "column",
    gap: mvs(10),
  },
  row: {
    flexDirection: "row",
    gap: mvs(10),
  },
  text2: {
    fontSize: mvs(15),
    color: "black",
  },
});

export { CarInfo };
