import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { HomeHeader } from '../../../components/molicules/home-header';
import { SearchSvg } from '../../../assets/icons/user';
import { colors } from '../../../config/colors';
import { mvs } from '../../../config/metrices';
import MapView, { Marker } from "react-native-maps";
import Bold from '../../../typography/bold-text';
import Regular from '../../../typography/regular-text';
import { MyButton } from '../../../components/molicules';

const GeoFenceAddress = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');
  const [showMessageBox, setShowMessageBox] = useState(true); // State for message box visibility

  const handleAddPress = () => {
    navigation.navigate('GeoFenceType');
  };

  const clearSearch = () => {
    setSearchText('');
    setSelectedPlace('');
  };

  const handleSubmit = () => {
    setSelectedPlace(searchText);
    setSearchText('');
  };

  const fixedLocation = {
    latitude: 33.620798,  
    longitude: 73.066439, 
  };

  return (
    <View style={styles.container}>
      <HomeHeader back title={'Geofence Address'} noti />

      <View style={styles.searchInputContainer}>
        <SearchSvg />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSubmit} 
          blurOnSubmit={false} 
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Text style={styles.clearText}>X</Text>
          </TouchableOpacity>
        )}
      </View>

   
     

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 33.620798, 
            longitude: 73.066439, 
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={fixedLocation} />
        </MapView>
        {showMessageBox && (
        <View style={styles.messageBox}>
          <Text style={styles.messageText}>
            Create a geofence by entering an address into the search bar.
          </Text>
          <TouchableOpacity onPress={() => setShowMessageBox(false)}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
        </View>
      )}
      </View>

      {selectedPlace ? (
        <View style={styles.bottomModal}>
          <Regular style={{ textAlign: "center" }}> Selected Address</Regular>
          <Bold style={styles.selectedAddress}>{selectedPlace}</Bold>

          <MyButton
            title={"Next"}
            onPress={handleAddPress}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey + '40',
    paddingHorizontal: mvs(15),
    borderRadius: mvs(10),
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: mvs(25),
    marginTop: mvs(10),
  },
  searchInput: {
    flex: 1,
    fontSize: mvs(14),
    paddingVertical: mvs(10),
    color: colors.black,
    marginLeft: mvs(10),
  },
  clearButton: {
    width: mvs(22),
    height: mvs(22),
    borderRadius: mvs(12),
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: mvs(10),
  },
  clearText: {
    color: colors.white,
    fontSize: mvs(12),
    textAlign: 'center',
  },
  mapContainer: {
    flex: 1,
    marginTop: mvs(10),
  },
  map: {
    flex: 1,
  },
  messageBox: {
    position: "absolute", 
    top: mvs(5),
    left: mvs(20),
    right: mvs(20), 
    zIndex: 1,
    backgroundColor: colors.grey ,
    padding: mvs(10),
    borderRadius: mvs(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  },
  
  messageText: {
    flex: 1,
    fontSize: mvs(14),
    color: colors.black,
  },
  closeText: {
    color: colors.red,
    fontSize: mvs(16),
    fontWeight: 'bold',
  },
  bottomModal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    padding: mvs(20),
    borderTopLeftRadius: mvs(20),
    borderTopRightRadius: mvs(20),
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  selectedAddress: {
    fontSize: mvs(18),
    color: colors.black,
    marginBottom: mvs(10),
    textAlign: "center"
  },
});

export default GeoFenceAddress;
