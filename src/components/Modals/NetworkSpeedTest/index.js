import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {RadialSlider} from 'react-native-radial-slider';
import styles from './styles';
import {colors} from '../../../util/color';

const NetworkSpeedTest = ({isVisible, onClose}) => {
  const [speed, setSpeed] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const runSpeedTest = () => {
    setIsLoading(true);
    setSpeed(0);
    let currentSpeed = 0;
    const targetSpeed = Math.random() * 95 + 5;
    const interval = setInterval(() => {
      currentSpeed += Math.random() * 10;
      if (currentSpeed >= targetSpeed) {
        currentSpeed = targetSpeed;
        clearInterval(interval);
        setIsLoading(false);
      }
      setSpeed(Math.round(currentSpeed * 100) / 100);
    }, 100);
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
      animationIn="zoomIn"
      animationOut="zoomOut"
      backdropOpacity={0.4}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Check Network</Text>
          <View />
        </View>

        <View style={styles.divider} />

        <View style={styles.sliderContainer}>
          <RadialSlider
            variant="speedometer-marker"
            value={speed}
            min={0}
            max={100}
            onChange={() => {}}
            size={250}
            valueStyle={{fontSize: 25, fontWeight: 'bold', color: '#000'}}
            thumbRadius={0}
            markerLineSize={40}
            sliderWidth={50}
            sliderTrackColor={'#adbd6e'}
            isHideThumb={false}
            linearGradient={[
              {offset: '0%', color: colors.base.red},
              {offset: '100%', color: colors.base.red},
            ]}
            isHideMarkerLine={false}
            needleColor={colors.base.primary}
            activeStrokeColor="#fff"
            needleBackgroundColor={colors.base.primary}
          />
        </View>

        <TouchableOpacity
          style={[styles.checkButton]}
          onPress={runSpeedTest}
          disabled={isLoading}>
          <Text style={[styles.checkButtonText]}>
            {isLoading ? 'Testing...' : 'Check Network'}
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default NetworkSpeedTest;
