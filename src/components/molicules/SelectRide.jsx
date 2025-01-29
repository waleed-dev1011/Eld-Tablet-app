import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { CarDetailImg } from "../../assets/images";
import { colors } from "../../config/colors";

const SelectRide = ({
  item,
  selected,
  setSelected,
  setData,
  onCarDetailPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: selected == item.id ? colors.gray : colors.white },
      ]}
      onPress={() => {
        setSelected(item?.id);
      }}
    >
      {selected == item?.id && (
        <TouchableOpacity
          style={styles.detail}
          onPress={() => onCarDetailPress(item)}
        >
          <Image source={CarDetailImg} style={styles?.image2} />
        </TouchableOpacity>
      )}
      <Image source={item?.image} style={styles.image1} />
      <Text
        style={[
          styles.text1,
          { fontWeight: selected == item.id ? "700" : "400" },
        ]}
      >
        {item?.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.gray,
    paddingVertical: 15,
    paddingHorizontal: 17,
  },
  text1: {
    fontWeight: "400",
    fontSize: 13,
    color: colors.black,
  },
  image1: {
    width: 60,
    height: 50,
    resizeMode: "contain",
  },
  image2: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
  detail: {
    position: "absolute",
    right: 6,
    top: 6,
  },
});

export { SelectRide };
