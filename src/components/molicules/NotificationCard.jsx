import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../config/colors";

const NotificationCard = ({ item, num = 1 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.view2}>
        <View style={{}}>
          <Text style={styles.time}>{item?.title}</Text>
          <Text style={styles.message}>{item?.message}</Text>
        </View>
      </View>
      <Text style={styles.time}>{item?.time}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image1: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
  },
  message: {
    fontSize: 14,
    fontWeight: "400",
    color: "black",
  },
  time: {
    fontSize: 12,
    color: colors.grey,
  },
});
export default NotificationCard;
