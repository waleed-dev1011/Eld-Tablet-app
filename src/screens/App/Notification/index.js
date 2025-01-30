import React, {useState} from 'react';
import {View, TouchableOpacity, FlatList, Alert} from 'react-native';
import {HomeHeader} from '../../../components/Headers';
import notificationsData from '../../../util/dummyData';
import {NotificationSVG} from '../../../assets/svg';
import Bold from '../../../typography/BoldText';
import Regular from '../../../typography/RegularText';
import styles from './styles';

const NotificationScreen = () => {
  const handleNotificationClick = notification => {
    Alert.alert(notification.title, notification.message);
  };

  return (
    <View style={styles.container}>
      <HomeHeader title="Notifications" back />
      <FlatList
        data={notificationsData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.notificationItem}
            onPress={() => handleNotificationClick(item)}>
            <View style={styles.notificationContent}>
              <NotificationSVG style={styles.icon} />
              <View style={styles.textContainer}>
                <Bold>{item.title}</Bold>
                <Regular>{item.message}</Regular>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NotificationScreen;
