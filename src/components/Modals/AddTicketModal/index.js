import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import {mvs} from '../../../util/metrices';
import {RadioButton} from 'react-native-paper';

const AddTicketModal = ({visible, onCancel, onConfirm}) => {
  const [selectedType, setSelectedType] = useState('phone');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const {width} = Dimensions.get('window');
  const modalWidth = Math.min(width - mvs(32), 720);

  const handleConfirm = () => {
    const payload = {
      type: selectedType,
      subject,
      description,
    };
    onConfirm?.(payload);
    setSubject('');
    setDescription('');
    setSelectedType('phone');
  };

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onCancel}
      onBackButtonPress={onCancel}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropOpacity={0.3}
      style={styles.centeredModal}
      useNativeDriver>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={[styles.card, {width: modalWidth}]}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={onCancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Add Ticket</Text>
            <TouchableOpacity onPress={handleConfirm}>
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.content}>
            {/* Type Toggle */}
            <RadioButton.Group
              onValueChange={value => setSelectedType(value)}
              value={selectedType}>
              <View style={styles.radioGroupRow}>
                <View style={styles.radioRow}>
                  <RadioButton value="email" color="#007AFF" />
                  <Text style={styles.radioLabel}>Email address</Text>
                </View>

                <View style={styles.radioRow}>
                  <RadioButton value="phone" color="#007AFF" />
                  <Text style={styles.radioLabel}>Phone number</Text>
                </View>
              </View>
            </RadioButton.Group>
            {/* Subject Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Subject</Text>
              <TextInput
                style={styles.input}
                placeholder="Add ticket subject"
                placeholderTextColor="#999"
                value={subject}
                onChangeText={setSubject}
              />
            </View>

            {/* Description Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Ticket description</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Description"
                placeholderTextColor="#999"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </ScrollView>
        </View>
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
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
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
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cancelText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  },
  confirmText: {
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111',
  },
  content: {
    paddingTop: mvs(20),
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    marginBottom: mvs(20),
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  radioGroupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: mvs(30), // Optional spacing between the two
  },
  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
  },
  radioLabel: {
    fontSize: 15,
    color: '#333',
    marginLeftL: mvs(8),
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: mvs(10),
  },

  inputGroup: {
    marginBottom: mvs(16),
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ddd',
    color: '#000',
  },
  textArea: {
    minHeight: 100,
  },
});

export default AddTicketModal;
