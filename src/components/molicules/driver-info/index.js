import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Calling, Car1, Person, Star2 } from "../../../assets/images";

const DriverInfo = ({
  call,
  car,
  onPress = () => {},
  item = {
    name: "John lly",
    rides: "2000 rides",
    rating: "4.9",
    model: "BMW M5",
    image: Person,
  },
}) => {
  return (
    <TouchableOpacity style={styles.info} onPress={onPress}>
      <View style={{ flexDirection: "row" }}>
        <Image source={item?.image} style={styles.image1} />
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text1}>{item?.name} </Text>
            <Text style={styles.text3}>{`(${item?.rides})`}</Text>
          </View>
          <Text style={styles.text2}>{item?.model}</Text>
          {/* {n !== 3 && <Text style={styles.text2}>1 mint away</Text>} */}
          <View style={{ flexDirection: "row" }}>
            <Image source={Star2} style={styles.image2} />
            <Text style={styles.text2}>{item?.rating}</Text>
          </View>
        </View>
      </View>
      {call && (
        <TouchableOpacity style={styles.callingbutton}>
          <Image source={Calling} style={styles.image4} />
        </TouchableOpacity>
      )}
      {car && <Image source={Car1} style={styles.image3} />}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  image1: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  image3: {
    width: 100,
    height: 70,
    resizeMode: "contain",
  },
  image4: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  image2: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 10,
  },
  info: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
  text2: {
    fontSize: 15,
    color: "black",
  },
  text3: {
    fontSize: 15,
    color: "grey",
  },
  callingbutton: {
    backgroundColor: "#9A0B09",
    width: 32,
    height: 32,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default DriverInfo;
