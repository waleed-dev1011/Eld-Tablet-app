import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import styles from './styles';

const TripDetailsModal = ({visible, data, onSave, onCancel}) => {
  const [formData, setFormData] = useState({
    shippingDocument: '',
    trailerNumber: '',
    notes: '',
  });
  const [notesError, setNotesError] = useState('');

  useEffect(() => {
    if (visible && data) {
      setFormData(data);
      setNotesError('');
    }
  }, [visible, data]);

  const handleInputChange = (field, value) => {
    if (field === 'notes') {
      if (value.length > 50) {
        setNotesError('* Maximum 50 characters allowed');
      } else {
        setNotesError('');
      }
    }

    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    if (formData.notes.length > 50) {
      return;
    }
    onSave(formData);
  };

  const handleCancel = () => {
    setFormData(data);
    setNotesError('');
    onCancel();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleCancel}>
      <SafeAreaView style={styles.modalContainer}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleCancel}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Edit Documents</Text>
            <TouchableOpacity onPress={handleSave}>
              <Text style={styles.saveButton}>Save</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Trailer Number</Text>
              <TextInput
                style={styles.input}
                value={formData.trailerNumber}
                onChangeText={value =>
                  handleInputChange('trailerNumber', value)
                }
                placeholder="Enter trailer number"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Shipping Document</Text>
              <TextInput
                style={styles.input}
                value={formData.shippingDocument}
                onChangeText={value =>
                  handleInputChange('shippingDocument', value)
                }
                placeholder="Enter shipping document"
                placeholderTextColor="#999"
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
                onChangeText={value => handleInputChange('notes', value)}
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
      </SafeAreaView>
    </Modal>
  );
};

export default TripDetailsModal;
