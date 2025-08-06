import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  Text,
  StyleSheet,
} from 'react-native';
import notificationsData from '../../../util/dummyData';
import {NotificationSVG} from '../../../assets/svg';
import Bold from '../../../typography/BoldText';
import Regular from '../../../typography/RegularText';
import {mvs} from '../../../util/metrices';
import {colors} from '../../../util/color';
import styles from './styles';
import {HomeHeader} from '../../../components/Headers';

const NotificationScreen = () => {
  const handleNotificationClick = notification => {
    Alert.alert(notification.title, notification.message);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.notificationItem}
      onPress={() => handleNotificationClick(item)}>
      <View style={styles.notificationContent}>
        <View style={styles.textContainer}>
          <Bold style={styles.title}>{item.title}</Bold>
          <Regular style={styles.message}>{item.message}</Regular>
        </View>
        <Text style={styles.timestamp}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <HomeHeader />
      <View style={styles.divider} />

      <View style={styles.container}>
        <Text style={styles.header}>Notification</Text>
        <View style={styles.notificationContainner}>
          <FlatList
            data={notificationsData}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;
