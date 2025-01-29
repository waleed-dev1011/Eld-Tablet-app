import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import Header from '../../components/UI/Header';
import {NotificationSVG} from '../../assets/svg';

const NotificationScreen = () => {
  const [notifications] = useState([
    {
      id: '1',
      title: 'New message from John',
      message: 'Hey, check out the new project.',
    },
    {
      id: '2',
      title: 'Meeting Reminder',
      message: 'Don’t forget your meeting at 3 PM.',
    },
    {
      id: '3',
      title: 'System Update',
      message: 'A new update is available for your app.',
    },
    {
      id: '4',
      title: 'New comment on your post',
      message: 'Someone commented on your recent post.',
    },
    {
      id: '5',
      title: 'Security Alert',
      message: 'We noticed an unusual login attempt on your account.',
    },
  ]);

  const handleNotificationClick = notification => {
    Alert.alert(notification.title, notification.message);
  };

  return (
    <View style={styles.container}>
      <Header title={'Notifications'} />
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.notificationItem}
            onPress={() => handleNotificationClick(item)}>
            <View style={styles.notificationContent}>
              <NotificationSVG style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationMessage}>{item.message}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  notificationItem: {
    padding: 14,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  notificationContent: {
    flexDirection: 'row', // Align the icon and text horizontally
    alignItems: 'center', // Vertically center the icon and text
  },
  icon: {
    width: 40, // Adjust the icon size as needed
    height: 40, // Maintain aspect ratio or size you prefer
    marginRight: 12, // Space between icon and text
  },
  textContainer: {
    flexDirection: 'column', // Stack title and message vertically
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#555',
  },
});

export default NotificationScreen;
