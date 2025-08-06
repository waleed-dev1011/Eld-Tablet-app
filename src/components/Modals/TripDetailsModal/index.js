import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import {mvs} from '../../../util/metrices';

const TripDetailsModal = ({visible, data, onSave, onCancel}) => {
  const [formData, setFormData] = useState({
    shippingDocument: '',
    trailerNumber: '',
    notes: '',
  });
  const [notesError, setNotesError] = useState('');

  const {width} = Dimensions.get('window');
  // Tablet friendly width cap (similar to previous modal)
  const cardWidth = Math.min(width - mvs(32), 720);

  // Merge incoming data safely whenever modal opens
  useEffect(() => {
    if (!visible) return;
    setFormData({
      shippingDocument: data?.shippingDocument ?? '',
      trailerNumber: data?.trailerNumber ?? '',
      notes: data?.notes ?? '',
    });
    setNotesError('');
  }, [visible, data]);

  const handleInputChange = (field, value) => {
    if (field === 'notes') {
      if (value.length > 50) setNotesError('* Maximum 50 characters allowed');
      else setNotesError('');
    }
    setFormData(prev => ({...prev, [field]: value}));
  };

  const handleSave = () => {
    if (formData.notes.length > 50) return;
    onSave?.({
      shippingDocument: formData.shippingDocument.trim(),
      trailerNumber: formData.trailerNumber.trim(),
      notes: formData.notes.trim(),
    });
  };

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onCancel}
      onBackButtonPress={onCancel}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropOpacity={0.35}
      useNativeDriver
      style={styles.centeredModal}
      avoidKeyboard>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.card, {width: cardWidth}]}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={onCancel}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Edit Documents</Text>

          <TouchableOpacity
            onPress={handleSave}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
            <Text style={styles.saveButton}>Save</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled">
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Trailer Number</Text>
            <TextInput
              style={styles.input}
              value={formData.trailerNumber}
              onChangeText={v => handleInputChange('trailerNumber', v)}
              placeholder="Enter trailer number"
              placeholderTextColor="#999"
              returnKeyType="next"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Shipping Document</Text>
            <TextInput
              style={styles.input}
              value={formData.shippingDocument}
              onChangeText={v => handleInputChange('shippingDocument', v)}
              placeholder="Enter shipping document"
              placeholderTextColor="#999"
              returnKeyType="next"
            />
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.labelRow}>
              <Text style={styles.icon}>📝</Text>
              <Text style={styles.label}>Notes</Text>
            </View>

            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.notes}
              onChangeText={v => handleInputChange('notes', v)}
              placeholder="Add notes"
              placeholderTextColor="#999"
              multiline
              numberOfLines={4}
              maxLength={50}
            />

            <View style={styles.notesFooter}>
              <Text style={styles.characterCount}>
                {formData.notes.length}/50
              </Text>
            </View>

            {notesError ? (
              <Text style={styles.errorText}>{notesError}</Text>
            ) : null}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    backgroundColor: '#f7f9fc',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 20,
    maxHeight: '90%',
    // subtle elevation/shadow like our other modal
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 6},
      },
      android: {elevation: 8},
    }),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cancelButton: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  saveButton: {
    color: '#34C759',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    paddingBottom: 10,
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  icon: {fontSize: 16},
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  notesFooter: {
    alignItems: 'flex-end',
    marginTop: 4,
  },
  characterCount: {
    fontSize: 12,
    color: '#888',
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: 4,
  },
});

export default TripDetailsModal;
