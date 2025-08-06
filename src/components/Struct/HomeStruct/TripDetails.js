import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TripDetailsModal from '../../Modals/TripDetailsModal';
import {colors} from '../../../util/color';
import {mvs} from '../../../util/metrices';
import EditSvg from '../../../assets/svg/edit-svg';
import SignatureModal from '../../Modals/DriverSignature';
import DriversDailyLogModal from '../../Modals/DriverLogModal';

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
              <Text style={styles.icon}>A</Text>
            </View>
            <View>
              <Text style={styles.label}>Shipping Document</Text>
              <Text style={styles.value}>{documentData.shippingDocument}</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.fieldHeader}>
              <Text style={styles.icon}>T</Text>
            </View>
            <View>
              <Text style={styles.label}>Trailer Number</Text>
              <Text style={styles.value}>{documentData.trailerNumber}</Text>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.fieldHeader}>
              <Text style={styles.icon}>N</Text>
            </View>
            <View>
              <Text style={styles.label}>Notes</Text>
              <Text style={styles.value}>{documentData.notes}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <View
              style={{
                backgroundColor: colors.chart.orange,
                padding: 4,
                borderRadius: 16,
                width: 25,
                height: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <EditSvg showBorder={false} color="white" />
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
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  field: {
    flexDirection: 'row',
    flex: 0.6,
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
    flex: 1 / 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: 'flex-end',
  },
  editIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.chart.orange,
    height: mvs(36),
    width: mvs(36),
    borderRadius: mvs(18),
  },
  editIcon: {
    fontSize: mvs(14),
  },
  editText: {
    marginLeft: mvs(4),
    color: colors.chart.orange,
    fontSize: mvs(12),
    fontWeight: '600',
  },
  certifyboxContainner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: mvs(5),
    borderRadius: mvs(18),
    gap: mvs(5),
  },
});

export default TripDetails;
