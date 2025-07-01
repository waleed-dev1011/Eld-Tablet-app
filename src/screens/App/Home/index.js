import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import styles from './style';
import AddModal from '../../../components/Modals/AddModal';
import {HomeHeader} from '../../../components/Headers';
import {NotificationSVG} from '../../../assets/svg';
import Bold from '../../../typography/BoldText';
import Regular from '../../../typography/RegularText';

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false); // State for modal visibility

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
      <StatusBar barStyle="dark-content" backgroundColor="#000" />
      <HomeHeader title="Home" rightButton={<NotificationSVG />} />
      <Bold style={styles.title}>Welcome to the Home Screen!</Bold>

      <AddModal
        visible={isModalVisible}
        onClose={handleClose}
        title="Hello"
        message="You have opened a Modal."
      />

      <TouchableOpacity onPress={handleOpen} style={styles.logoutButton}>
        <Regular style={styles.logoutButtonText}>Open Modal</Regular>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default HomeScreen;
