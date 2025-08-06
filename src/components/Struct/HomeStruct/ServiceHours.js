import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {mvs} from '../../../util/metrices';
import CircularProgressChart from '../../Charts/CircularProgressChart';
import BubbleChart from '../../Charts/BubbleChart';
import SliderProgressChart from '../../Charts/SliderProgressChart';
import {colors} from '../../../util/color';
// import { ChangeSvg, TransferSvg } from "../../../assets/svg";
import ChangeSvg from '../../../assets/svg/changeSvg';

const screenWidth = Dimensions.get('window').width;

const ServiceHours = ({title = 'Hours of Service'}) => {
  const [currentChartType, setCurrentChartType] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(1));
  const [slideAnim] = useState(new Animated.Value(0));

  const chartTypes = ['circular', 'bubble', 'slider'];

  const [progressData, setProgressData] = useState([
    {
      id: 1,
      totalTime: 8 * 60,
      currentTime: 3 * 60 + 24 + 2 / 60,
      label: 'BREAK',
      color: colors.chart.rgb_orange || colors.chart.orange,
      backgroundColor: '#E0E0E0',
    },
    {
      id: 2,
      totalTime: 9 * 60, // 9 hours in minutes
      currentTime: 6 * 60 + 24 + 2 / 60,
      label: 'DRIVE',
      color: colors.chart.rgb_green,
      backgroundColor: '#E0E0E0',
    },
    {
      id: 3,
      totalTime: 11 * 60, // 11 hours in minutes
      currentTime: 10 * 60 + 20 + 3 / 60, // 10:20:03
      label: 'SHIFT',
      color: colors.chart.rgb_blue,
      backgroundColor: '#E0E0E0',
    },
    {
      id: 4,
      totalTime: 24 * 60, // 24 hours in minutes
      currentTime: 23 * 60 + 15 + 6 / 60, // 23:15:06
      label: 'CYCLE',
      color: colors.chart.rgb_red,
      backgroundColor: '#E0E0E0',
    },
  ]);

  const handleToggleChart = () => {
    // Animate out current chart
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -100,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Switch to next chart type (cycle through 0, 1, 2)
      setCurrentChartType(prev => (prev + 1) % 3);

      // Reset animation values
      slideAnim.setValue(100);

      // Animate in new chart
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 400,
          easing: Easing.back(1.2),
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  const renderCurrentChart = () => {
    switch (currentChartType) {
      case 0: // Circular
        return (
          <View style={styles.gridContainer}>
            {progressData.map(item => (
              <View key={item.id} style={styles.chartWrapper}>
                <CircularProgressChart data={item} screenWidth={screenWidth} />
              </View>
            ))}
          </View>
        );
      case 1: // Bubble
        return (
          <BubbleChart
            data={progressData}
            screenWidth={screenWidth}
            isVisible={true}
          />
        );
      case 2: // Slider
        return (
          <SliderProgressChart data={progressData} screenWidth={screenWidth} />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.titleText}>{title}</Text>
        <TouchableOpacity
          onPress={handleToggleChart}
          style={styles.iconContainer}>
          <ChangeSvg height={mvs(22)} width={mvs(22)} />
        </TouchableOpacity>
      </View>

      {/* Horizontal line */}
      <View style={styles.divider} />

      {/* Chart container with animation */}
      <View style={styles.progressContainer}>
        <Animated.View
          style={[
            styles.animatedContainer,
            {
              opacity: fadeAnim,
              transform: [
                {
                  translateX: slideAnim,
                },
              ],
            },
          ]}>
          {renderCurrentChart()}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.base.grayBg,
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(20),
    borderRadius: mvs(12),
    // marginBottom: mvs(12),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: mvs(4),
  },
  titleText: {
    fontSize: mvs(19),
    fontWeight: 'bold',
    color: '#333',
  },
  iconContainer: {
    width: mvs(30),
    height: mvs(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: mvs(20),
  },
  divider: {
    height: 2,
    backgroundColor: '#DDD',
  },
  progressContainer: {
    flex: 1,
    minHeight: mvs(200), // Ensure consistent height
  },
  animatedContainer: {
    flex: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartWrapper: {
    width: '48%',
    alignItems: 'center',
    marginVertical: mvs(10),
  },
});

export default ServiceHours;
