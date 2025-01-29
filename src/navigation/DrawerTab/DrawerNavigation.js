// DrawerNavigation.js
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {colors} from '../../util/color';
import MyTabs from '../BottomTab/bottomTab'; // MyTabs should be inside the drawer
import CustomDrawerContent from './DrawerContent'; // Custom Drawer Content

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.white,
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
        },
      }}>
      <Drawer.Screen name="MyTabs" component={MyTabs} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
