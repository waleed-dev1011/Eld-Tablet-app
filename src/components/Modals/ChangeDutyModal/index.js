import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import {mvs} from '../../../util/metrices';
import CircularProgressChart from '../../Charts/CircularProgressChart';
import {colors} from '../../../util/color';
import PowerOnSvg from '../../../assets/svg/powerOnSvg';
import {MoonSvg} from '../../../assets/svg';
import MidTruckSvg from '../../../assets/svg/midTruckSvg';
import LocationErrorIcon from '../../../assets/svg/locationErrorSvg';
import PlusIcon from '../../../assets/svg/plusIconSvg';
import InfoCircleIcon from '../../../assets/svg/iIconSvg';
import LocationWarningModal from '../LoctaionWarningModal';
import QuickNotesModal from '../QuickNote';

const ChangeDutyStatusModal = ({visible, onCancel, onSave}) => {
  const [currentStatus, setCurrentStatus] = useState('off-duty');
  const [warningModal, setWarningModal] = useState(false);
  const [addNoteModal, setAddNoteModal] = useState(false);

  const [formData, setFormData] = useState({
    'off-duty': {
      trailerNumber: '',
      shippingDocument: '',
      location: '',
      notes: '',
    },
    'on-duty': {
      trailerNumber: '',
      shippingDocument: '',
      location: '',
      notes: '',
    },
    sleep: {trailerNumber: '', shippingDocument: '', location: '', notes: ''},
  });

  const handleCancel = () => {
    setAddNoteModal(false);
    setWarningModal(false);
  };

  const handleConfirm = () => {
    setWarningModal(false);
  };

  const {width} = Dimensions.get('window');
  const cardWidth = Math.min(width - mvs(32), 720);

  const progressData = [
    {
      id: 1,
      totalTime: 8 * 60,
      currentTime: 4 * 60,
      label: 'BREAK',
      color: colors.chart.rgb_orange,
    },
    {
      id: 2,
      totalTime: 9 * 60,
      currentTime: 6 * 60,
      label: 'DRIVE',
      color: colors.chart.rgb_green,
    },
    {
      id: 3,
      totalTime: 10 * 60,
      currentTime: 9 * 60,
      label: 'SHIFT',
      color: colors.chart.rgb_blue,
    },
    {
      id: 4,
      totalTime: 65 * 60,
      currentTime: 50 * 60,
      label: 'CYCLE',
      color: colors.chart.rgb_red,
    },
  ];

  const getStatusConfig = status => {
    const isSelected = status === currentStatus;

    switch (status) {
      case 'off-duty':
        return {
          title: 'Off-duty',
          backgroundColor: isSelected ? colors.chart.skyBlue : '#eee',
          iconComponent: PowerOnSvg,
        };
      case 'sleep':
        return {
          title: 'Sleep',
          backgroundColor: isSelected ? colors.chart.yellow : '#eee',
          iconComponent: MoonSvg,
        };
      case 'on-duty':
        return {
          title: 'On-duty',
          backgroundColor: isSelected ? colors.chart.pink : '#eee',
          iconComponent: MidTruckSvg,
        };
      default:
        return {
          title: 'Off-duty',
          backgroundColor: '#eee',
          iconComponent: PowerOnSvg,
        };
    }
  };

  const {iconComponent: IconComponent} = getStatusConfig(currentStatus);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [currentStatus]: {
        ...prev[currentStatus],
        [field]: value,
      },
    }));
  };

  const handleSubmit = () => {
    onSave?.(formData[currentStatus]);
  };

  const formFields = [
    {key: 'trailerNumber', label: 'Trailer Number'},
    {key: 'shippingDocument', label: 'Shipping Document'},
    {key: 'location', label: 'Location', rightIcon: 'LocationErrorIcon'},
    {
      key: 'notes',
      label: 'Notes',
      rightIcon: 'plusIcon',
      multiline: true,
      leftIcon: true,
    },
  ];

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onCancel}
      onBackButtonPress={onCancel}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropOpacity={0.4}
      useNativeDriver
      style={styles.centeredModal}
      avoidKeyboard>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={[styles.card, {width: cardWidth}]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Change Duty Status</Text>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={{paddingBottom: 10}}
          showsVerticalScrollIndicator={false}>
          {/* Progress Charts */}
          <View style={styles.chartRow}>
            {progressData.map(item => (
              <View key={item.id} style={styles.chartWrapper}>
                <CircularProgressChart data={item} animated />
              </View>
            ))}
          </View>

          {/* Duty Type */}
          <View style={styles.dutyRow}>
            {['on-duty', 'sleep', 'off-duty'].map(status => {
              const {
                iconComponent: ConfigIcon,
                title,
                backgroundColor,
              } = getStatusConfig(status);
              const isSelected = currentStatus === status;

              return (
                <TouchableOpacity
                  key={status}
                  style={[styles.dutyButton, {backgroundColor}]}
                  onPress={() => setCurrentStatus(status)}>
                  <View style={styles.iconContainer}>
                    <ConfigIcon height={mvs(35)} width={mvs(35)} />
                  </View>
                  <Text style={{color: isSelected ? '#fff' : '#333'}}>
                    {title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Form Fields per Duty Type */}
          {formFields.map(({key, label, rightIcon, multiline}) => {
            return (
              <View key={key} style={{marginBottom: 16}}>
                <Text style={{marginBottom: 4}}>{label}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 10,
                    paddingHorizontal: 12,
                  }}>
                  <TextInput
                    style={[multiline && styles.textArea, {flex: 1}]}
                    value={formData[currentStatus][key]}
                    onChangeText={text => handleInputChange(key, text)}
                    multiline={multiline}
                  />
                  {rightIcon ? (
                    rightIcon === 'LocationErrorIcon' ? (
                      <TouchableOpacity onPress={() => setWarningModal(true)}>
                        <LocationErrorIcon />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={() => setAddNoteModal(true)}>
                        <PlusIcon />
                      </TouchableOpacity>
                    )
                  ) : null}
                </View>
              </View>
            );
          })}

          <View style={styles.waraninbox}>
            <InfoCircleIcon size={20} color="gray" />
            <Text style={styles.footerWarning}>
              Please change your status to update trailer and document.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <LocationWarningModal
        visible={warningModal}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />

      <QuickNotesModal visible={addNoteModal} onClose={handleCancel} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredModal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    maxHeight: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cancelText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  },
  saveText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
  },
  chartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  chartWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  dutyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dutyButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingVertical: 14,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  waraninbox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 1,
    paddingHorizontal: 12,
    marginTop: 10,
    paddingVertical: 10,
    gap: 10,
  },
  footerWarning: {
    fontSize: 13,
    color: '#666',
  },
});

export default ChangeDutyStatusModal;
