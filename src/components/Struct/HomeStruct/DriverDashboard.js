import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {mvs} from '../../../util/metrices';
import {colors} from '../../../util/color';
import LogoutSvg from '../../../assets/svg/logout';
import SwitchSvg from '../../../assets/svg/switch';
import SwitchUserSvg from '../../../assets/svg/switchUser';
import {InspectionReportSvg, ReportSvg} from '../../../assets/svg';
import NotesSvg from '../../../assets/svg/notesSvg';

const DriverDashboard = ({
  driverId = '1021',
  driverName = 'John Smith',
  vehicleModel = 'BMW mi7 2019',
}) => {
  const getCurrentDate = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleDateString('en-US', {month: 'long'});
    const dayOfWeek = now.toLocaleDateString('en-US', {weekday: 'short'});

    return {day, month, dayOfWeek};
  };

  const {day, month, dayOfWeek} = getCurrentDate();

  const handleButtonPress = buttonName => {
    console.log(`${buttonName} button pressed`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.dateContainer}>
          <View
            style={{
              height: mvs(56),
              width: mvs(56),
              borderRadius: mvs(56 / 2),
              backgroundColor: colors.white,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: mvs(12),
            }}>
            <Text style={styles.dayNumber}>{day}</Text>
          </View>
          <View>
            <Text style={styles.dateText}>{dayOfWeek},</Text>
            <Text style={styles.dateText}>November</Text>
          </View>
        </View>

        <View
          style={{
            height: mvs(50),
            backgroundColor: colors.border,
            width: mvs(3),
            marginHorizontal: mvs(12),
          }}
        />

        <View style={styles.driverContainer}>
          <View
            style={{
              height: mvs(56),
              width: mvs(56),
              borderRadius: mvs(56 / 2),
              backgroundColor: colors.white,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: mvs(12),
            }}>
            <Text style={styles.driverId}>{driverId}</Text>
          </View>
          <View>
            <Text style={styles.driverName}>{driverName},</Text>
            <Text style={styles.vehicleModel}>{vehicleModel}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: mvs(3),
          backgroundColor: colors.border,
          marginTop: mvs(8),
          marginBottom: mvs(15),
        }}
      />

      {/* Buttons Grid */}
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('Inspection Report')}>
            {/* <Text style={styles.buttonIcon}>🔍</Text> */}
            <InspectionReportSvg />
            <Text style={styles.buttonText}>Inspection</Text>
            <Text style={styles.buttonText}>Report</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('Log Report')}>
            {/* <Text style={styles.buttonIcon}>📋</Text> */}
            <NotesSvg />
            <Text style={styles.buttonText}>Log Report</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('Co-driver')}>
            {/* <Text style={styles.buttonIcon}>👥</Text> */}
            <SwitchUserSvg />
            <Text style={styles.buttonText}>Co-driver</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('Leave Truck')}>
            {/* <Text style={styles.buttonIcon}>🚛</Text> */}
            <LogoutSvg />
            <Text style={styles.buttonText}>Leave Truck</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    margin: mvs(20),
    borderRadius: mvs(15),
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottomWidth: 3,
    // borderBottomColor: colors.border,
  },
  dateContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayNumber: {
    fontSize: mvs(20),
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 50,
  },
  dateText: {
    fontSize: mvs(14),
    color: '#666',
    fontWeight: '500',
  },
  driverContainer: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverId: {
    fontSize: mvs(20),
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 50,
  },
  driverName: {
    fontSize: mvs(15),
    color: '#666',
    fontWeight: '500',
  },
  vehicleModel: {
    fontSize: mvs(15),
    color: '#666',
    fontWeight: '500',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.border,
    width: '48%',
    height: 100,
    // paddingVertical: mvs(12),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default DriverDashboard;
