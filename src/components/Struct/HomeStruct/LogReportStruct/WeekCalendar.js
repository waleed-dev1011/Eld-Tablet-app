// components/WeekCalendar.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {mvs} from '../../../../util/metrices';
import {colors} from '../../../../util/color';
import PenIcon from '../../../../assets/svg/penIconSvg';

const WeekCalendar = ({selectedDay, onDaySelect}) => {
  const days = [
    {day: 'Mon', date: 10, sign: true},
    {day: 'Tue', date: 11, sign: true},
    {day: 'Wed', date: 12, sign: true},
    {day: 'Thus', date: 13, sign: true},
    {day: 'Fri', date: 14, sign: false},
    {day: 'Mon', date: 15, sign: false},
    {day: 'Tue', date: 16, sign: false},
    {day: 'Wed', date: 17, sign: false},
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
            selectedDay === item.date && {
              backgroundColor: item.sign ? '#2fa766' : 'red',
            },
          ]}
          onPress={() => onDaySelect && onDaySelect(item.date)}>
          <View style={styles.signIcon}>
            {item.sign ? <PenIcon /> : <PenIcon color="red" />}
          </View>
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
    flex: 1,
    backgroundColor: colors.base.grayBg,
    padding: 10,
    borderRadius: mvs(12),
    marginHorizontal: 5,

    // backgroundColor: 'red',
  },
  dayButton: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: mvs(16),
    paddingHorizontal: mvs(12),
    width: mvs(150),
    alignItems: 'center',
    marginHorizontal: mvs(5),
  },
  selectedDayButton: {
    backgroundColor: colors.btn.Darkred,
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
  signIcon: {
    alignSelf: 'flex-end',
  },
});

export default WeekCalendar;
