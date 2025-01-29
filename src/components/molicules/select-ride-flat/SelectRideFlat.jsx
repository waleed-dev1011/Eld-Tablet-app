import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Car1 } from "../../../assets/images";
import { SelectRide } from "../SelectRide";

const SelectRideFlat = ({
  selected,
  setSelected,
  setSecond,
  setData,
  onCarDetailPress,
}) => {
  const cars = [
    {
      id: 1,
      title: "Standard Car",
      image: Car1,
    },
    {
      id: 2,
      title: "Car23",
      image: Car1,
    },
    {
      id: 3,
      title: "Car45",
      image: Car1,
    },
    {
      id: 4,
      title: "Car56",
      image: Car1,
    },
    {
      id: 5,
      title: "Car67",
      image: Car1,
    },
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.itemCont, { marginLeft: item.id == 1 ? 20 : 0 }]}>
      <SelectRide
        item={item}
        onCarDetailPress={onCarDetailPress}
        selected={selected}
        setSelected={setSelected}
        setSecond={setSecond}
        setData={setData}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    marginHorizontal: -20,
  },
  itemCont: {
    marginRight: 9,
  },
});

export { SelectRideFlat };
