import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import React, {useState} from 'react';
import {mvs} from '../../../util/metrices';

const ShippingDocumentModal = ({visible, onClose}) => {
  const [selected, setSelected] = useState('myself');

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.3}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      useNativeDriver>
      <View style={styles.modalBox}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Select Shipping Document</Text>
          <TouchableOpacity>
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        {/* Options */}
        <View style={styles.optionsBox}>
          {['myself', 'co-driver'].map(role => (
            <TouchableOpacity
              key={role}
              onPress={() => setSelected(role)}
              style={[
                {
                  marginHorizontal: 16,
                  borderColor: selected === role ? '#007aff' : '#ccc',
                },
              ]}>
              <View style={styles.radioRow}>
                <View style={styles.radioCircle}>
                  {selected === role && <View style={styles.radioDot} />}
                </View>
                <View style={{flex: 1, justifyContent: 'flex-start'}}>
                  <Text>
                    <Text style={{fontWeight: 'bold'}}>Documents:</Text> N/A
                  </Text>
                  <Text>
                    <Text style={{fontWeight: 'bold'}}>Trailers:</Text>{' '}
                    {role === 'myself' ? 'Bobtail' : 'N/A'}
                  </Text>
                </View>
                <Text style={styles.roleText}>
                  {role === 'myself' ? 'Myself' : 'Co-driver'}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default ShippingDocumentModal;

const styles = StyleSheet.create({
  modalBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 16,
    width: '50%',
    alignSelf: 'center',
    paddingHorizontal: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cancelText: {
    color: 'red',
    fontSize: 16,
  },
  confirmText: {
    // color: '#007aff',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionsBox: {
    gap: 12,
    borderWidth: 0.5,
    borderColor: 'gray',
    padding: mvs(10),
    borderRadius: mvs(10),
  },
  radioBox: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007aff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007aff',
  },
  roleText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
});
