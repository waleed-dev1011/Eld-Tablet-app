import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {mvs} from '../../../util/metrices';
import {colors} from '../../../util/color';
import {SignalSvg} from '../../../assets/svg'; // Adjust path as needed
import WarningModal from '../../Modals/WarningModal';
import {useNavigation} from '@react-navigation/native';
import WifiSvg from '../../../assets/svg/wifiSvg';

const EldStatus = ({isConnected = true, carrier = 'ELD'}) => {
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const navigation = useNavigation();

  const handleConnect = () => {
    if (!isConnected) {
      // Show permission modal when trying to connect
      setShowPermissionModal(true);
    }
  };

  const handleAllowPermissions = () => {
    // Handle the actual connection logic here
    console.log('Allowing permissions and connecting to ELD...');
    setShowPermissionModal(false);
    navigation.navigate('Permissions');

    // Add your ELD connection logic here
    // For example: connectToELD()
  };

  const handleCancel = () => {
    setShowPermissionModal(false);
  };

  return (
    <>
      <TouchableOpacity
        onPress={handleConnect}
        style={[
          styles.container,
          {
            backgroundColor: isConnected ? colors.base.green : colors.base.red,
          },
        ]}>
        <View style={styles.leftSection}>
          <View style={styles.signalIcon}>
            <WifiSvg height={mvs(24)} width={mvs(24)} />
          </View>
          <Text style={styles.carrier}>
            {carrier}
            {` `}
            {isConnected ? 'Connected' : 'Not connected'}
          </Text>
          {/* <Text style={styles.dot}>.</Text> */}
          {/* <Text style={styles.status}> */}
          {/* </Text> */}
        </View>
      </TouchableOpacity>

      {/* Permission Modal */}
      <WarningModal
        visible={showPermissionModal}
        onClose={handleCancel}
        title=""
        message="In order to connect to the ELD, you must allow all the permissions."
        showIcon={true}
        iconfill={colors.base.red} // Red warning icon color
        showCloseButton={true}
        showButtons={true}
        leftTitle="Cancel"
        rightTitle="Allow Permissions"
        onLeftPress={handleCancel}
        onRightPress={handleAllowPermissions}
        closeOnBackdropPress={true}
        animationType="fade"
        // Custom styling to match the image
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.base.red,
    paddingHorizontal: mvs(12),
    paddingVertical: mvs(8),
    marginTop: mvs(22),
    borderRadius: mvs(18),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signalIcon: {
    marginRight: mvs(8),
    backgroundColor: '#fff',
    width: mvs(40),
    height: mvs(40),
    borderRadius: mvs(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  carrier: {
    color: 'white',
    fontSize: mvs(23),
    fontWeight: '600',
    marginRight: mvs(8),
  },
  dot: {
    color: 'white',
    fontSize: mvs(22),
    fontWeight: 'bold',
    marginRight: mvs(8),
  },
  status: {
    color: 'white',
    fontSize: mvs(20),
    fontWeight: 'light',
  },
});

export default EldStatus;
