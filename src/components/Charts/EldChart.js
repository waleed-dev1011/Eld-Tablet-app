import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {mvs} from '../../util/metrices';

const ChartComponent = () => {
  const headerLabels = [
    'M',
    ...Array.from({length: 11}, (_, i) => `${i + 1}`),
    'N',
    ...Array.from({length: 11}, (_, i) => `${i + 1}`),
    'M',
  ];

  const leftLabels = ['OFF', 'SB', 'DR', 'ON'];
  const rightLabel = '11:30';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {/* Header row */}
        <View style={styles.chartRowWithLabels}>
          <View style={styles.sideLabel}>
            <Text style={styles.sideLeftText} />
          </View>
          <View style={styles.chartRow}>
            {headerLabels.map((label, index) => (
              <Text key={index} style={styles.chartHourText}>
                {label}
              </Text>
            ))}
          </View>
          {/* <View style={styles.sideLabel}>
            <Text style={styles.sideRightLabel}>{rightLabel}</Text>
          </View> */}
        </View>

        {/* Chart grid rows */}
        {leftLabels.map((leftLabel, rowIndex) => (
          <View key={rowIndex} style={styles.chartRowWithLabels}>
            {/* Left label */}
            <View style={styles.sideLabel}>
              <Text style={styles.sideLeftText}>{leftLabel}</Text>
            </View>

            {/* Chart cells */}
            <View style={styles.chartRow}>
              {headerLabels.map((_, colIndex) => (
                <View key={colIndex} style={styles.chartCell} />
              ))}
            </View>

            {/* Right label */}
            <View style={styles.sideLabel}>
              <Text style={styles.sideRightLabel}>{rightLabel}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ChartComponent;
const screenWidth = Dimensions.get('window').width;
const sideLabelWidth = 50;
const paddingBuffer = 20; // total horizontal padding
const availableWidth = screenWidth - sideLabelWidth * 2 - paddingBuffer;
const numCols = 24;
const cellSize = availableWidth / numCols;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: mvs(5),
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#f4f4f4',
    borderRadius: mvs(15),
    paddingHorizontal: mvs(15),
  },
  chartWrapper: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
    elevation: 2,
  },
  chartRowWithLabels: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  chartRow: {
    flexDirection: 'row',
  },
  chartHourText: {
    fontSize: 11,
    paddingHorizontal: mvs(20),
    textAlign: 'center',
    color: '#333',
  },
  chartCell: {
    alignSelf: 'center',
    width: mvs(47),
    height: cellSize * 0.7,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fafafa',
  },
  sideLabel: {
    width: mvs(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideLeftText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#444',
  },
  sideRightLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#444',
  },
  chartLine: {
    height: 2,
    backgroundColor: '#007AFF',
    marginTop: 16,
  },
});
