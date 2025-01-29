// useModalAnimation.js
import { useRef, useState } from "react";
import { Animated, PanResponder } from "react-native";

const SNAP_POINTS = { closed: 80, open: 400 };

export const useModalAnimation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const modalHeight = useRef(new Animated.Value(SNAP_POINTS.closed)).current;

  const snapTo = (toValue) => {
    Animated.timing(modalHeight, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setIsExpanded(toValue === SNAP_POINTS.open));
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newHeight = Math.max(
          SNAP_POINTS.closed,
          Math.min(SNAP_POINTS.open, SNAP_POINTS.open - gestureState.dy)
        );
        modalHeight.setValue(newHeight);
      },
      onPanResponderRelease: (e, gestureState) => {
        const dragDirection = gestureState.dy > 0 ? "down" : "up";
        const currentHeight = SNAP_POINTS.open - gestureState.dy;

        if (
          dragDirection === "up" &&
          currentHeight > (SNAP_POINTS.open - SNAP_POINTS.closed) / 2
        ) {
          snapTo(SNAP_POINTS.open);
        } else {
          snapTo(SNAP_POINTS.closed);
        }
      },
    })
  ).current;

  return { modalHeight, panResponder, isExpanded };
};
