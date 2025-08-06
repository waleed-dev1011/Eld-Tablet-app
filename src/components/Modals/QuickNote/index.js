import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import Modal from 'react-native-modal';

import BackIconIconSvg from '../../../assets/svg/back-icon-svg';

const QuickNotesModal = ({visible, onClose}) => {
  const [selectedNotes, setSelectedNotes] = useState([]);

  const notesList = [
    'PTI',
    'Pickup',
    'Delivery',
    'Checkin',
    'Check out',
    'Hook',
    'Drop off',
    'Inspection',
    'Fueling',
    'Other',
  ];

  const toggleNote = note => {
    setSelectedNotes(prev =>
      prev.includes(note)
        ? prev.filter(item => item !== note)
        : [...prev, note],
    );
  };

  return (
    <Modal isVisible={visible} onBackdropPress={onClose}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <BackIconIconSvg />
          </TouchableOpacity>
          <Text style={styles.headertext}>Quick Notes</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.addBtnText}>Add notes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={styles.gridContainer}>
          {notesList.map((note, index) => (
            <Pressable
              key={index}
              style={styles.noteItem}
              onPress={() => toggleNote(note)}>
              <View style={styles.checkbox}>
                {selectedNotes.includes(note) && (
                  <View style={styles.checked} />
                )}
              </View>
              <Text style={styles.noteText}>{note}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.footer}>
          Notes field has max 60 character limit
        </Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    width: '50%',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headertext: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    padding: 8,
  },
  noteItem: {
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 1.5,
    borderColor: '#1A1A1A',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#1A1A1A',
    borderRadius: 2,
  },
  noteText: {
    fontSize: 14,
    color: '#1A1A1A',
  },
  footer: {
    fontSize: 12,
    color: '#555',
    backgroundColor: '#f1f1f1',
    padding: 8,
    borderRadius: 6,
    textAlign: 'center',
  },
  addBtn: {
    alignSelf: 'flex-end',
  },
  addBtnText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});

export default QuickNotesModal;
