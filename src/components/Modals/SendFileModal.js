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
import {colors} from '../../util/color';

const SendFileModal = ({visible, onClose, onSend}) => {
  const [selectedFileType, setSelectedFileType] = useState('web');
  const [fileComment, setFileComment] = useState('');

  useEffect(() => {
    if (!visible) {
      // Reset form when modal closes
      setSelectedFileType('web');
      setFileComment('');
    }
  }, [visible]);

  const handleSend = () => {
    if (!fileComment.trim()) {
      Alert.alert('Error', 'Please enter a comment for the file');
      return;
    }

    onSend({
      type: selectedFileType,
      comment: fileComment,
    });

    onClose();
  };

  const handleClose = () => {
    setSelectedFileType('web');
    setFileComment('');
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
            <Text style={styles.modalTitle}>Send file to DOT</Text>
            <TouchableOpacity onPress={handleClose}>
              <XSvg height={mvs(22)} width={mvs(22)} />
            </TouchableOpacity>
          </View>

          {/* Info Section */}
          <View style={styles.infoSection}>
            <InfoBar marginTop={0} message="Send the file to the DOT officer" />
          </View>

          {/* Type Selection */}
          <Text style={styles.fieldLabel}>Type</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={[styles.radioOption]}
              onPress={() => setSelectedFileType('web')}>
              <View
                style={[
                  styles.radioCircle,
                  {
                    borderColor:
                      selectedFileType === 'web'
                        ? colors.base.blue
                        : colors.black,
                  },
                ]}>
                {selectedFileType === 'web' && (
                  <View style={styles.radioSelected} />
                )}
              </View>
              <Text style={styles.radioText}>Web service</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioOption]}
              onPress={() => setSelectedFileType('email')}>
              <View
                style={[
                  styles.radioCircle,
                  {
                    borderColor:
                      selectedFileType === 'email'
                        ? colors.base.blue
                        : colors.black,
                  },
                ]}>
                {selectedFileType === 'email' && (
                  <View style={styles.radioSelected} />
                )}
              </View>
              <Text style={styles.radioText}>Email</Text>
            </TouchableOpacity>
          </View>

          {/* Comment Section */}
          <Text style={styles.fieldLabel}>Comment</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Write output file comment"
            placeholderTextColor="#999"
            multiline={true}
            numberOfLines={4}
            value={fileComment}
            onChangeText={setFileComment}
            textAlignVertical="top"
          />

          {/* Action Buttons */}

          <ActionButton
            containerStyle={{paddingHorizontal: 0}}
            variant="dual"
            onLeftPress={handleClose}
            onRightPress={handleSend}
            leftTitle={'Cancel'}
            rightTitle={'Send'}
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
  radioGroup: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 20,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
  },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 8,
  },
  radioSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
  },
  radioText: {
    fontSize: 16,
    color: '#000',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 100,
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
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: mvs(8),
  },
  radioCircle: {
    width: mvs(20),
    height: mvs(20),
    borderRadius: mvs(10),
    borderWidth: 2,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: mvs(12),
  },
  radioSelected: {
    width: mvs(10),
    height: mvs(10),
    borderRadius: mvs(5),
    backgroundColor: '#007AFF',
  },
});

export default SendFileModal;
