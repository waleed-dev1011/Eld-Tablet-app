import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {
  Canvas,
  Circle,
  Text,
  Path,
  Skia,
  matchFont,
} from '@shopify/react-native-skia';
import {mvs} from '../../util/metrices';
import {colors} from '../../util/color';

// const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const screenWidth = mvs(400);
const screenHeight = mvs(400);

const BubbleChart = ({timers}) => {
  // Layout configuration for each timer by ID
  const timerLayouts = {
    1: {
      // BREAK
      radius: mvs(52 - 10),
      offsetX: mvs(-110),
      offsetY: mvs(-95),
      strokeWidth: mvs(4.5),
    },
    2: {
      // DRIVE
      radius: mvs(59 - 10),
      offsetX: mvs(-60),
      offsetY: mvs(-20),
      strokeWidth: mvs(4.5),
    },
    3: {
      // SHIFT
      radius: mvs(65 - 10),
      offsetX: mvs(20),
      offsetY: mvs(-91),
      strokeWidth: mvs(4.5),
    },
    4: {
      // CYCLE
      radius: mvs(75 - 10),
      offsetX: mvs(95),
      offsetY: mvs(-5),
      strokeWidth: mvs(4.5),
    },
  };

  // Default/fallback timer data for development
  const defaultTimers = [
    {
      id: 1,
      totalTime: 8 * 60, // 8 hours in minutes
      currentTime: 6 * 60 + 24 + 2 / 60, // 6:24:02
      label: 'BREAK',
      color: colors.chart.orange, // colors.chart.rgb_orange
      backgroundColor: '#E0E0E0',
    },
    {
      id: 2,
      totalTime: 9 * 60, // 9 hours in minutes
      currentTime: 6 * 60 + 24 + 2 / 60, // 6:24:02
      label: 'DRIVE',
      color: colors.chart.green, // colors.chart.rgb_green
      backgroundColor: '#E0E0E0',
    },
    {
      id: 3,
      totalTime: 11 * 60, // 11 hours in minutes
      currentTime: 10 * 60 + 20 + 3 / 60, // 10:20:03
      label: 'SHIFT',
      color: colors.chart.blue, // colors.chart.rgb_blue
      backgroundColor: '#E0E0E0',
    },
    {
      id: 4,
      totalTime: 24 * 60, // 24 hours in minutes
      currentTime: 23 * 60 + 15 + 6 / 60, // 23:15:06
      label: 'CYCLE',
      color: colors.chart.red, // colors.chart.rgb_red
      backgroundColor: '#E0E0E0',
    },
  ];

  // Use provided timers or fall back to default
  const timerData = timers || defaultTimers;

  const centerX = screenWidth / 2;
  const centerY = screenHeight / 2;

  const globalSettings = {
    innerBorderWidth: 3,
    progressBackgroundColor: '#E0E0E0',
    timeFontSize: mvs(15),
    labelFontSize: mvs(13),
    spacingMultiplier: 1.0,
  };

  // Helper function to convert minutes to HH:MM:SS format
  const formatTime = minutes => {
    const totalSeconds = Math.floor(minutes * 60);
    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const timeFont = React.useMemo(() => {
    try {
      return matchFont({
        fontFamily: 'Arial',
        fontSize: globalSettings.timeFontSize,
        fontWeight: 'bold',
      });
    } catch (error) {
      console.warn('Time font creation failed:', error);
      return null;
    }
  }, [globalSettings.timeFontSize]);

  const labelFont = React.useMemo(() => {
    try {
      return matchFont({
        fontFamily: 'Arial',
        fontSize: globalSettings.labelFontSize,
        fontWeight: '600',
      });
    } catch (error) {
      console.warn('Label font creation failed:', error);
      return null;
    }
  }, [globalSettings.labelFontSize]);

  const createProgressPath = (cx, cy, r, progress) => {
    const path = Skia.Path.Make();
    const startAngle = -90; // Start from top (12 o'clock position)
    const sweepAngle = progress * 360;

    if (progress === 0) return path;

    const rect = Skia.XYWHRect(cx - r, cy - r, r * 2, r * 2);

    if (progress >= 1) {
      // Full circle for 100% progress
      path.addCircle(cx, cy, r);
    } else {
      // Arc for partial progress
      path.addArc(rect, startAngle, sweepAngle);
    }

    return path;
  };

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        {timerData.map((timer, index) => {
          // Get layout configuration for this timer
          const layout = timerLayouts[timer.id];

          if (!layout) {
            console.warn(
              `No layout configuration found for timer ID: ${timer.id}`,
            );
            return null;
          }

          // Calculate progress (currentTime / totalTime)
          const progress = Math.min(timer.currentTime / timer.totalTime, 1);

          // Format the time display
          const timeDisplay = formatTime(timer.currentTime);

          const finalX =
            centerX + layout.offsetX * globalSettings.spacingMultiplier;
          const finalY =
            centerY + layout.offsetY * globalSettings.spacingMultiplier;

          const minX = layout.radius + layout.strokeWidth + 20;
          const maxX = screenWidth - layout.radius - layout.strokeWidth - 20;
          const minY = layout.radius + layout.strokeWidth + 20;
          const maxY = screenHeight - layout.radius - layout.strokeWidth - 20;

          const boundedX = Math.max(minX, Math.min(maxX, finalX));
          const boundedY = Math.max(minY, Math.min(maxY, finalY));

          const progressPath = createProgressPath(
            boundedX,
            boundedY,
            layout.radius + layout.strokeWidth,
            progress,
          );

          // Measure text width to center it properly - with fallback
          let timeTextWidth = 0;
          let labelTextWidth = 0;

          if (timeFont) {
            try {
              timeTextWidth = timeFont.measureText(timeDisplay).width;
            } catch (error) {
              timeTextWidth =
                timeDisplay.length * (globalSettings.timeFontSize * 0.6);
            }
          } else {
            timeTextWidth =
              timeDisplay.length * (globalSettings.timeFontSize * 0.6);
          }

          if (labelFont) {
            try {
              labelTextWidth = labelFont.measureText(timer.label).width;
            } catch (error) {
              labelTextWidth =
                timer.label.length * (globalSettings.labelFontSize * 0.6);
            }
          } else {
            labelTextWidth =
              timer.label.length * (globalSettings.labelFontSize * 0.6);
          }

          return (
            <React.Fragment key={timer.id}>
              {/* Outer gray ring (background) - shows the full circle progress track */}
              <Circle
                cx={boundedX}
                cy={boundedY}
                r={layout.radius + layout.strokeWidth}
                color={
                  timer.backgroundColor ||
                  globalSettings.progressBackgroundColor
                }
                style="stroke"
                strokeWidth={layout.strokeWidth}
              />

              {/* Progress arc - colored ring showing progress percentage */}
              <Path
                path={progressPath}
                color={timer.color}
                style="stroke"
                strokeWidth={layout.strokeWidth}
                strokeCap="round"
              />

              {/* Main filled circle - the solid colored circle */}
              <Circle
                cx={boundedX}
                cy={boundedY}
                r={layout.radius}
                color={timer.color}
              />

              {/* Time text - the main time display - centered horizontally and vertically */}
              <Text
                x={boundedX - timeTextWidth / 2}
                y={boundedY + globalSettings.timeFontSize * 0.35}
                text={timeDisplay}
                color="white"
                fontSize={globalSettings.timeFontSize}
                font={timeFont}
              />

              {/* Label text - the category name below time - centered horizontally */}
              <Text
                x={boundedX - labelTextWidth / 2}
                y={
                  boundedY +
                  globalSettings.timeFontSize * 0.35 +
                  globalSettings.labelFontSize +
                  2
                }
                text={timer.label}
                color="white"
                fontSize={globalSettings.labelFontSize}
                font={labelFont}
              />
            </React.Fragment>
          );
        })}
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(194, 193, 205)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvas: {
    width: screenWidth,
    height: screenHeight - 100,
  },
});

export default BubbleChart;
