import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TripDetailsModal from '../../Modals/TripDetailsModal';
import {colors} from '../../../util/color';
import {mvs} from '../../../util/metrices';

const TripDetails = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [documentData, setDocumentData] = useState({
    shippingDocument: 'N/A',
    trailerNumber: 'N/A',
    notes: 'Lorem Ipsum',
  });

  const handleEdit = () => {
    setModalVisible(true);
  };

  const handleSave = updatedData => {
    setDocumentData(updatedData);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.field}>
            <View style={styles.fieldHeader}>
              <Text style={styles.icon}>📄</Text>
            </View>

            <Text style={styles.label}>Shipping Document</Text>
            <Text style={styles.value}>{documentData.shippingDocument}</Text>
          </View>

          <View style={styles.field}>
            <View style={styles.fieldHeader}>
              <Text style={styles.icon}>🚛</Text>
              <Text style={styles.label}>Trailer Number</Text>
            </View>
            <Text style={styles.value}>{documentData.trailerNumber}</Text>
          </View>

          <View style={styles.field}>
            <View style={styles.fieldHeader}>
              <Text style={styles.icon}>📝</Text>
              <Text style={styles.label}>Notes</Text>
            </View>
            <Text style={styles.value}>{documentData.notes}</Text>
          </View>

          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Text style={styles.editIcon}>✏️</Text>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TripDetailsModal
        visible={isModalVisible}
        data={documentData}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: colors.base.grayBg,
    borderRadius: mvs(12),
    padding: mvs(16),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  field: {
    flex: 1,
    marginRight: 16,
    marginBottom: 8,
  },
  fieldHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  icon: {
    fontSize: 16,
    marginRight: 6,
  },
  label: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff6b35',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 8,
  },
  editIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  editText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default TripDetails;
