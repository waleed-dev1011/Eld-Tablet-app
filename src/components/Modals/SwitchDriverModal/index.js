import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import SwitchUserSvg from '../../../assets/svg/switchUser';

const SwitchDriverModal = ({visible, onCancel, onConfirm}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeBtn} onPress={onCancel}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>

          {/* Icon */}
          <SwitchUserSvg width={40} height={40} />

          {/* Text */}
          <Text style={styles.message}>
            Are you sure you want to switch to co–driver?
          </Text>

          <View style={styles.divider} />

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.switchButton} onPress={onConfirm}>
              <Text style={styles.switchText}>Switch</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SwitchDriverModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  modalContainer: {
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    position: 'relative',
    paddingVertical: 30,
  },
  closeBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 8,
  },
  closeText: {
    fontSize: 24,
    color: '#333',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 16,
    resizeMode: 'contain',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#222',
    margin: 20,
    fontWeight: '500',
    paddingHorizontal: 30,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  buttonRow: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
  },
  cancelText: {
    fontSize: 15,
    color: '#000',
  },
  switchButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  switchText: {
    fontSize: 15,
    color: '#fff',
  },
});
