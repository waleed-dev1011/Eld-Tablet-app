import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { HomeHeader } from '../../../components/molicules/home-header';
import { colors } from '../../../config/colors';
import { mvs } from '../../../config/metrices';
import { MyButton } from '../../../components/molicules';

const AddNewFence = ({ navigation }) => {
  const [wareHouse, setWareHouse]=useState("")
  const handleNextPress = () => {

    navigation.navigate('GeoFenceAddress');
  };

  return (
    <View style={styles.container}>
      <HomeHeader
        back
        title={'Add New Fence'}
        noti
      />

      <TextInput 
        placeholder="Fence Name" 
        style={styles.input} 
        value={wareHouse}
        onChangeText={(text=>setWareHouse(text))}
        placeholderTextColor={colors.black} 
         submitBehavior="persist"
      />

      <View style={{ padding: mvs(20) }}>
        <MyButton 
          title={"Next"} 
          onPress={handleNextPress} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  input: {
    backgroundColor: colors.grey + 40,
    padding: mvs(16),
    borderRadius: mvs(10),
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: mvs(25),
    marginTop: mvs(20),
  },
});

export default AddNewFence;
