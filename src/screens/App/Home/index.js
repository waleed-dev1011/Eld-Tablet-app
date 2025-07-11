import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
  Image,
} from 'react-native';
import styles from './style';
import AddModal from '../../../components/Modals/AddModal';
import {HomeHeader} from '../../../components/Headers';
import {NotificationSVG} from '../../../assets/svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {mvs} from '../../../util/metrices';
import {colors} from '../../../util/color';
import StatusButtons from '../../../components/Struct/HomeStruct/StatusButtons';
import EldStatus from '../../../components/Struct/HomeStruct/EldStatus';
import ServiceHours from '../../../components/Struct/HomeStruct/ServiceHours';
import TripDetails from '../../../components/Struct/HomeStruct/TripDetails';
import DriverDashboard from '../../../components/Struct/HomeStruct/DriverDashboard';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />
      <HomeHeader title="Home" rightButton={<NotificationSVG />} />
      <View style={{height: mvs(2), backgroundColor: colors.border}} />

      <ScrollView contentContainerStyle={{flexGrow: 1, padding: mvs(14)}}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 2}}>
              <View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <View>
                      <EldStatus />
                    </View>
                    <View>
                      <StatusButtons />
                    </View>
                  </View>
                  <View style={{flex: 1}}>
                    <ServiceHours />
                  </View>
                </View>
                <View>
                  <TripDetails />
                </View>
              </View>
            </View>
            <View style={{flex: 1}}>
              <View style={{flex: 2}}>
                <DriverDashboard />
              </View>
              <View style={{flex: 1, backgroundColor: 'red'}}>
                <Text style={{color: 'white'}}>Right Column</Text>
              </View>
              {/* <Text÷ style={{color: 'white'}}>Right Column</Text÷> */}
            </View>
          </View>

          <View style={{padding: 10}}>
            <Text style={{color: 'white'}}>Bottom Row</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
