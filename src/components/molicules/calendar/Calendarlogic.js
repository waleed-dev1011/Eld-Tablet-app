import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { colors } from "../../../config/colors";

const Calendar = ({ selectedStartDate, onDateChange, resetValues }) => {
  const customDayHeaderStylesCallback = () => {
    return {
      textStyle: {
        color: colors.white,
        fontSize: 16,
        fontFamily: "DMSans-Bold",
      },
    };
  };

  return (
    <View style={styles.calendarContainer}>
      <CalendarPicker
        startFromMonday
        onDateChange={onDateChange}
        selectedStartDate={selectedStartDate}
        textStyle={styles.calendarText}
        selectedDayColor="red"
        todayBackgroundColor="white"
        monthTitleStyle={styles.monthTitle}
        yearTitleStyle={styles.yearTitle}
        dayHeaderStylesCallback={customDayHeaderStylesCallback}
        previousTitle="<"
        nextTitle=">"
        previousTitleStyle={styles.navigationTitle}
        nextTitleStyle={styles.navigationTitle}
        headerWrapperStyle={styles.headerWrapper}
        monthYearHeaderWrapperStyle={styles.monthYearHeaderWrapper}
        // width={320} // Add explicit width
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={resetValues} style={styles.resetButton}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resultsButton}>
          <Text style={styles.buttonText}>Show Results</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    // marginTop: 10,
    // paddingBottom: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  calendarText: {
    color: colors.white,
    fontSize: 16,
  },
  headerWrapper: {
    backgroundColor: "transparent",
    // paddingTop: 10,
    // paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    // paddingHorizontal: 20,
  },
  monthYearHeaderWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  monthTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    // marginRight: 5,
  },
  yearTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  navigationTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "bold",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 10,
    paddingTop: 20,
    paddingHorizontal: 10,
    marginBottom: 5,
    width: "100%",
  },
  resetButton: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginRight: 5,
    alignItems: "center",
  },
  resultsButton: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginLeft: 5,
    alignItems: "center",
  },
  buttonText: {
    color: colors.primary,
    fontSize: 18,
  },
});

export default Calendar;
