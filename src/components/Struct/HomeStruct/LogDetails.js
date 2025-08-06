import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ELDLogChart from '../../Charts/ELDLogChart';

const DailyLogContent = ({onClose}) => {
  const detailsData = [
    ['Driver name', 'shadowDriver2', 'Co-driver name', ''],
    ['Driver ID', 'shadow2', 'Co-driver ID', ''],
    ['DL Number', 'S911000209', 'DL State', 'New York'],
    ['Carrier', 'MARVAND GROUP INC', 'E.L.D Provider', 'ONITWEB ELD Inc.'],
    ['USDOT #', '4090036', 'Exempt Driver', 'No'],
    ['Main Office Addr.', '', 'E.L.D Registration', 'DNA4'],
    [
      'Home Terminal',
      '5345 MATOR DR END UNIT 513 MASON OH 45040',
      'ELD Diagnostics Indicators',
      'No',
    ],
    ['Truck Vehicle VIN', '5V8AC8SE5NA191189', 'Unidentified Driver', 'No'],
    ['Truck tractor ID', '270', 'Time Zone', 'CPT, UTC-6'],
    ['Trailer no', 'bobtail', '24H period Starting', 'Midnight'],
    ['Shipping ID', 'N/A', 'Distance', '0 mi'],
    ['Current Location', '4769.30 mi W of Alto Sublette, AK', '', ''],
  ];

  const odometersData = [
    ['Start', '4785.3 mi'],
    ['End', '4801.9 mi'],
  ];

  const logsData = [
    ['06:00', 'Ohio', 'Start'],
    ['12:00', 'New York', 'Break'],
    ['17:30', 'Ohio', 'Stop'],
  ];

  return (
    <View style={styles.container}>
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
        <View style={{alignSelf: 'flex-start'}}>
          <Text style={styles.title}>DRIVER’S DAILY LOG</Text>
          <Text style={styles.dateSubtitle}>Tuesday, May 12, 2025</Text>
        </View>
        <View style={styles.table}>
          {detailsData.map((row, i) => (
            <View
              key={i}
              style={[
                styles.row,
                i % 2 === 0 ? styles.rowEven : styles.rowOdd,
              ]}>
              {row.map((cell, j) => (
                <View key={j} style={styles.cell}>
                  <Text style={styles.cellText}>{cell}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
        <ELDLogChart />
        <View style={styles.table}>
          <Text style={styles.sectionTitle}>Odometers</Text>
          {odometersData.map((row, i) => (
            <View
              key={i}
              style={[
                styles.row,
                i % 2 === 0 ? styles.rowEven : styles.rowOdd,
              ]}>
              {row.map((cell, j) => (
                <View key={j} style={styles.cell}>
                  <Text style={styles.cellText}>{cell}</Text>
                </View>
              ))}
              {Array(4 - row.length)
                .fill()
                .map((_, k) => (
                  <View key={`empty-${k}`} style={styles.cell} />
                ))}
            </View>
          ))}
        </View>
        <View style={styles.table}>
          <Text style={styles.sectionTitle}>Logs</Text>
          <View style={[styles.row, styles.rowEven]}>
            {['Time', 'Location', 'Event', ''].map((header, i) => (
              <View key={i} style={styles.cell}>
                <Text style={[styles.cellText, {fontWeight: 'bold'}]}>
                  {header}
                </Text>
              </View>
            ))}
          </View>
          {logsData.map((row, i) => (
            <View
              key={i}
              style={[
                styles.row,
                i % 2 === 0 ? styles.rowOdd : styles.rowEven,
              ]}>
              {row.map((cell, j) => (
                <View key={j} style={styles.cell}>
                  <Text style={styles.cellText}>{cell}</Text>
                </View>
              ))}
              {Array(4 - row.length)
                .fill()
                .map((_, k) => (
                  <View key={`empty-${k}`} style={styles.cell} />
                ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
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
  rowEven: {
    backgroundColor: '#f9f9f9',
  },
  rowOdd: {
    backgroundColor: '#ffffff',
  },
});

export default DailyLogContent;
