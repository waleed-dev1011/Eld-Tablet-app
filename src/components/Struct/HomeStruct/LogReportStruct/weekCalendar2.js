// components/WeekCalendar.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {mvs} from '../../../../util/metrices';
import {colors} from '../../../../util/color';

const WeekCalendar2 = ({selectedDay, onDaySelect}) => {
  const days = [
    {date: 10, day: 'jan'},
    {date: 11, day: 'jan'},
    {date: 12, day: 'jan'},
    {date: 13, day: 'jan'},
    {date: 14, day: 'jan'},
    {date: 15, day: 'jan'},
    {date: 16, day: 'jan'},
    {date: 17, day: 'jan'},
    {date: 18, day: 'jan'},
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.weekContainer}>
      {days.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.dayButton,
            selectedDay === item.date && styles.selectedDayButton,
          ]}
          onPress={() => onDaySelect && onDaySelect(item.date)}>
          <Text
            style={[
              styles.dayText,
              selectedDay === item.date && styles.selectedDayText,
            ]}>
            {item.day}
          </Text>
          <Text
            style={[
              styles.dateText,
              selectedDay === item.date && styles.selectedDateText,
            ]}>
            {item.date}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  weekContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dayButton: {
    flex: 1,
    backgroundColor: colors.base.grayBg,
    borderRadius: 8,
    paddingVertical: mvs(16),
    paddingHorizontal: mvs(12),
    width: mvs(80),
    alignItems: 'center',
    marginHorizontal: mvs(5),
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectedDayButton: {
    backgroundColor: colors.black,
  },
  dayText: {
    fontSize: mvs(16),
    color: '#6c757d',
    marginBottom: 4,
  },
  selectedDayText: {
    color: '#fff',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6c757d',
  },
  selectedDateText: {
    color: '#fff',
  },
});

export default WeekCalendar2;
