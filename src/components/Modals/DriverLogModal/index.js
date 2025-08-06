import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import ELDLogChart from '../../Charts/ELDLogChart';

const DriversDailyLogModal = ({visible, onClose}) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      backdropOpacity={0.5}
      style={styles.modal}>
      <View style={styles.modalContainer}>
        {/* Header OUTSIDE ScrollView */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.notReadyText}>Not Ready</Text>
          </TouchableOpacity>
          <Text style={styles.date}>Mon, 12 May</Text>
          <TouchableOpacity onPress={onClose}>
            <Text>Sign</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {/* Details Table */}
          <View style={styles.table}>
            <View style={{alignSelf: 'flex-start'}}>
              <Text style={styles.title}>DRIVER’S DAILY LOG</Text>
              <Text style={styles.dateSubtitle}>Tuesday, May 12, 2025</Text>
            </View>
            {[
              ['Driver name', 'shadowDriver2', 'Co-driver name', ''],
              ['Driver ID', 'shadow2', 'Co-driver ID', ''],
              ['DL Number', 'S911000209', 'DL State', 'New York'],
              [
                'Carrier',
                'MARVAND GROUP INC',
                'E.L.D Provider',
                'ONITWEB ELD Inc.',
              ],
              ['USDOT #', '4090036', 'Exempt Driver', 'No'],
              ['Main Office Addr.', '', 'E.L.D Registration', 'DNA4'],
              [
                'Home Terminal',
                '5345 MATOR DR END UNIT 513 MASON OH 45040',
                'ELD Diagnostics Indicators',
                'No',
              ],
              [
                'Truck Vehicle VIN',
                '5V8AC8SE5NA191189',
                'Unidentified Driver',
                'No',
              ],
              ['Truck tractor ID', '270', 'Time Zone', 'CPT, UTC-6'],
              ['Trailer no', 'bobtail', '24H period Starting', 'Midnight'],
              ['Shipping ID', 'N/A', 'Distance', '0 mi'],
              ['Current Location', '4769.30 mi W of Alto Sublette, AK', '', ''],
            ].map((row, i) => (
              <View
                key={i}
                style={[
                  styles.row,
                  i % 2 === 0 ? styles.rowEven : styles.rowOdd, // Alternate background
                ]}>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{row[0]}</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{row[1]}</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{row[2]}</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{row[3]}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Graph Section */}
          <ELDLogChart />

          {/* Odometers Section */}
          <View style={styles.table}>
            <Text style={styles.sectionTitle}>Odometers</Text>
            {[
              ['Start', '4785.3 mi'],
              ['End', '4801.9 mi'],
            ].map((row, i) => (
              <View
                key={i}
                style={[
                  styles.row,
                  i % 2 === 0 ? styles.rowEven : styles.rowOdd,
                ]}>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{row[0]}</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{row[1]}</Text>
                </View>
                {/* Fill other two cells for alignment */}
                <View style={styles.cell} />
                <View style={styles.cell} />
              </View>
            ))}
          </View>

          {/* Logs Section */}
          <View style={styles.table}>
            <Text style={styles.sectionTitle}>Logs</Text>
            {/* Header Row */}
            <View style={[styles.row, styles.rowEven]}>
              <View style={styles.cell}>
                <Text style={[styles.cellText, {fontWeight: 'bold'}]}>
                  Time
                </Text>
              </View>
              <View style={styles.cell}>
                <Text style={[styles.cellText, {fontWeight: 'bold'}]}>
                  Location
                </Text>
              </View>
              <View style={styles.cell}>
                <Text style={[styles.cellText, {fontWeight: 'bold'}]}>
                  Event
                </Text>
              </View>
              <View style={styles.cell} />
            </View>

            {[
              ['06:00', 'Ohio', 'Start'],
              ['12:00', 'New York', 'Break'],
              ['17:30', 'Ohio', 'Stop'],
            ].map((log, i) => (
              <View
                key={i}
                style={[
                  styles.row,
                  i % 2 === 0 ? styles.rowOdd : styles.rowEven, // alternating row style
                ]}>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{log[0]}</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{log[1]}</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{log[2]}</Text>
                </View>
                <View style={styles.cell} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default DriversDailyLogModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    margin: 0,
    padding: 15,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    maxHeight: '95%',
    width: '70%',
    padding: 15,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  notReadyText: {
    color: 'red',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 18,
    fontWeight: '600',
  },

  title: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 4,
    fontWeight: 'bold',
  },
  dateSubtitle: {
    textAlign: 'center',
    fontSize: 13,
    marginBottom: 12,
  },
  table: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  cell: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  cellText: {
    fontSize: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 8,
  },
  chartContainer: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  graphBarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  graphBar: {
    width: 14,
    height: 30,
    backgroundColor: '#b0c4de',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 1,
  },
  graphText: {
    fontSize: 8,
  },
  odoContainer: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
  odoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  odoLabel: {
    fontWeight: 'bold',
  },
  odoValue: {
    fontStyle: 'italic',
  },
  logContainer: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
  rowEven: {
    backgroundColor: '#f9f9f9',
  },
  rowOdd: {
    backgroundColor: '#ffffff',
  },
  logHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  logItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  logCol: {
    width: '33%',
    fontSize: 13,
  },
});
