import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../config/colors"; // Custom color file
import EditPassword from "../screens/app/edit-password";
import HelpCenter from "../screens/app/help-center";
import HistoryScreen from "../screens/app/history";
import NotificationScreen from "../screens/app/notification-screen";
import SettingScreen from "../screens/app/setings";
import TrackScreen from "../screens/app/track";
import TrackHistory from "../screens/app/track-history";
import TrackVehicle from "../screens/app/track-vehicle";
import ChangePassword from "../screens/auth/change-password";
import Login from "../screens/auth/login";
import VerificationScreen from "../screens/auth/verification";
import CurvedBottomTab from "./bottom-tab";
import MyTabs from "./bottom-tab";
import DrawerNavigation from "./drawer-navigation/drawer-navigation";
import ForgetPasswordScreen from "../screens/auth/forgetPasswordScreen";
import EditDevice from "../screens/app/devices/EditDevice";
import SubscriptionScreen from "../screens/app/subscriptionScreen/SubscriptionScreen";
import FAQs from "../screens/app/faqs/FAQs";
import SubscriptionDevices from "../screens/app/subscriptionDevices/SubscriptionDevices";
import SubscriptionRenew from "../screens/app/subscriptionRenew/SubscriptionRenew";
import ContactScreen from "../screens/app/contactscreen/ContactScreen";
import RenewScreen from "../screens/app/renewScreen/RenewScreen";
import InvoiceScreen from "../screens/app/invoioceDownload/InvoiceDownlaod";
import TicketList from "../screens/app/ticketScreen/TicketScreen";
import TicketDetailView from "../screens/app/ticketView/TicketView";
import GeoFenceScreen from "../screens/app/geofence/geoFence";
import AddNewFence from "../screens/app/addnewFence/AddNewFence";
import GeoFenceAddress from "../screens/app/geoFenceAddress/GeoFenceAddres";
import GeoFenceType from "../screens/app/geoFenceType/GeoFenceType";
import AssignVehicle from "../screens/app/assignVehicle/AssignVehicle";
import EditFence from "../screens/app/editFence/EditFence";
import SplashScreen from "../screens/app/splashScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} />
      <StatusBar
        translucent={false}
        backgroundColor={colors.white}
        barStyle={"dark-content"}
      />
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group>
          <Stack.Screen name="SplashScreen" component={SplashScreen}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen
            name="VerificationScreen"
            component={VerificationScreen}
          />
          <Stack.Screen
            name="ForgetPasswordScreen"
            component={ForgetPasswordScreen}
          />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />

          <Stack.Screen name="TrackHistory" component={TrackHistory} />
          <Stack.Screen name="TrackScreen" component={TrackScreen} />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
          <Stack.Screen name="TrackVehicle" component={TrackVehicle} />
          <Stack.Screen
            name="NotificationScreen"
            component={NotificationScreen}
          />

          {/* <Stack.Screen name="EditDevice" component={EditDevice} /> */}
          <Stack.Screen name="SettingScreen" component={SettingScreen} />
          <Stack.Screen name="EditPassword" component={EditPassword} />
          <Stack.Screen name="HelpCenter" component={HelpCenter} />
          <Stack.Screen name="FAQs" component={FAQs} />
          <Stack.Screen
            name="SubscriptionScreen"
            component={SubscriptionScreen}
          />
          <Stack.Screen
            name="SubscriptionDevices"
            component={SubscriptionDevices}
          />
          <Stack.Screen
            name="SubscriptionRenew"
            component={SubscriptionRenew}
          />
          <Stack.Screen name="RenewScreen" component={RenewScreen}/>
          <Stack.Screen name="ContactScreen" component={ContactScreen} />
          <Stack.Screen name="InvoiceScreen" component={InvoiceScreen}/>
          <Stack.Screen name="TicketList" component={TicketList}/>
          <Stack.Screen name="TicketDetailView" component={TicketDetailView}/>
          <Stack.Screen name="GeoFenceScreen" component={GeoFenceScreen}/>
   
          <Stack.Screen name="AddNewFence" component={AddNewFence}/>
          <Stack.Screen name="GeoFenceAddress" component={GeoFenceAddress}/>
          <Stack.Screen name="GeoFenceType" component={GeoFenceType}/>
          <Stack.Screen name="AssignVehicle" component={AssignVehicle}/>
          <Stack.Screen name="EditFence" component={EditFence}/>
        </Stack.Group>
    
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    backgroundColor: colors.white,
  },
});

export default AppNavigator;
