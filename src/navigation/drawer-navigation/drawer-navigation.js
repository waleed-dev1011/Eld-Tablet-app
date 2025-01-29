import {createDrawerNavigator} from '@react-navigation/drawer';

import React from 'react';
import {colors} from '../../config/colors';
import CustomDrawerContent from './drawer-content';
import MyTabs from '../bottom-tab';
const Drawer = createDrawerNavigator();       

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.white,
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="MyTabs" component={MyTabs} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
                 