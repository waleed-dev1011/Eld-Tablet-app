import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Regular from '../../typography/RegularText';
import Line from '../../components/atoms/InputFields/Line';
import Bold from '../../typography/BoldText';
import {mvs} from '../../util/metrices';
import {colors} from '../../util/color';
import PermissionSvg from '../../assets/svg/permissionSvg';
import UserManualSvg from '../../assets/svg/userManualSvg';
import RefreshSvg from '../../assets/svg/refresh-svg';
import Wifi2Svg from '../../assets/svg/Wifi2Svg';
import ZoomIconSvg from '../../assets/svg/zoomSvg';
import FeedbackIconSvg from '../../assets/svg/feedbackSvg';
import CustomerSupportSvg from '../../assets/svg/customerSupportSvg';
import DiagnosisDeviceSvg from '../../assets/svg/diagnosisDeviceSvvg';
import AppUpdateSvg from '../../assets/svg/appUpdateSvg';
import LogOutSvg from '../../assets/svg/logOutSvg';
import InfoCircleIcon from '../../assets/svg/iIconSvg';
import ToggleSwitch from 'toggle-switch-react-native';
import NetworkSpeedTest from '../../components/Modals/NetworkSpeedTest';
import PermissionsModal from '../../components/Modals/PermissionModal';
import DiagnosisDeviceModal from '../../components/Modals/DiagnosisDeviceModal';
import FeedbackModal from '../../components/Modals/FeedbackModal';

const CustomDrawerContent = props => {
  const {navigation} = props;

  const [isOn, setIsOn] = useState(false);

  const [showNetworkModal, setShowNetworkModal] = useState(false);

  const [showPermissionModal, setShowPermissionModal] = useState(false);

  const [showDiagnosisModal, setShowDiagnosisModal] = useState(false);

  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const closeModal = () => {
    setShowNetworkModal(false);
    setShowPermissionModal(false);
    setShowDiagnosisModal(false);
    setShowFeedbackModal(false);
  };

  const handleMenuPress = label => {
    switch (label) {
      case 'Zoom':
        navigation.navigate('GeoFenceScreen');
        break;
      case 'Check Network':
        setShowNetworkModal(true);
        break;
      case 'Permission':
        setShowPermissionModal(true);
        break;
      case 'Feedback':
        setShowFeedbackModal(true);
        break;
      case 'Customer Support':
        navigation.navigate('CustomerSupport');
        break;
      case 'User Manual':
        navigation.navigate('Feedback');
        break;
      case 'Diagnosis of Device':
        setShowDiagnosisModal(true);
        break;
      case 'App Updates':
        navigation.navigate('Settings');
        break;
      case 'Logout':
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
        break;
      default:
        break;
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
      label: 'Zoom',
      icon: <ZoomIconSvg />,
      screen: 'GeoFenceScreen',
      rightIcon: (
        <ToggleSwitch
          isOn={isOn}
          onColor="green"
          offColor="red"
          size="small"
          onToggle={setIsOn}
        />
      ),
    },
    {
      label: 'Check Network',
      icon: <Wifi2Svg />,
      screen: 'SubscriptionScreen',
    },
    {
      label: 'Permission',
      icon: <PermissionSvg />,
      screen: 'TicketList',
      rightIcon: <InfoCircleIcon color="#e2464a" size={20} />,
    },
    {label: 'Feedback', icon: <FeedbackIconSvg />, screen: 'Feedback'},

    {
      label: 'Customer Support',
      icon: <CustomerSupportSvg />,
      screen: 'ContactScreen',
    },
    {label: 'User Manual', icon: <UserManualSvg />, screen: 'Feedback'},
    {
      label: 'Diagnosis of Device',
      icon: <DiagnosisDeviceSvg />,
      screen: 'ChatScreen',
    },
    {label: 'App Updates', icon: <AppUpdateSvg />, screen: 'Settings'},
    {label: 'Logout', icon: <LogOutSvg color="#e2464a" />, screen: 'Logout'},
  ];
  //   const {firstName, lastName, email} = data?.getUsers[0] || {};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            height: 60,
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: mvs(30),
            backgroundColor: '#353945',
            margin: 10,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: mvs(25),
            }}>
            AK
          </Text>
        </View>
        <Bold label="John Smith . 1021" style={styles.label} />
        <Regular label="john@gmail.com . +92334589675" style={styles.mail} />
        <Regular label="1124556788 . New York" style={styles.mail} />
      </View>
      <Line />
      <View style={styles.drawerContent}>
        {menuItems.map((item, index) => (
          <View key={index.toString()}>
            <TouchableOpacity
              onPress={() => handleMenuPress(item.label)}
              style={styles.menuItem}>
              {item?.icon}
              <View style={styles.labelContainer}>
                <Regular
                  label={item?.label}
                  style={[
                    styles.label,
                    item?.label?.toLowerCase() === 'logout' && {
                      color: '#e2464a',
                    },
                  ]}
                />
              </View>
              <View style={styles.rightIconContainer}>{item?.rightIcon}</View>
            </TouchableOpacity>

            {/* 👇 Add red divider line */}
            {(index === 2 || index === 5) && (
              <View style={styles.dividerLine} />
            )}
          </View>
        ))}
      </View>
      <Regular
        label="Terms & Condition  .  Privacy Policy"
        style={styles.termPolicy}
      />
      <NetworkSpeedTest isVisible={showNetworkModal} onClose={closeModal} />

      <PermissionsModal visible={showPermissionModal} onCancel={closeModal} />
      <DiagnosisDeviceModal
        visible={showDiagnosisModal}
        onCancel={closeModal}
      />
      <FeedbackModal visible={showFeedbackModal} onClose={closeModal} />
    </View>
  );
};

export default CustomDrawerContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingLeft: mvs(35),
    paddingBottom: mvs(10),
    paddingTop: mvs(70),
    justifyContent: 'center',
  },
  mail: {
    marginTop: 5,
  },
  drawerContent: {
    marginTop: mvs(5),
  },
  menuItem: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: mvs(5),
    gap: mvs(15),
    minHeight: 40,
    marginTop: 'auto',
    paddingHorizontal: mvs(37),
    justifyContent: 'flex-start',
  },
  label: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },

  labelContainer: {
    flex: 1,
    marginHorizontal: 10,
  },

  rightIconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  disabled: {
    opacity: 0.5,
  },
  dividerLine: {
    height: 1,
    backgroundColor: colors.black,
    marginVertical: mvs(10),
    marginHorizontal: mvs(20),
  },
  termPolicy: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
});
