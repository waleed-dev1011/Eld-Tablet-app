import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TripDetailsModal from '../../Modals/TripDetailsModal';
import {colors} from '../../../util/color';
import {mvs} from '../../../util/metrices';

const SingleDetails = () => {
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
              <Text style={styles.icon}>A</Text>
            </View>
            <View>
              <Text style={styles.label}>Certify</Text>
              <View style={styles.certifyboxContainner}>
                <View style={styles.certifyBox} />
                <View style={styles.certifyBox} />
                <View style={styles.certifyBox} />
                <View style={styles.certifyBox} />
                <View style={styles.certifyBox} />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <View style={styles.editIconContainer}>
              <Text style={styles.editIcon}>✏️</Text>
            </View>
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
    flexDirection: 'row',
    flex: 1,
    marginRight: 16,
    marginBottom: 8,
  },
  fieldHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginRight: mvs(7),
    height: mvs(35),
    width: mvs(35),
    borderRadius: mvs(18),
  },
  icon: {
    fontSize: mvs(16),
  },
  label: {
    fontSize: mvs(14),
    color: colors.text.placeholder,
    fontWeight: '500',
  },
  value: {
    fontSize: mvs(16),
    color: colors.text.primary,
    fontWeight: 'bold',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#ff6b35',
    paddingHorizontal: 12,
    paddingVertical: 6,
    // borderRadius: 8,
    // marginTop: 8,
  },
  editIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.chart.orange,
    height: mvs(36),
    width: mvs(36),
    borderRadius: mvs(18),
    marginRight: 4,
  },
  editIcon: {
    fontSize: mvs(14),
  },
  editText: {
    color: colors.chart.orange,
    fontSize: mvs(14),
    fontWeight: '600',
  },
  certifyboxContainner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.base.grayBg,
    height: mvs(36),
    width: mvs(36),
    borderRadius: mvs(18),
    marginRight: 4,
  },
  certifyBox: {
    height: mvs(10),
    width: mvs(10),
    borderRadius: mvs(10),
    backgroundColor: colors.chart.green,
    marginHorizontal: mvs(2),
  },
});

export default SingleDetails;
