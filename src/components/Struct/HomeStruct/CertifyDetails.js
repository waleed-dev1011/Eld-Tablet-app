import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TripDetailsModal from '../../Modals/TripDetailsModal';
import {colors} from '../../../util/color';
import {mvs} from '../../../util/metrices';
import EditSvg from '../../../assets/svg/edit-svg';
import CertifyDetailsModal from '../../Modals/CertifyDetailsModal';

const CertifyDetails = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [documentData, setDocumentData] = useState({
    shippingDocument: 'N/A',
    trailerNumber: 'N/A',
    notes: 'Lorem Ipsum',
  });
  const handleCertify = certifiedIds => {
    console.log('Certified:', certifiedIds);
    // Save to state or send to backend
  };
  const certifyStatuses = [
    'green',
    'green',
    'green',
    'red',
    'red',
    'green',
    'red',
  ]; // or use boolean flags or enum values

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
            <View style={{flex: 1}}>
              <Text style={styles.label}>Certify</Text>
              <View style={styles.certifyboxContainner}>
                {certifyStatuses.map((status, index) => (
                  <View
                    key={index}
                    style={[
                      styles.certifyBox,
                      {
                        backgroundColor:
                          status === 'green'
                            ? colors.chart.green
                            : colors.chart.red,
                      },
                    ]}
                  />
                ))}
              </View>
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

      <CertifyDetailsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onCertify={handleCertify}
        initialCertified={[]}
        daysToShow={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: colors.base.grayBg,
    borderRadius: mvs(12),
    padding: mvs(16),
  },
  row: {
    flexDirection: 'row',
    // justifyContent: '',
    // alignItems: 'center',
  },
  field: {
    flexDirection: 'row',
    flex: 2,
    alignSelf: 'center',
    overflow: 'hidden',
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
    flex: 1,
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
    paddingVertical: mvs(5),
    borderRadius: mvs(18),
    gap: mvs(5),
  },
  certifyBox: {
    marginVertical: mvs(4),
    height: mvs(10),
    width: mvs(10),
    borderRadius: mvs(10),
    marginHorizontal: mvs(2),
  },
});

export default CertifyDetails;
