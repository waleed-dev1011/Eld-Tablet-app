import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ChatSVG,
  HOMESVG,
  NotificationSVG,
  ProfileSVG,
  SettingSVG,
} from '../../assets/svg';
import {colors} from '../../util/color';
import {mvs} from '../../util/metrices';
import HomeScreen from '../../screens/Starting/Home';
import Chat from '../../screens/Starting/Chat';
import NotificationScreen from '../../screens/Starting/Notification';
import Settings from '../../screens/Starting/Settings';
import Profile from '../../screens/Starting/Profile';
const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({focused}) => {
          let IconComponent;
          let label;
          switch (route.name) {
            case 'Home':
              IconComponent = HOMESVG;
              label = 'Home';
              break;
            case 'Chat':
              IconComponent = ChatSVG;
              label = 'Chat';
              break;
            case 'Notification':
              IconComponent = NotificationSVG;
              label = 'Notfication';
              break;
            case 'Settings':
              IconComponent = SettingSVG;
              label = 'Settings';
              break;
            case 'Profile':
              IconComponent = ProfileSVG;
              label = 'Profile';
              break;
            default:
              IconComponent = HOMESVG;
          }
          if (IconComponent) {
            return (
              <View style={styles.iconContainer}>
                <IconComponent color={focused ? colors.primary : colors.grey} />
                <Text
                  style={[
                    styles.label,
                    {color: focused ? colors.primary : colors.grey},
                  ]}>
                  {label}
                </Text>
              </View>
            );
          } else {
            return null;
          }
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    height: mvs(65),
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
    width: 50,
    marginTop: mvs(3),
    fontFamily: 'DMSans-regular',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});
export default MyTabs;
