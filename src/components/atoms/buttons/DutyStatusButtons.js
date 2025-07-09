import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { mvs } from "../../../util/metrices";
import { colors } from "../../../util/color";
import OnDutySvg from "../../../assets/svg/onDutySvg";
import SleepSvg from "../../../assets/svg/sleepSvg";
import PauseSvg from "../../../assets/svg/pauseSvg";

const DutyStatusButtons = ({
  showTimeBar = true,
  activeButton = "onDuty", // 'onDuty', 'sleep', 'offDuty'
  timeText = "10:45 23",
  inactiveBackgroundColor = "#F5F5F5",
  onButtonPress = () => {},
  buttonSpacing = 16,
}) => {
  const buttons = [
    {
      id: "onDuty",
      title: "On Duty",
      icon: "⚫",
      activeColor: colors.btn.red,
      inactiveColor: "#FF6B7A",
    },
    {
      id: "sleep",
      title: "Sleep",
      icon: "⏹️",
      activeColor: colors.btn.yellow,
      inactiveColor: "#FFD700",
    },
    {
      id: "offDuty",
      title: "Off Duty",
      icon: "⏸️",
      activeColor: colors.btn.blue,
      inactiveColor: "#4ECDC4",
    },
  ];

  const renderButton = (button) => {
    const isActive = activeButton === button.id;
    const backgroundColor = isActive
      ? button.activeColor
      : inactiveBackgroundColor;
    const textColor = isActive ? "#FFFFFF" : "#8A8A8A";
    const iconColor = isActive && "#FFFFFF";

    return (
      <TouchableOpacity
        key={button.id}
        style={[
          styles.button,
          {
            backgroundColor,
            borderRadius: 10,
            ...(!isActive && {
              borderWidth: 2,
              borderColor: colors.border,
            }),
          },
        ]}
        onPress={() => onButtonPress(button.id)}
        activeOpacity={0.8}
      >
        <View style={styles.buttonContent}>
          <View style={[styles.iconContainer]}>
            <View style={[styles.icon]}>
              {button.id === "onDuty" && <OnDutySvg fill={iconColor} />}
              {button.id === "sleep" && <SleepSvg fill={iconColor} />}
              {button.id === "offDuty" && <PauseSvg fill={iconColor} />}
            </View>
          </View>
          <Text style={[styles.buttonText, { color: textColor }]}>
            {button.title}
          </Text>
          {isActive && showTimeBar && (
            <View
              style={[styles.timeBar, { backgroundColor: "rgba(0,0,0,0.4)" }]}
            >
              <Text style={styles.timeText}>{timeText}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.container,
        { paddingHorizontal: buttonSpacing / 2, gap: mvs(12) },
      ]}
    >
      {buttons.map(renderButton)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: mvs(0),
  },
  button: {
    flex: 1,
    maxHeight: mvs(90),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContent: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: mvs(20),
    paddingBottom: mvs(30),
    paddingHorizontal: mvs(16),
  },
  iconContainer: {
    borderRadius: mvs(30),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: mvs(10),
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerDot: {
    width: mvs(12),
    height: mvs(12),
    borderRadius: 6,
  },
  square: {
    width: 16,
    height: 120,
    borderRadius: 2,
  },
  pauseIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 16,
  },
  pauseBar: {
    width: 5,
    height: 16,
    borderRadius: 1,
  },
  buttonText: {
    fontSize: mvs(14),
    fontWeight: "500",
    textAlign: "center",
  },
  timeBar: {
    position: "absolute",
    bottom: mvs(2),
    left: 0,
    right: 0,
    paddingVertical: mvs(3),
    paddingHorizontal: 12,
    borderBottomLeftRadius: mvs(10),
    borderBottomRightRadius: mvs(10),
  },
  timeText: {
    color: "#FFFFFF",
    fontSize: mvs(12),
    fontWeight: "600",
    textAlign: "center",
  },
});

export default DutyStatusButtons;
