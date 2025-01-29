import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { HomeHeader } from '../../../components/molicules/home-header';
import { Truck } from "../../../assets/images"; 
import { colors } from '../../../config/colors';
import { mvs } from '../../../config/metrices';
import { MyButton } from '../../../components/molicules';
import Bold from '../../../typography/bold-text';
import { useQuery } from "@apollo/client";
import { GET_VEHICLES } from "../../../services/query/vehicleQuery";

const AssignVehicle = ({ navigation }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleAddPress = () => {
    navigation.navigate('GeoFenceScreen');
  };

  const { data, loading, error } = useQuery(GET_VEHICLES);

  const toggleSelection = (userId) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  const vehicles = data?.getVehicles || []; 

  return (
    <View style={styles.container}>
      <HomeHeader back title="Assign Vehicle" noti />
      <View style={{ padding: mvs(16) }}>
        {vehicles.map((user) => (
          <TouchableOpacity
            key={user.id}
            style={styles.userRow}
            onPress={() => toggleSelection(user.id)}
          >
            <View style={styles.checkboxContainer}>
              <View
                style={[
                  styles.checkbox,
                  selectedUsers.includes(user.id) && styles.checkboxSelected,
                ]}
              />
            </View>
            <Image
              source={Truck}
              style={styles.avatar}
            />
            <Bold style={styles.userId}>{user.registrationNumber}</Bold>
          </TouchableOpacity>
        ))}

        <MyButton
          title={"Save"} 
          onPress={handleAddPress}
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
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: mvs(20),
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  checkboxContainer: {
    marginRight: 12,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
  },
  checkboxSelected: {
    backgroundColor: '#4F46E5',
    borderColor: '#4F46E5',
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 16,
    marginRight: 12,
  },
  userId: {
    fontSize: 16,
    color: '#111827',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AssignVehicle;
