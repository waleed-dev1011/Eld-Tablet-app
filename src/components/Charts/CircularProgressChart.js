// Child Component - CircularProgressChart.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Canvas, Circle, Path, Skia } from "@shopify/react-native-skia";
import { mvs } from "../../util/metrices";
import { colors } from "../../util/color";

const CircularProgressChart = ({
  data,
  screenWidth,
  // Optional customization props
  width,
  height,
  radius,
  strokeWidth,
  timeFontSize,
  labelFontSize,
  chartSize,
}) => {
  const { totalTime, currentTime, label, color, backgroundColor } = data;

  // Calculate progress percentage (current time / total time)
  const progressPercentage = (currentTime / totalTime) * 100;

  // Format time display (convert minutes to hours:minutes)
  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    return `${hours.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}`;
  };

  // Use custom values or defaults
  const finalChartSize = chartSize || mvs(190);
  const finalWidth = width || mvs(120);
  const finalHeight = height || mvs(120);
  const finalRadius = radius || mvs(50);
  const finalStrokeWidth = strokeWidth || 9;
  const finalTimeFontSize = timeFontSize || mvs(20);
  const finalLabelFontSize = labelFontSize || mvs(14);

  const center = finalChartSize / 2;

  // Calculate angles for progress arc
  const startAngle = -90; // Start from top
  const progressAngle = (progressPercentage / 100) * 360;

  // Create progress arc path
  const progressPath = Skia.Path.Make();
  if (progressPercentage > 0) {
    progressPath.addArc(
      {
        x: center - finalRadius,
        y: center - finalRadius,
        width: finalRadius * 2,
        height: finalRadius * 2,
      },
      startAngle,
      progressAngle
    );
  }

  // Parse RGB color string to get individual values
  const parseRgbColor = (rgbString) => {
    const values = rgbString.split(",").map((val) => parseInt(val.trim()));
    return values;
  };

  const [r, g, b] = parseRgbColor(color);
  const progressColor = `rgba(${r}, ${g}, ${b}, 1)`;
  const backgroundRingColor = "#D0D0D0"; // Light gray background ring

  return (
    <View
      style={[
        styles.chartContainer,
        {
          width: finalWidth,
          height: finalHeight,
        },
      ]}
    >
      {/* Skia Canvas for the circular progress */}
      <Canvas style={{ width: finalChartSize, height: finalChartSize }}>
        {/* Background circle - full ring */}
        <Circle
          cx={center}
          cy={center}
          r={finalRadius}
          style="stroke"
          strokeWidth={finalStrokeWidth}
          color={backgroundRingColor}
        />

        {/* Progress arc */}
        {progressPercentage > 0 && (
          <Path
            path={progressPath}
            style="stroke"
            strokeWidth={finalStrokeWidth}
            strokeCap="round"
            color={progressColor}
          />
        )}
      </Canvas>

      {/* Center Content Overlay */}
      <View style={styles.centerContent}>
        <Text style={[styles.timeText, { fontSize: finalTimeFontSize }]}>
          {formatTime(currentTime)}
        </Text>
        <Text
          style={[
            styles.labelText,
            { color: progressColor, fontSize: finalLabelFontSize },
          ]}
        >
          {label}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  centerContent: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  timeText: {
    fontWeight: "600",
    color: "#333",
    marginBottom: mvs(4),
  },
  labelText: {
    fontWeight: "600",
    letterSpacing: 1.2,
  },
});

export default CircularProgressChart;
