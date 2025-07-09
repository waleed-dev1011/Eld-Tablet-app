import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
  Image,
} from 'react-native';
import {mvs} from '../../util/metrices';
import {colors} from '../../util/color';

const {width: screenWidth} = Dimensions.get('window');

const SliderProgressChart = ({progressData}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Default progress data if none provided
  const defaultProgressData = [
    {
      id: 'break',
      title: 'BREAK',
      color: '#f97316',
      thumbColor: '#fed7aa',
      textColor: '#ea580c',
      icon: require('.././../assets/img/Cup.png'),
      totalTime: 15 * 60, // 15 minutes in seconds
      currentTime: new Date(Date.now() - 2 * 60 * 1000), // started 5 minutes ago
    },
    {
      id: 'drive',
      title: 'DRIVE',
      color: '#16a34a',
      thumbColor: '#bbf7d0',
      textColor: '#15803d',
      icon: require('.././../assets/img/steering_wheel.png'),
      totalTime: 45 * 60, // 45 minutes in seconds
      currentTime: new Date(Date.now() - 20 * 60 * 1000), // started 20 minutes ago
    },
    {
      id: 'shift',
      title: 'SHIFT',
      color: '#3b82f6',
      thumbColor: '#bfdbfe',
      textColor: '#2563eb',
      icon: require('.././../assets/img/notes.png'),
      totalTime: 8 * 60 * 60, // 8 hours in seconds
      currentTime: new Date(Date.now() - 3 * 60 * 60 * 1000), // started 3 hours ago
    },
    {
      id: 'cycle',
      title: 'CYCLE',
      color: '#dc2626',
      thumbColor: '#fecaca',
      textColor: '#dc2626',
      icon: require('.././../assets/img/cycle.png'),
      totalTime: 30 * 60, // 30 minutes in seconds
      currentTime: new Date(Date.now() - 10 * 60 * 1000), // started 10 minutes ago
    },
  ];

  const data = progressData || defaultProgressData;

  // Initialize animated values after we have the data
  const [animatedValues] = useState(() =>
    data.map(() => new Animated.Value(0)),
  );

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Animate progress bars
  useEffect(() => {
    data.forEach((item, index) => {
      const progress = calculateProgress(item);
      Animated.timing(animatedValues[index], {
        toValue: progress,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    });
  }, [currentTime, data, animatedValues]);

  const calculateProgress = item => {
    const now = currentTime;
    const elapsed = (now - item.currentTime) / 1000; // elapsed time in seconds
    const progress = Math.min(elapsed / item.totalTime, 1); // clamp to 1
    return Math.max(progress, 0); // ensure non-negative
  };

  const formatTime = date => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const ProgressBar = ({item, animatedValue, index}) => {
    const progress = calculateProgress(item);
    const progressBarWidth = (screenWidth - 100) / 2; // Account for padding and margins

    // Safety check for animatedValue
    if (!animatedValue) {
      return null;
    }

    return (
      <View style={styles.progressContainer}>
        <Text style={[styles.title, {color: item.textColor}]}>
          {item.title}
        </Text>

        <View style={styles.progressWrapper}>
          {/* Time display that moves with thumb */}
          <Animated.View
            style={[
              styles.timeDisplay,
              {
                left: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, progressBarWidth - 140], // 60 is time display width
                }),
              },
            ]}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
            </View>
          </Animated.View>

          {/* Progress bar container */}
          <View style={styles.progressBarContainer}>
            {/* Progress fill */}
            <Animated.View
              style={[
                styles.progressFill,
                {
                  backgroundColor: item.color,
                  width: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%'],
                  }),
                },
              ]}
            />

            {/* Animated thumb with emoji */}
            <Animated.View
              style={[
                styles.thumb,
                {
                  // backgroundColor: item.thumbColor,
                  left: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, progressBarWidth - 130], // 48 is thumb width
                  }),
                },
              ]}>
              <Image
                source={item.icon}
                style={{height: mvs(25), width: mvs(25)}}
              />
            </Animated.View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.content}>
      <View style={styles.row}>
        {animatedValues[0] && (
          <ProgressBar
            key={data[0].id}
            item={data[0]}
            animatedValue={animatedValues[0]}
            index={0}
          />
        )}
        {animatedValues[1] && (
          <ProgressBar
            key={data[1].id}
            item={data[1]}
            animatedValue={animatedValues[1]}
            index={1}
          />
        )}
      </View>
      <View style={styles.row}>
        {animatedValues[2] && (
          <ProgressBar
            key={data[2].id}
            item={data[2]}
            animatedValue={animatedValues[2]}
            index={2}
          />
        )}
        {animatedValues[3] && (
          <ProgressBar
            key={data[3].id}
            item={data[3]}
            animatedValue={animatedValues[3]}
            index={3}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 30,
  },
  progressContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    flex: 1,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.border2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  progressWrapper: {
    position: 'relative',
  },
  timeDisplay: {
    position: 'absolute',
    top: -40,
    zIndex: 10,
  },
  timeContainer: {
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 4,

    right: 10,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: '#374151',
    fontWeight: '600',
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    position: 'relative',
    overflow: 'visible',
  },
  progressFill: {
    height: '100%',
    borderRadius: 8,
  },
  thumb: {
    position: 'absolute',
    top: -20,
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 20,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  progressText: {
    fontSize: 14,
    color: '#6b7280',
  },
  currentTimeContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  currentTimeWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  currentTimeText: {
    fontSize: 16,
    fontFamily: 'monospace',
    color: '#374151',
    fontWeight: '600',
  },
});

export default SliderProgressChart;
