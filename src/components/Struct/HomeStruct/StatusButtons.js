import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
// import {
//   MidTruckSvg,
//   MoonSvg,
//   PowerOnSvg,
//   TransferSvg,
// } from '../../../assets/svg';
import {mvs} from '../../../util/metrices';
import {colors} from '../../../util/color';
import MidTruckSvg from '../../../assets/svg/midTruckSvg';
import {MoonSvg} from '../../../assets/svg';
import PowerOnSvg from '../../../assets/svg/powerOnSvg';
import TransferSvg from '../../../assets/svg/transferSvg';
import ChangeDutyStatusModal from '../../Modals/ChangeDutyModal';

const StatusButtons = () => {
  const [currentStatus, setCurrentStatus] = useState('off-duty'); // 'off-duty', 'sleep', 'on-duty'
  const [timeElapsed, setTimeElapsed] = useState({
    hours: 10,
    minutes: 45,
    seconds: 32,
  });

  const [modalVisible, setModalVisible] = useState(false);

  // Timer effect to update seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => {
        let newSeconds = prev.seconds + 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;

        if (newSeconds >= 60) {
          newSeconds = 0;
          newMinutes += 1;
        }
        if (newMinutes >= 60) {
          newMinutes = 0;
          newHours += 1;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const getStatusConfig = () => {
    switch (currentStatus) {
      case 'off-duty':
        return {
          title: 'Off-duty',
          backgroundColor: colors.chart.skyBlue,
          iconComponent: PowerOnSvg,
          leftButton: {iconComponent: MidTruckSvg, text: 'ON', active: false},
          rightButton: {iconComponent: MoonSvg, text: 'SB', active: false},
        };
      case 'sleep':
        return {
          title: 'Sleep',
          backgroundColor: colors.chart.yellow,
          iconComponent: MoonSvg,
          leftButton: {iconComponent: MidTruckSvg, text: 'ON', active: false},
          rightButton: {
            iconComponent: PowerOnSvg,
            text: 'OFF',
            active: false,
          },
        };
      case 'on-duty':
        return {
          title: 'On-duty',
          backgroundColor: colors.chart.pink,
          iconComponent: MidTruckSvg,
          leftButton: {iconComponent: MoonSvg, text: 'SB', active: false},
          rightButton: {
            iconComponent: PowerOnSvg,
            text: 'OFF',
            active: false,
          },
        };
      default:
        return {
          title: 'Off-duty',
          backgroundColor: '#4ECDC4',
          iconComponent: PowerOnSvg,
          leftButton: {iconComponent: MidTruckSvg, text: 'ON', active: false},
          rightButton: {iconComponent: MoonSvg, text: 'SB', active: false},
        };
    }
  };
  const handleLeftButtonPress = () => {
    switch (currentStatus) {
      case 'off-duty':
        setCurrentStatus('on-duty');
        break;
      case 'sleep':
        setCurrentStatus('on-duty');
        break;
      case 'on-duty':
        setCurrentStatus('sleep');
        break;
    }
    // Reset timer when status changes
    setTimeElapsed({hours: 0, minutes: 0, seconds: 0});
  };
  MidTruckSvg;
  const handleRightButtonPress = () => {
    switch (currentStatus) {
      case 'off-duty':
        setCurrentStatus('sleep');
        break;
      case 'sleep':
        setCurrentStatus('off-duty');
        break;
      case 'on-duty':
        setCurrentStatus('off-duty');
        break;
    }
    // Reset timer when status changes
    setTimeElapsed({hours: 0, minutes: 0, seconds: 0});
  };

  const formatTime = () => {
    const h = timeElapsed.hours.toString().padStart(2, '0');
    const m = timeElapsed.minutes.toString().padStart(2, '0');
    const s = timeElapsed.seconds.toString().padStart(2, '0');
    return `${h}h ${m}m ${s}s`;
  };

  const config = getStatusConfig();

  const IconComponent = config.iconComponent;
  const LeftIcon = config.leftButton.iconComponent;
  const RightIcon = config.rightButton.iconComponent;

  const handleEdit = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Main Status Card */}
      <TouchableOpacity
        onPress={handleEdit}
        style={[styles.statusCard, {backgroundColor: config.backgroundColor}]}>
        <View style={styles.iconContainer}>
          <IconComponent height={mvs(35)} width={mvs(35)} />
        </View>
        <Text style={styles.statusTitle}>{config.title}</Text>
        <Text style={styles.timeText}>{formatTime()}</Text>
      </TouchableOpacity>

      {/* Separator */}
      <View style={styles.separator}>
        <View style={styles.separatorIcon}>
          <TransferSvg height={19} width={19} />
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleLeftButtonPress}
          activeOpacity={0.7}>
          <LeftIcon height={mvs(35)} width={mvs(35)} />
          <Text style={styles.buttonText}>{config.leftButton.text}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleRightButtonPress}
          activeOpacity={0.7}>
          <RightIcon height={mvs(35)} width={mvs(35)} />
          <Text style={styles.buttonText}>{config.rightButton.text}</Text>
        </TouchableOpacity>
      </View>
      <ChangeDutyStatusModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onSave={data => {
          console.log('Form Data:', data);
          setModalVisible(false); // Close modal after save
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base.grayBg,
    borderRadius: mvs(12),
    padding: 20,
    justifyContent: 'center',
  },
  statusCard: {
    borderRadius: mvs(12),
    paddingVertical: mvs(10),
    alignItems: 'center',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 20,
  },
  statusTitle: {
    fontSize: mvs(20),
    fontWeight: '600',
    color: 'white',
    marginVertical: mvs(7),
  },
  timeText: {
    fontSize: mvs(16),
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '400',
  },
  separator: {
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderColor: colors.border2,
  },
  separatorIcon: {
    width: mvs(35),
    height: mvs(30),
    bottom: mvs(-15),
    borderRadius: mvs(25),
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separatorIconText: {
    fontSize: 20,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  actionButton: {
    backgroundColor: 'white',
    borderRadius: mvs(12),
    paddingVertical: mvs(6),
    paddingHorizontal: mvs(25),
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.45,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border2,
  },
  buttonIcon: {
    fontSize: mvs(22),
  },
  buttonText: {
    marginLeft: 10,
    fontSize: mvs(19),
    fontWeight: '600',
    color: '#333',
  },
});

export default StatusButtons;
