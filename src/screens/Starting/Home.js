import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../../redux/slices/userSlice';
import {useNavigation} from '@react-navigation/native';
import AddModal from '../../components/Home/Modals/AddModal';
import {HomeHeader} from '../../components/UI/HomeHeader';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false); // State for modal visibility

  // Handle logout
  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.replace('Login');
    ToastAndroid.show('Logged out successfully', ToastAndroid.SHORT);
  };

  // Handle modal close
  const handleClose = () => {
    setModalVisible(false);
  };

  // Handle modal open
  const handleOpen = () => {
    setModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HomeHeader title="Home" />
      <Text style={styles.title}>Welcome to the Home Screen!</Text>

      <AddModal
        visible={isModalVisible}
        onClose={handleClose}
        title="Hello"
        message="You have opened a Modal."
      />

      <TouchableOpacity onPress={handleOpen} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Open Modal</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
