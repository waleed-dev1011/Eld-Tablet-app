import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {mvs} from '../../../util/metrices';
import {colors} from '../../../util/color';
import LogoutSvg from '../../../assets/svg/logout';
import SwitchUserSvg from '../../../assets/svg/switchUser';
import {InspectionReportSvg, ReportSvg} from '../../../assets/svg';
import NotesSvg from '../../../assets/svg/notesSvg';
import SwitchDriverModal from '../../Modals/SwitchDriverModal';
import ShippingDocumentModal from '../../Modals/ShippingDocumentModal';
import {useNavigation} from '@react-navigation/native';

const DriveDarshboard = ({
  driverId = '1021',
  driverName = 'John Smith',
  vehicleModel = 'BMW mi7 2019',
}) => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false); // For SwitchDriverModal
  const [shippingModalVisible, setShippingModalVisible] = useState(false); // For ShippingDocumentModal

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  const handleConfirm = () => {
    setModalVisible(false);
    setShippingModalVisible(true); // Show ShippingDocumentModal
  };

  const handleCloseShippingModal = () => setShippingModalVisible(false);

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
              height: mvs(40),
              width: mvs(40),
              borderRadius: mvs(40 / 2),
              backgroundColor: colors.white,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: mvs(10),
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
            height: mvs(40),
            backgroundColor: colors.border,
            width: mvs(3),
            marginHorizontal: mvs(10),
          }}
        />

        <View style={styles.driverContainer}>
          <View
            style={{
              height: mvs(40),
              width: mvs(40),
              borderRadius: mvs(40 / 2),
              backgroundColor: colors.white,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: mvs(10),
            }}>
            <Text style={styles.driverId}>{driverId}</Text>
          </View>
          <View>
            <Text style={styles.dateText}>{driverName},</Text>
            <Text style={styles.dateText}>{vehicleModel}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: mvs(3),
          backgroundColor: colors.border,
          marginTop: mvs(8),
          marginBottom: mvs(10),
        }}
      />

      {/* Buttons Grid */}
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('InspectionReport')}>
            {/* <Text style={styles.buttonIcon}>🔍</Text> */}
            <InspectionReportSvg />
            <Text style={styles.buttonText}>Inspection</Text>
            <Text style={styles.buttonText}>Report</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('LogReport')}>
            {/* <Text style={styles.buttonIcon}>📋</Text> */}
            <NotesSvg />
            <Text style={styles.buttonText}>Log Report</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
            {/* <Text style={styles.buttonIcon}>👥</Text> */}
            <SwitchUserSvg />
            <Text style={styles.buttonText}>Co-driver</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login', {fromHome: true})}>
            {/* <Text style={styles.buttonIcon}>🚛</Text> */}
            <LogoutSvg />
            <Text style={styles.buttonText}>Leave Truck</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SwitchDriverModal
        visible={modalVisible}
        onCancel={handleCloseModal}
        onConfirm={handleConfirm}
      />
      <ShippingDocumentModal
        visible={shippingModalVisible}
        onClose={handleCloseShippingModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.base.grayBg,
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(22),
    borderRadius: mvs(12),
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayNumber: {
    fontSize: mvs(12),
    fontWeight: '600',
    color: '#333',
    lineHeight: 40,
  },
  dateText: {
    fontSize: mvs(10),
    color: '#666',
    fontWeight: '400',
  },
  driverContainer: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverId: {
    fontSize: mvs(12),
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 40,
  },
  driverName: {
    fontSize: mvs(12),
    color: '#666',
    fontWeight: '400',
  },
  vehicleModel: {
    fontSize: mvs(12),
    color: '#666',
    fontWeight: '400',
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
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: 25,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333',
    textAlign: 'center',
  },
});

export default DriveDarshboard;
