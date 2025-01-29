import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import SelectDropdown from "react-native-select-dropdown";
import { Down } from "../../assets/images";
import countries from "../../data/countries.json";
import { colors } from "../../config/colors";

const TextField = ({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  toggleIcon,
  num = false,
  copy,
  touchable = false,
  itemm,
  second,
  touchable2 = false,
  touchable3 = false,
  help = false,
}) => {
  const [isTextHidden, setIsTextHidden] = useState(secureTextEntry);
  const [country, setCountry] = useState("1");

  const handleIconPress = () => {
    if (toggleIcon) {
      setIsTextHidden(!isTextHidden);
    }
  };

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.code}</Text>
      </View>
    );
  };
  const getItemColor = (help, title) => {
    if (title === "www.facebook.com" || title === "www.google.com")
      return "#0063F5";
    if (help) return "#000";

    return "#9A0B09";
  };

  return (
    <View
      style={[
        styles.inputContainer,
        {
          width: second ? "100%" : "90%",
          backgroundColor: touchable3 && !help ? colors.red + 50 : colors.gray,
        },
      ]}
    >
      {num && (
        <View
          style={{ marginLeft: 2, flexDirection: "row", alignItems: "center" }}
        >
          <SelectDropdown
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            value={country}
            data={countries}
            valueField="name"
            labelField="code"
            imageField="flag"
            onSelect={(selectedItem, index) => {
              setCountry(selectedItem.code);
            }}
            // onChange={e => {
            //   setCountry(e.name)
            // }}
            renderItem={renderItem}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  {/* {selectedItem && (
                    <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
                  )} */}
                  <Text style={{ color: "#000", fontSize: 16 }}>
                    {(selectedItem && selectedItem.code) || "PK"}
                  </Text>
                  <Image
                    source={Down}
                    style={{ width: 20, height: 20, resizeMode: "contain" }}
                  />
                  {/* <Icon name={isOpened ? 'arrow-up' : 'arrow-down'} type='ionicon' color={'#000'} size={20} /> */}
                </View>
              );
            }}
          />
          <Text style={styles.selectedTextStyle}>
            {countries.find((c) => c.code === country)?.dial_code || "+92"}
          </Text>
        </View>
      )}
      {touchable ? (
        <TouchableOpacity style={styles.withtouch} onPress={itemm?.onPress}>
          <View style={styles.touchview}>
            <View
              style={{ alignItems: "center", flexDirection: "row", gap: 10 }}
            >
              <Image
                source={itemm?.icon}
                style={[styles.imageStyle, { width: 25, height: 25 }]}
              />
              <Text style={styles.itemText}>{itemm?.title}</Text>
            </View>
            {itemm?.icon2 !== null && (
              <Image
                source={itemm?.icon2}
                style={[styles.imageStyle, { width: 17, height: 17 }]}
              />
            )}
          </View>
        </TouchableOpacity>
      ) : touchable2 ? (
        <TouchableOpacity style={styles.withtouch} onPress={itemm?.onPress}>
          <View style={styles.touchview}>
            <Text numberOfLines={1} style={[styles.itemText]}>
              {itemm?.title}
            </Text>
            <Text style={styles.itemText}>{itemm?.text}</Text>
            {itemm.icon && (
              <Switch
                trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
                thumbColor={"#fff"}
                ios_backgroundColor="#3e3e3e"
                // onValueChange={toggleSwitch}
                // value={isEnabled}
              />
            )}
          </View>
        </TouchableOpacity>
      ) : touchable3 ? (
        <TouchableOpacity style={[styles.withtouch]} onPress={itemm?.onPress}>
          <View style={styles.touchview}>
            <Text
              style={[
                styles.itemText,
                {
                  color: getItemColor(help, itemm?.title),
                  textDecorationLine:
                    getItemColor(help, itemm?.title) == "#0063F5"
                      ? "underline"
                      : "none",
                },
              ]}
            >
              {itemm?.title}
            </Text>
            {copy && <TouchableOpacity>{copy}</TouchableOpacity>}
          </View>
        </TouchableOpacity>
      ) : (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#000"
          secureTextEntry={isTextHidden}
          value={value}
          onChangeText={onChangeText}
          keyboardType={num ? "phone-pad" : "default"}
        />
      )}

      {toggleIcon && (
        <TouchableOpacity onPress={handleIconPress}>
          <Icon
            name={isTextHidden ? "eye-off-outline" : "eye-outline"}
            type="ionicon"
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  dropdown: {
    height: 40,
    width: 65,
    backgroundColor: "#E7E6EB",
    borderRadius: 22,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#000",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#000",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  itemText: {
    fontSize: 16,
    color: "black",
  },
  item: {},
  withtouch: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  touchview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownButtonStyle: {
    width: 40,
    flexDirection: "row",
    alignItems: "center",
  },
});

export { TextField };
