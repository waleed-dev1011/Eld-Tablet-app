import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {mvs} from '../../../util/metrices';
import EditSvg from '../../../assets/svg/editSvg';
import LogDetailModal from '../../Modals/LogDetailsModal';

const data = [
  {
    status: 'ON',
    time: '02:03:23 AM',
    location: 'New York',
    document: 'Invoice #1234',
    notes: 'Delivered on time',
    trailer: 'TR-4521',
  },
  {
    status: 'DR',
    time: '01:45:10 AM',
    location: 'Los Angeles',
    document: 'PO #5678',
    notes: 'Minor delay due to traffic',
    trailer: 'TR-7890',
  },
  {
    status: 'SB',
    time: '12:30:45 AM',
    location: 'Chicago',
    document: 'Invoice #9101',
    notes: 'Scheduled for tomorrow',
    trailer: 'TR-1234',
  },
];

const getStatusColor = status => {
  switch (status) {
    case 'ON':
      return '#2DD4BF';
    case 'DR':
      return 'green';
    case 'SB':
      return 'orange';
    default:
      return 'black';
  }
};

const TableRow = ({item, onEditPress}) => {
  return (
    <View style={styles.row}>
      <View style={[styles.cell, {flex: 1}]}>
        <View
          style={[
            styles.statusBadge,
            {backgroundColor: getStatusColor(item.status)},
          ]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <View style={[styles.cell, {flex: 1}]}>
        <Text>{item.time}</Text>
      </View>
      <View style={[styles.cell, {flex: 2}]}>
        <Text>{item.location}</Text>
      </View>
      <View style={[styles.cell, {flex: 2}]}>
        <Text>{item.document}</Text>
      </View>
      <View style={[styles.cell, {flex: 2}]}>
        <Text>{item.notes}</Text>
      </View>
      <View style={[styles.cell, {flex: 2}]}>
        <Text>{item.trailer}</Text>
      </View>
      <View style={[styles.cell, {flex: 1}]}>
        <TouchableOpacity onPress={onEditPress}>
          <EditSvg height={mvs(24)} width={mvs(24)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Table = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEditPress = item => {
    setSelectedItem(item);
    setOpen(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {[
          'Status',
          'Start Time',
          'Location',
          'Document',
          'Notes',
          'Trailer',
          'Edit',
        ].map((header, index) => (
          <View
            key={index}
            style={[
              styles.headerCell,
              {flex: index === 0 || index === 1 || index === 6 ? 1 : 2},
            ]}>
            <Text style={styles.headerText}>{header}</Text>
          </View>
        ))}
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TableRow item={item} onEditPress={() => handleEditPress(item)} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <LogDetailModal
        visible={open}
        onClose={() => setOpen(false)}
        data={{
          status: selectedItem?.status || 'ON',
          start: new Date(),
          duration: '22:02:21',
          location: selectedItem?.location || '',
          odometer: '324543',
          engineHours: '333.22',
          notes: selectedItem?.notes || '',
        }}
      />
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: mvs(20),
    borderRadius: mvs(10),
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(15),
  },
  headerCell: {
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(15),
    borderBottomWidth: mvs(1),
    borderBottomColor: '#ddd',
  },
  cell: {
    justifyContent: 'center',
  },
  statusBadge: {
    paddingVertical: mvs(4),
    paddingHorizontal: mvs(6),
    borderRadius: mvs(5),
    alignItems: 'center',
    width: mvs(50),
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: mvs(12),
  },
});
