import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import CircularProgressChart from '../../../components/Charts/CircularProgressChart';
import {colors} from '../../../util/color';
import {HomeHeader} from '../../../components/Headers';
import {NotificationSVG} from '../../../assets/svg';
import DrivingAlertModal from '../../../components/Modals/DrivingAlertModal';

const screenWidth = Dimensions.get('window').width;

const DriveStatusScreen = () => {
  const [warningModal, setWarningModal] = useState(false);

  const item = {
    id: 2,
    totalTime: 9 * 60, // 9 hours in minutes
    currentTime: 6 * 60 + 24 + 2 / 60,
    label: 'DRIVE',
    color: colors.chart.rgb_green,
    backgroundColor: '#E0E0E0',
  };

  const handleCancel = () => {
    setWarningModal(false);
  };

  const handleConfirm = () => {
    setWarningModal(false);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />
      <HomeHeader title="Home" rightButton={<NotificationSVG />} />

      <View style={styles.divider} />

      <View style={styles.container}>
        {/* Top Header */}
        <View style={styles.topRow}>
          <Text style={styles.title}>Duty Hours</Text>
          <View style={styles.statusBox}>
            <View style={styles.datebox}>
              <Text style={styles.date}>11 May, 2025 12:05 AM</Text>
            </View>
            <TouchableOpacity
              style={styles.statusTag}
              onPress={() => setWarningModal(true)}>
              <Text style={styles.statusText}>In-motion</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Center Circular Chart */}
        <View style={styles.chartContainer}>
          <CircularProgressChart data={item} labelFontSize={20} radius={70} />
        </View>

        {/* Bottom Info Box */}
        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Driving Time Left</Text>
            <Text style={styles.value}>02:32:02</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Current Location</Text>
            <Text style={styles.value}>342, Plot B</Text>
          </View>
        </View>
      </View>
      <DrivingAlertModal
        visible={warningModal}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </SafeAreaView>
  );
};

export default DriveStatusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  statusBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
    justifyContent: 'center',
  },
  datebox: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  date: {
    fontSize: 12,
    color: '#333',
  },
  statusTag: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 12,
    color: '#fff',
  },
  chartContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  centerText: {
    position: 'absolute',
    top: '38%',
    alignItems: 'center',
  },
  time: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  driveText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E7D32',
    marginTop: 4,
  },
  infoBox: {
    marginTop: 40,
    backgroundColor: '#f1f8f4',
    padding: 16,
    borderRadius: 12,
    width: '30%',
    alignSelf: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});
