import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import {
  Calling,
  Car1,
  Person,
  Person1,
  Person2,
  Star2,
} from "../../../assets/images";
import { mvs } from "../../../config/metrices";

const DriverInfo = ({
  call,
  car,
  away,
  onPress = () => {},
  item = {
    name: "John lly",
    rides: "(2000 rides)",
    rating: "4.9",
    model: "BMW M5",
    image: Person,
  },
}) => {
  return (
    <TouchableOpacity style={styles.info} onPress={onPress}>
      <View style={styles.row}>
        {away ? (
          [Person2, Person1]?.map((person, index) => (
            <Image
              key={index}
              source={person}
              style={[styles.image1, index === 1 && styles.overlappingImage]}
            />
          ))
        ) : (
          <Image source={Person} style={styles.image1} />
        )}

        <View>
          {away ? (
            <Text style={styles.text1}>Jacob Jones & Lisa Lim</Text>
          ) : (
            <View style={styles.row}>
              <Text style={styles.text1}>{item?.name} </Text>
              <Text style={styles.text3}>{item?.rides}</Text>
            </View>
          )}
          {away ? (
            <Text style={styles.text3}>50 rides</Text>
          ) : (
            <Text style={styles.text2}>{item?.model}</Text>
          )}
          {away && <Text style={styles.text2}>1 mint away</Text>}
          <View style={styles.row}>
            <Image source={Star2} style={styles.image2} />
            <Text style={styles.text2}>{item?.rating}</Text>
          </View>
        </View>
      </View>
      {call && (
        <TouchableOpacity style={styles.callingButton}>
          <Image source={Calling} style={styles.image4} />
        </TouchableOpacity>
      )}
      {car && <Image source={Car1} style={styles.image3} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: mvs(10),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image1: {
    width: mvs(50),
    height: mvs(50),
    borderRadius: mvs(25),
    marginRight: mvs(10),
  },
  overlappingImage: {
    marginLeft: mvs(-34),
  },
  image3: {
    width: mvs(100),
    height: mvs(70),
    resizeMode: "contain",
  },
  image4: {
    width: mvs(20),
    height: mvs(20),
    resizeMode: "contain",
  },
  image2: {
    width: mvs(20),
    height: mvs(20),
    resizeMode: "contain",
    marginRight: mvs(10),
  },
  text1: {
    fontSize: mvs(18),
    fontWeight: "500",
    color: "black",
  },
  text2: {
    fontSize: mvs(15),
    color: "black",
  },
  text3: {
    fontSize: mvs(15),
    color: "grey",
  },
  callingButton: {
    backgroundColor: "#9A0B09",
    width: mvs(32),
    height: mvs(32),
    borderRadius: mvs(16),
    alignItems: "center",
    justifyContent: "center",
  },
});

export { DriverInfo };
