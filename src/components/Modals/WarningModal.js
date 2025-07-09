import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import fonts from "../../assets/fonts";
import { mvs } from "../../util/metrices";
import { colors } from "../../util/color";
import ISvg from "../../assets/svg/iSvg";
import ActionButton from "../atoms/buttons/ActionButton";
import InfoBar from "../atoms/InfoBar";
import SwitchUserSvg from "../../assets/svg/switchUser";
import { XSvg } from "../../assets/svg";

// Default Info Icon SVG component (you can replace with your own)
const InfoIcon = ({ width = 50, height = 50, color = "#F5A623" }) => (
  <View style={[styles.iconContainer, { backgroundColor: color }]}>
    <Text style={styles.iconText}>i</Text>
  </View>
);

// Default Close Icon (you can replace with your CloseSvg)
const CloseIcon = ({ width = 24, height = 24, color = "#333" }) => (
  <View style={styles.closeIcon}>
    <Text style={[styles.closeText, { color }]}>×</Text>
  </View>
);

const WarningModal = ({
  // Modal visibility
  visible = false,
  onClose,

  // Content
  title = "",
  message = "",
  showIcon = true,
  IconComponent = ISvg,
  iconfill = "",

  // Close button
  showCloseButton = true,
  CloseButtonComponent = CloseIcon,

  // Action buttons
  showButtons = true,
  leftTitle = "Cancel",
  rightTitle = "Confirm",
  onLeftPress,
  onRightPress,
  infobar = false,

  // Behavior
  closeOnBackdropPress = true,
  animationType = "fade",
}) => {
  const handleBackdropPress = () => {
    if (closeOnBackdropPress && onClose) {
      onClose();
    }
  };

  const handleLeftPress = () => {
    if (onLeftPress) {
      onLeftPress();
    } else if (onClose) {
      onClose();
    }
  };

  const handleRightPress = () => {
    if (onRightPress) {
      onRightPress();
    }
  };

  const handleClosePress = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType={animationType}
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <TouchableWithoutFeedback onPress={handleBackdropPress}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={[styles.modalContainer]}>
              {/* Close Button */}
              {showCloseButton && (
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={handleClosePress}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <XSvg height={mvs(22)} width={mvs(22)} />
                </TouchableOpacity>
              )}

              <View style={[styles.content]}>
                {/* Icon */}
                {showIcon && IconComponent && (
                  <View style={styles.iconWrapper}>
                    <IconComponent
                      {...(IconComponent === ISvg ? { fill: iconfill } : {})}
                      height={mvs(35)}
                      width={mvs(35)}
                    />
                  </View>
                )}

                {/* Title */}
                {title !== "" && <Text style={[styles.title]}>{title}</Text>}

                {/* Message */}
                {message !== "" && (
                  <Text style={[styles.message]}>{message}</Text>
                )}

                {/* Info Line with Shade */}
                {infobar && (
                  <View style={{ width: "85%", marginBottom: mvs(20) }}>
                    <InfoBar
                      marginTop={0}
                      message={`It might take a few moments to proceed!`}
                    />
                  </View>
                )}

                {/* Action Buttons */}
                {showButtons && (
                  <ActionButton
                    variant="dual"
                    leftTitle={leftTitle}
                    rightTitle={rightTitle}
                    onLeftPress={handleLeftPress}
                    onRightPress={handleRightPress}
                  />
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: mvs(20),
  },
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: mvs(16),
    width: "100%",
  },
  closeButton: {
    position: "absolute",
    top: mvs(16),
    right: mvs(16),
    zIndex: 1,
  },
  closeIcon: {
    width: mvs(24),
    height: mvs(24),
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: {
    fontSize: mvs(24),
    fontWeight: "300",
    lineHeight: mvs(24),
  },
  content: {
    paddingTop: mvs(40),
    paddingBottom: mvs(10),
    alignItems: "center",
  },
  iconWrapper: {
    marginBottom: mvs(24),
  },
  iconContainer: {
    width: mvs(60),
    height: mvs(60),
    borderRadius: mvs(30),
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    color: colors.white,
    fontSize: mvs(28),
    fontWeight: "bold",
  },
  title: {
    fontSize: mvs(22),
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    marginBottom: mvs(16),
    lineHeight: mvs(28),
    fontFamily: fonts.medium,
  },
  message: {
    fontSize: mvs(16),
    paddingHorizontal: mvs(20),
    color: colors.text.primary,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: mvs(22),
    marginBottom: mvs(24),
    fontFamily: fonts.regular,
  },
  infoLineContainer: {
    width: "100%",
    marginBottom: mvs(24),
  },
  infoLine: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.base.grayBg,
    paddingVertical: mvs(12),
    paddingHorizontal: mvs(16),
    borderRadius: mvs(8),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  infoLineIcon: {
    marginRight: mvs(12),
  },
  infoLineText: {
    flex: 1,
    fontSize: mvs(15),
    color: colors.text.primary,
    fontFamily: fonts.regular,
    fontWeight: "500",
  },
  actionButtonContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    paddingBottom: 0,
  },
  cancelButton: {
    backgroundColor: colors.base.grayBg,
    borderWidth: 1,
    borderColor: colors.base.borderColor,
  },
  confirmButton: {
    backgroundColor: colors.chart.red,
  },
  cancelText: {
    color: colors.text.primary,
    fontWeight: "600",
  },
  confirmText: {
    color: colors.base.white,
    fontWeight: "600",
  },
});

export default WarningModal;
