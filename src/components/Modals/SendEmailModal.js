import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import {mvs} from '../../util/metrices';
import InfoBar from '../atoms/InfoBar';
import ActionButton from '../atoms/buttons/ActionButton';
import {XSvg} from '../../assets/svg';

const SendEmailModal = ({visible, onClose, onSend}) => {
  const [emailAddress, setEmailAddress] = useState('');

  useEffect(() => {
    if (!visible) {
      // Reset form when modal closes
      setEmailAddress('');
    }
  }, [visible]);

  const handleSend = () => {
    if (!emailAddress.trim()) {
      Alert.alert('Error', 'Please enter an email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    onSend({
      email: emailAddress,
    });

    onClose();
  };

  const handleClose = () => {
    setEmailAddress('');
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Modal Header */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Send via email</Text>
            <TouchableOpacity onPress={handleClose}>
              <XSvg height={mvs(22)} width={mvs(22)} />
            </TouchableOpacity>
          </View>

          {/* Info Section */}
          <View style={styles.infoSection}>
            <InfoBar
              marginTop={0}
              message="Email your logs to the officer if they request a paper copy"
            />
            {/* <ISvg height={mvs(20)} width={mvs(20)} />
            <Text style={styles.infoText}>
              
            </Text> */}
          </View>

          {/* Email Input */}
          <Text style={styles.fieldLabel}>Email Address</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter email address"
            placeholderTextColor="#999"
            value={emailAddress}
            onChangeText={setEmailAddress}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          {/* Action Buttons */}
          <ActionButton
            containerStyle={{paddingHorizontal: 0}}
            variant="dual"
            leftTitle={'Cancel'}
            rightTitle={'Send Logs'}
            onLeftPress={handleClose}
            onRightPress={handleSend}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '90%',
    maxWidth: 400,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  infoSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 8,
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  sendButton: {
    flex: 1,
    backgroundColor: '#DC143C',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginLeft: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SendEmailModal;
