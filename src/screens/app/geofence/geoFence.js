import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { HomeHeader } from '../../../components/molicules/home-header';
import { TruckSvg, PlusSvg, SearchSvg, RightArrowSvg } from '../../../assets/icons/user';
import CustomTextInput from '../../../components/carts/customTextInput';
import { colors } from '../../../config/colors';
import { mvs } from '../../../config/metrices';

import Bold from '../../../typography/bold-text';
import Regular from '../../../typography/regular-text';

const GeoFenceScreen = ({ navigation }) => {
  const warehouses = [
    {
      id: 1,
      name: 'Warehouse 1',
      address: '350 Baker Rivid, Albert Road.',
      vehicles: ['ABC-999DE', 'XCF-7654'],
    },
    {
      id: 2,
      name: 'Warehouse 2',
      address: '45 Baker Rivid, Armor Road.',
      vehicles: ['KJU-0989'],
    },
    {
      id: 3,
      name: 'Main Industry Warehouse',
      address: '45 Baker Rivid, Armor Road.',
      vehicles: ['JIU-8046', 'AAS-7654', 'JHY-998'],
    },
  ];

  const handleAddPress = () => {
    navigation.navigate('AddNewFence'); 
  };

  const handleWarehousePress = (warehouseId) => {

    navigation.navigate('EditFence', { warehouseId });
  };

  const renderWarehouse = ({ item }) => (
    <TouchableOpacity onPress={() => handleWarehousePress(item.id)} style={styles.card}>
      <View style={styles.row}>
        <Bold style={styles.warehouseName}>{item.name}</Bold>
        <RightArrowSvg />
      </View>
      <Regular style={styles.warehouseAddress}>{item.address}</Regular>
      {item.vehicles.map((vehicle, index) => (
        <View key={index} style={styles.vehicleRow}>
          {TruckSvg ? <TruckSvg /> : null}
          <Bold style={styles.vehicleText}>{vehicle}</Bold>
        </View>
      ))}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <HomeHeader
        back
        title={'Geofence'}
        noti
        rightButton={
          <TouchableOpacity onPress={handleAddPress}>
            <PlusSvg />
          </TouchableOpacity>
        }
      />

      <View style={{ padding: mvs(16) }}>
        <CustomTextInput
          containerStyle={styles.searchInput}
          placeholder={'Search'}
          leftIcon={<SearchSvg />}
        />
      </View>
      {warehouses.length > 0 ? (
        <FlatList
          data={warehouses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderWarehouse}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>
            No previous data. Click the "+" button to add data.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: mvs(40),
    paddingHorizontal: mvs(20),
    backgroundColor: colors.gray,
  },
  listContainer: {
    paddingHorizontal: mvs(16),
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: mvs(8),
    padding: mvs(16),
    marginBottom: mvs(16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  warehouseName: {
    fontSize: mvs(16),
    marginBottom: mvs(8),
  },
  warehouseAddress: {
    fontSize: mvs(14),
    color: colors.grey,
    marginBottom: mvs(8),
  },
  vehicleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: mvs(4),
  },
  vehicleText: {
    fontSize: mvs(14),
    marginLeft: mvs(8),
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: mvs(14),
    color: colors.grey,
    textAlign: 'center',
    paddingHorizontal: mvs(16),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
});

export default GeoFenceScreen;
