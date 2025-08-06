// LogReportApp.js
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {HomeHeader} from '../../../components/Headers';
import {colors} from '../../../util/color';
import PlusSvg from '../../../assets/svg/plussvg';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ELDLogChart from '../../../components/Charts/ELDLogChart';
import TabButtons from '../../../components/Struct/HomeStruct/LogReportStruct/TabButtons';
import DriverInfoCard from '../../../components/Struct/HomeStruct/LogReportStruct/DriverInfoCard';
import InfoCard from '../../../components/Struct/HomeStruct/LogReportStruct/InfoCard';
import Table from '../../../components/Struct/HomeStruct/Table';
import WeekCalendar from '../../../components/Struct/HomeStruct/LogReportStruct/WeekCalendar';
import {mvs} from '../../../util/metrices';
import BackIcon from '../../../assets/svg/back-icon';
import BackHeaderIcon from '../../../assets/svg/backHeaderSvg';
import DvirReprot from '../../../components/Struct/HomeStruct/LogReportStruct/DvirReprot';
import AlertBox from '../../../components/Struct/HomeStruct/AlertBox';

// Main Tab Component
const MainTab = () => {
  const shippingData = [
    {label: 'Shipping documents', value: 'N/A'},
    {label: 'Trailer numbers', value: 'bobtail'},
    {label: 'Certify', value: 'Not Signed', isError: true},
    {label: 'Notes', value: 'Lorem ipsum'},
  ];

  const driverData = [
    {label: 'Driver Name', value: 'Lorem ipsum'},
    {label: 'Unit #', value: '1234'},
    {label: 'Main Terminal', value: '5432 Lorem Ipsum'},
  ];

  return (
    <View style={styles.TripDetails}>
      <Text style={styles.TripDetailsHeading}>Trip Details</Text>

      <View
        style={{flex: 1, flexDirection: 'row', gap: 10, paddingHorizontal: 20}}>
        <View style={{flex: 3}}>
          <InfoCard data={shippingData} />
        </View>
        <View style={{flex: 2}}>
          <DriverInfoCard data={driverData} />
        </View>
      </View>
    </View>
  );
};

// Logs Tab Component
const LogsTab = () => {
  return (
    <View style={{marginHorizontal: mvs(20)}}>
      <EldLogTable title={false} />
    </View>
  );
};

const LogReport = () => {
  const [activeTab, setActiveTab] = useState('Main');
  const [selectedDay, setSelectedDay] = useState(14);

  const navigation = useNavigation();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Main':
        return <MainTab />;
      case 'Logs':
        return (
          <>
            <Text style={styles.header}>Log Details</Text>

            <View
              style={{
                backgroundColor: '#eee',
                marginHorizontal: 10,
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
              }}>
              <ELDLogChart />
              <AlertBox
                content="Violation: Trailer is not set"
                color="#F9DADB"
                color2="red"
              />
              <AlertBox
                content="Violation: Trailer is not set"
                color="#FCEACB"
                color2="brown"
              />
              <Table />
            </View>
          </>
        );
      case 'DVIR':
        return <DvirReprot />;
      default:
        return <MainTab />;
    }
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
        <Text style={styles.header}>Log Report</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Tab Buttons */}
        <View style={{marginHorizontal: mvs(20)}}>
          <TabButtons activeTab={activeTab} onTabChange={setActiveTab} />
        </View>

        {/* Week Calendar */}
        {activeTab !== 'DVIR' && (
          <View style={styles.calendar}>
            <WeekCalendar
              selectedDay={selectedDay}
              onDaySelect={setSelectedDay}
            />
          </View>
        )}

        {/* Tab Content */}
        {renderTabContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 10,
  },

  header: {
    fontSize: mvs(18),
    fontWeight: '600',
    color: colors.black,
    paddingHorizontal: mvs(15),
    justifyContent: 'flex-start',
  },
  content: {
    flex: 1,
    paddingVertical: mvs(35),
  },
  addButton: {
    position: 'absolute',
    bottom: mvs(30),
    right: mvs(20),
    width: mvs(56),
    height: mvs(56),
    borderRadius: mvs(28),
    backgroundColor: colors.btn.Darkred,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  calendar: {
    marginHorizontal: mvs(20),
    marginBottom: mvs(20),
  },

  TripDetailsHeading: {
    fontSize: mvs(18),
    fontWeight: 'bold',
    marginBottom: mvs(10),
    color: colors.text.primary,
    marginLeft: 20,
  },
  TripDetails: {
    marginVertical: mvs(20),
    marginBottom: mvs(20),
    borderRadius: mvs(12),
  },
});

export default LogReport;
