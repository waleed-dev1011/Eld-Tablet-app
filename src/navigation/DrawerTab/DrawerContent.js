import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ChatSVG,
  HOMESVG,
  NotificationSVG,
  ProfileSVG,
  SettingSVG,
} from '../../assets/svg';
import Regular from '../../typography/RegularText';
import Line from '../../components/atoms/InputFields/Line';
import Bold from '../../typography/BoldText';
import {mvs} from '../../util/metrices';
import {colors} from '../../util/color';
const CustomDrawerContent = props => {
  const {navigation} = props;
  const handleNavigate = screenName => {
    // console.log('Navigating to:', screenName);
    if (navigation && screenName) {
      navigation.navigate(screenName);
    }
  };

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  const menuItems = [
    {
      label: 'Geo Fences',
      icon: <HOMESVG />,
      screen: 'GeoFenceScreen',
    },
    {
      label: 'Subscription',
      icon: <ProfileSVG />,
      screen: 'SubscriptionScreen',
    },
    {label: 'FAQ', icon: <SettingSVG />, screen: 'FAQs'},
    {
      label: 'Support & Helpdesk',
      icon: <ChatSVG />,
      screen: 'TicketList',
    },
    {label: 'Contact Us', icon: <NotificationSVG />, screen: 'ContactScreen'},
  ];
  //   const {firstName, lastName, email} = data?.getUsers[0] || {};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            height: 55,
            width: 55,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: mvs(27.5),
            backgroundColor: '#353945',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: mvs(25),
            }}>
            AK
          </Text>
        </View>
        <Bold label="John Smith" style={styles.label} />
        <Regular label="john@gmail.com" style={styles.mail} />
      </View>
      <Line />
      <View style={styles.drawerContent}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index.toString()}
            onPress={() => handleNavigate(item.screen)}
            style={styles.menuItem}>
            {item?.icon}
            <Regular label={item?.label} style={styles.label} />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.menuItem}>
        <HOMESVG />
        <Regular label="Logout" style={styles.label} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingLeft: mvs(44),
    paddingBottom: mvs(35),
    paddingTop: mvs(84),
    justifyContent: 'center',
  },
  mail: {
    marginTop: 5,
  },
  drawerContent: {
    marginTop: mvs(15),
  },
  menuItem: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: mvs(6),
    gap: mvs(20),
    minHeight: 50,
    marginTop: 'auto',
    paddingHorizontal: mvs(37),
  },
  label: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.5,
  },
});
