import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SendFileModal from '../../../components/Modals/SendFileModal';
import SendEmailModal from '../../../components/Modals/SendEmailModal';
import styles from './styles';
import {HomeHeader} from '../../../components/Headers';
import BackHeaderIcon from '../../../assets/svg/backHeaderSvg';
import InspectionLogModal from '../../../components/Modals/InspecionReportModal';

// DOTSectionCard component integrated into parent
const DOTSectionCard = ({title, subtitle, buttonText, onPress}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionSubtitle}>{subtitle}</Text>
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={onPress}>
        <Text style={[styles.buttonText, styles.secondaryButtonText]}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const InspectionReport = () => {
  const [sendFileModalVisible, setSendFileModalVisible] = useState(false);
  const [sendEmailModalVisible, setSendEmailModalVisible] = useState(false);
  const [logModalVisible, seLogtModalVisible] = useState(false);

  const navigation = useNavigation();

  // Dynamic data for the sections
  const sectionsData = [
    {
      id: 'inspection',
      title: 'Review the logs for the past 7 days + today',
      subtitle:
        'Click "Begin Inspection" button, and hand your device to the officer.',
      buttonText: 'Begin Inspection',
      buttonStyle: 'primary',
      action: () => seLogtModalVisible(true),
    },
    {
      id: 'email',
      title: 'Send the logs for the past 7 days + today via email',
      subtitle: 'Email your logs to the officer if they request a paper copy.',
      buttonText: 'Send via email',
      buttonStyle: 'secondary',
      action: () => setSendEmailModalVisible(true),
    },
    {
      id: 'file',
      title: 'Send the ELD output file to the DOT officer',
      subtitle: 'Send your ELD Output file to the DOT if the officer requests.',
      buttonText: 'Send the file',
      buttonStyle: 'secondary',
      action: () => setSendFileModalVisible(true),
    },
  ];

  const handleBeginInspection = () => {
    navigation.navigate('DotLogReport');
    // Alert.alert(
    //   "Begin Inspection",
    //   "Please hand your device to the officer for inspection"
    // );
  };

  const handleSendFile = data => {
    Alert.alert(
      'Success',
      `File will be sent via ${data.type} service with comment: ${data.comment}`,
    );
  };

  const handleSendEmail = data => {
    Alert.alert('Success', `Logs will be sent to: ${data.email}`);
  };

  const handleGoBack = () => {
    // Handle navigation back
    Alert.alert('Go Back', 'Navigate back to previous screen');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <HomeHeader />
      <View style={styles.divider} />
      <View
        style={{
          flexDirection: 'row',
          gap: 5,
          alignItems: 'center',
          marginHorizontal: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackHeaderIcon />
        </TouchableOpacity>
        <Text style={styles.header}>Inspection Report</Text>
      </View>
      {/* Main Content */}
      <View style={styles.content}>
        {sectionsData.map(section => (
          <DOTSectionCard
            key={section.id}
            title={section.title}
            subtitle={section.subtitle}
            buttonText={section.buttonText}
            buttonStyle={section.buttonStyle}
            onPress={section.action}
          />
        ))}
      </View>
      {/* Send File Modal */}
      <SendFileModal
        visible={sendFileModalVisible}
        onClose={() => setSendFileModalVisible(false)}
        onSend={handleSendFile}
      />
      {/* Send Email Modal */}
      <SendEmailModal
        visible={sendEmailModalVisible}
        onClose={() => setSendEmailModalVisible(false)}
        onSend={handleSendEmail}
      />
      <InspectionLogModal
        visible={logModalVisible}
        onClose={() => seLogtModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default InspectionReport;
