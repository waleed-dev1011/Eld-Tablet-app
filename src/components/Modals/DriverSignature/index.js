import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Pressable,
} from 'react-native';
import Modal from 'react-native-modal';

const Checkbox = ({checked, onPress, disabled}) => (
  <Pressable
    onPress={onPress}
    disabled={disabled}
    style={[
      styles.checkbox,
      checked && styles.checkboxChecked,
      disabled && {backgroundColor: '#777E90', borderColor: '#777E90'},
    ]}
    accessibilityRole="checkbox"
    accessibilityState={{checked, disabled}}>
    {checked ? <Text style={styles.checkmark}>✓</Text> : null}
  </Pressable>
);

const SignatureModal = ({visible, onSave, onCancel}) => {
  const [signature, setSignature] = useState('');
  const [saveSignature, setSaveSignature] = useState(true);
  const [certify, setCertify] = useState(true);

  const {width} = Dimensions.get('window');
  const cardWidth = Math.min(width - 32, 720);

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onCancel}
      onBackButtonPress={onCancel}
      backdropOpacity={0.3}
      animationIn="fadeIn"
      animationOut="fadeOut"
      style={styles.modal}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.container, {width: cardWidth}]}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onCancel}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.date}>Mon, 12 May</Text>
          <TouchableOpacity onPress={onSave}>
            <Text style={styles.save}>Save</Text>
          </TouchableOpacity>
        </View>

        {/* Signature Input */}
        <Text style={styles.label}>Driver Signature</Text>
        <TextInput
          value={signature}
          onChangeText={setSignature}
          style={styles.signatureBox}
          placeholder="Draw or type your signature"
          multiline
        />

        {/* Checkboxes */}
        <View style={styles.checkboxRow}>
          <Checkbox
            checked={saveSignature}
            onPress={() => setSaveSignature(!saveSignature)}
          />
          <Text style={styles.checkboxLabel}>Save my signature</Text>
        </View>

        <View style={styles.checkboxRow}>
          <Checkbox checked={certify} onPress={() => setCertify(!certify)} />
          <Text style={styles.checkboxLabel}>
            I hereby certify that my data entries and my record of duty status
            for 24 hour period are true and correct
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          onPress={onSave}
          style={[styles.button, !(signature && certify) && styles.disabledBtn]}
          disabled={!(signature && certify)}>
          <Text style={styles.buttonText}>Use My Signature</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cancel: {
    color: '#FF3B30',
    fontWeight: '600',
  },
  save: {
    fontWeight: '600',
  },
  date: {
    fontWeight: '700',
    fontSize: 16,
    color: '#333',
  },
  label: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 8,
    color: '#333',
  },
  signatureBox: {
    minHeight: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#f9f9f9',
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  checkmark: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  checkboxLabel: {
    flex: 1,
    color: '#333',
    fontSize: 14,
  },
  button: {
    marginTop: 12,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  disabledBtn: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default SignatureModal;
