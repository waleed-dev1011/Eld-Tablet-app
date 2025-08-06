import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {mvs} from '../../../../util/metrices';
import {colors} from '../../../../util/color';

const getStatusColor = status => {
  switch (status) {
    case 'New':
      return '#FBBF24'; // Yellow
    case 'In-Progress':
      return '#EF4444'; // Red
    case 'Resolved':
      return '#10B981'; // Green
    default:
      return 'gray';
  }
};

const TableRow = ({item}) => {
  return (
    <View style={styles.row}>
      <View style={[styles.cell, {flex: 1}]}>
        <Text>{item.id}</Text>
      </View>
      <View style={[styles.cell, {flex: 2}]}>
        <Text>{item.subject}</Text>
      </View>
      <View style={[styles.cell, {flex: 5}]}>
        <Text numberOfLines={1}>{item.description}</Text>
      </View>
      <View style={[styles.cell, {flex: 2}]}>
        <Text>{item.datetime}</Text>
      </View>
      <View style={[styles.cell, {flex: 2}]}>
        <Text>{item.contact}</Text>
      </View>
      <View style={[styles.cell, {flex: 1}]}>
        <View
          style={[
            styles.statusBadge,
            {backgroundColor: getStatusColor(item.status)},
          ]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
    </View>
  );
};

const TicketTable = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {[
          'Ticket ID',
          'Subject',
          'Description',
          'Date & Time',
          'Contact On',
          'Status',
        ].map((header, index) => (
          <View
            key={index}
            style={[
              styles.headerCell,
              {
                flex:
                  index === 0
                    ? 1
                    : index === 1
                    ? 2
                    : index === 2
                    ? 4
                    : index === 5
                    ? 1
                    : 2,
              },
            ]}>
            <Text style={styles.headerText}>{header}</Text>
          </View>
        ))}
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <TableRow item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TicketTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: mvs(20),
    borderRadius: mvs(10),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(10),
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
    paddingHorizontal: mvs(10),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    justifyContent: 'center',
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  statusText: {
    color: '#fff',
    fontSize: mvs(12),
    fontWeight: '600',
  },
});
