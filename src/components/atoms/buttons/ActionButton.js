import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { mvs } from "../../../util/metrices";
import { colors } from "../../../util/color";

const ActionButton = ({
  // Single button props
  title,
  onPress,
  buttonStyle,
  textStyle,

  // Dual button props
  leftTitle,
  rightTitle,
  onLeftPress,
  onRightPress,
  leftButtonStyle,
  rightButtonStyle,
  leftTextStyle,
  rightTextStyle,

  // Container props
  containerStyle,
  activeOpacity = 0.8,

  // Button type for predefined styles
  type = "default", // 'default', 'primary', 'secondary', 'cancel', 'confirm'

  // Layout
  variant = "single", // 'single' or 'dual'
}) => {
  const getButtonStyle = (buttonType) => {
    switch (buttonType) {
      case "primary":
        return styles.primaryButton;
      case "secondary":
        return styles.secondaryButton;
      case "cancel":
        return styles.cancelButton;
      case "confirm":
        return styles.confirmButton;
      default:
        return styles.defaultButton;
    }
  };

  const getTextStyle = (buttonType) => {
    switch (buttonType) {
      case "primary":
        return styles.primaryText;
      case "secondary":
        return styles.secondaryText;
      case "cancel":
        return styles.cancelText;
      case "confirm":
        return styles.confirmText;
      default:
        return styles.defaultText;
    }
  };

  if (variant === "dual") {
    return (
      <View style={[styles.bottomContainer, containerStyle]}>
        <TouchableOpacity
          onPress={onLeftPress}
          style={[styles.flexButton, getButtonStyle("cancel"), leftButtonStyle]}
          activeOpacity={activeOpacity}
        >
          <Text style={[getTextStyle("cancel"), leftTextStyle]}>
            {leftTitle || "Cancel"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onRightPress}
          style={[
            styles.flexButton,
            rightButtonStyle,
            getButtonStyle("confirm"),
            {
              borderWidth: 0,
            },
          ]}
          activeOpacity={activeOpacity}
        >
          <Text style={[getTextStyle("confirm"), rightTextStyle]}>
            {rightTitle || "Confirm"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.singleContainer, containerStyle]}>
      <TouchableOpacity
        style={[getButtonStyle(type), buttonStyle]}
        onPress={onPress}
        activeOpacity={activeOpacity}
      >
        <Text style={[getTextStyle(type), textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Container styles
  bottomContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 12,
  },
  singleContainer: {
    paddingHorizontal: 18,
    paddingVertical: 20,
    paddingBottom: 30,
  },

  // Button base styles
  flexButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    borderColor: colors.border,
    borderWidth: 2,
  },
  defaultButton: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: colors.chart.primary,
  },
  primaryButton: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: colors.chart.primary,
  },
  secondaryButton: {
    paddingVertical: mvs(13),
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: colors.base.grayBg,
  },
  cancelButton: {
    paddingVertical: mvs(11),
    backgroundColor: colors.base.grayBg,
    borderRadius: 8,
    alignItems: "center",
  },
  confirmButton: {
    paddingVertical: mvs(11),
    backgroundColor: colors.btn.primary,
    borderRadius: 8,
    alignItems: "center",
  },

  // Text styles
  defaultText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  primaryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  secondaryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  cancelText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  confirmText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});

export default ActionButton;
