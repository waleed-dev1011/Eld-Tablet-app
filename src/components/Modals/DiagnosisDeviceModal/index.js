import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import ZoomIconSvg from '../../../assets/svg/zoomSvg';
import {mvs} from '../../../util/metrices';
import {
  BluetoothSvg,
  ForwardSvg,
  GpsSvg,
  Location2Svg,
  Location3Svg,
  Notification2Svg,
} from '../../../assets/svg';
import LocationSvg from '../../../assets/svg/location-svg';
import LocationIcon from '../../../assets/svg/locationIcon';
import {colors} from '../../../util/color';

const DiagnosisDeviceModal = ({visible, onCancel}) => {
  const {width} = Dimensions.get('window');
  const cardWidth = Math.min(width - mvs(32), 720);

  const contents = [
    {label: 'ELD coordinates', status: 'Not working'},
    {label: 'GPS coordinates', status: 'Not working'},
    {label: 'Network quality', status: 'Good'},
  ];

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onCancel}
      onBackButtonPress={onCancel}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropOpacity={0.3}
      useNativeDriver
      style={styles.centeredModal}>
      <View style={[styles.card, {width: cardWidth}]}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Diagnosis of Device</Text>
          <View style={{width: 60}} />
        </View>

        {/* Body */}
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.section}>
            {contents.map((item, index) => (
              <TouchableOpacity key={index} style={styles.permissionRow}>
                <View style={styles.left}>
                  <Text style={styles.label}>{item.label}</Text>
                </View>
                <View style={styles.right}>
                  <Text
                    style={[
                      styles.status,
                      item.status === 'Good'
                        ? styles.allowed
                        : styles.notAllowed,
                    ]}>
                    {item.status}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredModal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: mvs(16),
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    maxHeight: '90%',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 4},
      },
      android: {elevation: 6},
    }),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cancelText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111',
  },
  content: {
    paddingVertical: 12,
  },
  section: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  leftIcon: {},
  permissionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  label: {
    fontSize: 15,
    color: '#222',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  status: {
    fontSize: 13,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  allowed: {
    backgroundColor: '#2fa766',
    color: '#fff',
  },
  notAllowed: {
    backgroundColor: '#e2464a',
    color: '#fff',
  },
  toggleBox: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  toggleText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default DiagnosisDeviceModal;
