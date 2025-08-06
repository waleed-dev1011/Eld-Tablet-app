// DrawerNavigation.js
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {colors} from '../../util/color';
import MyTabs from '../BottomTab/bottomTab'; // MyTabs should be inside the drawer
import CustomDrawerContent from './DrawerContent'; // Custom Drawer Content
import HomeScreen from '../../screens/App/Home';
import DriveStatusScreen from '../../screens/App/Drive';
import NotificationScreen from '../../screens/App/Notification';
import Chat from '../../screens/App/Chat';
import LogReport from '../../screens/App/LogReport';
import CustomerSupport from '../../screens/App/CustomerSupport';
import InspectionReport from '../../screens/App/InspectionReport';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.white,
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
        },
      }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="DriveStatusScreen" component={DriveStatusScreen} />
      <Drawer.Screen name="NotificationScreen" component={NotificationScreen} />
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="LogReport" component={LogReport} />
      <Drawer.Screen name="CustomerSupport" component={CustomerSupport} />
      <Drawer.Screen name="InspectionReport" component={InspectionReport} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
