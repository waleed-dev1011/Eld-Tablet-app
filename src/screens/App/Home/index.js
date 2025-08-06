// import React, {useState} from 'react';
// import {
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   StatusBar,
//   View,
//   Image,
// } from 'react-native';
// import styles from './style';
// import {HomeHeader} from '../../../components/Headers';
// import {NotificationSVG} from '../../../assets/svg';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {mvs} from '../../../util/metrices';
// import {colors} from '../../../util/color';
// import StatusButtons from '../../../components/Struct/HomeStruct/StatusButtons';
// import EldStatus from '../../../components/Struct/HomeStruct/EldStatus';
// import ServiceHours from '../../../components/Struct/HomeStruct/ServiceHours';
// import TripDetails from '../../../components/Struct/HomeStruct/TripDetails';
// import DriverDashboard from '../../../components/Struct/HomeStruct/DriverDashboard';
// import CertifyDetails from '../../../components/Struct/HomeStruct/CertifyDetails';
// import AlertBox from '../../../components/Struct/HomeStruct/AlertBox';
// import Table from '../../../components/Struct/HomeStruct/Table';
// import EldChart from '../../../components/Charts/EldChart';
// import ELDLogChart from '../../../components/Charts/ELDLogChart';
// import {useNavigation} from '@react-navigation/native';

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
//       <StatusBar barStyle="dark-content" backgroundColor="#000" />
//       <HomeHeader title="Home" rightButton={<NotificationSVG />} />
//       <View style={{height: mvs(2), backgroundColor: colors.border}} />

//       <ScrollView contentContainerStyle={{flexGrow: 1, padding: mvs(14)}}>
//         <View style={{flex: 1}}>
//           {/* this is the whole container which I want to divide into two section in row with the width of 70% and 30% but height of both should be same*/}
//           <View style={{flex: 1, flexDirection: 'row', gap: mvs(10)}}>
//             {/* this box should cover is 70% part  */}
//             <View style={{flex: 0.69}}>
//               {/* this is the upper part of the box1 which should cover 80% part of height and 100% width */}
//               <View style={{flex: 3}}>
//                 {/* here we also divide the upper part of the box into two part in horizantal direction with the width of 40% and 60% but height of both should be same but in each case hight should be same  */}
//                 <View style={{flexDirection: 'row', gap: mvs(10)}}>
//                   {/* this one should cover 40% part */}
//                   <View style={{flex: 0.39, gap: mvs(10)}}>
//                     <View>
//                       <EldStatus />
//                     </View>
//                     <View>
//                       <StatusButtons />
//                     </View>
//                   </View>

//                   {/* this part should cover 60% part */}
//                   <TouchableOpacity
//                     onPress={() => navigation.navigate('DriveStatusScreen')}
//                     style={{flex: 0.59}}>
//                     <ServiceHours />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//               {/* this is the below part of the box1 which should  20% of height cover 100% part */}
//               <View style={{flex: 1}}>
//                 <TripDetails />
//               </View>
//             </View>
//             {/* this box should cover is 30% part  */}

//             <View style={{flex: 0.29}}>
//               {/* this is the upper part of the box2 which should cover 80% part of height and 100% width */}
//               <View style={{flex: 3}}>
//                 <DriverDashboard />
//               </View>
//               {/* this is the below part of the box2 which should  20% of height cover 100% part */}
//               <View style={{flex: 1}}>
//                 <CertifyDetails />
//               </View>
//             </View>
//           </View>

//           <View style={{marginVertical: 20}}>
//             <ELDLogChart />
//           </View>
//           <AlertBox
//             content="Violation: Trailer is not set"
//             color="#F9DADB"
//             color2="red"
//           />
//           <AlertBox
//             content="Violation: Trailer is not set"
//             color="#FCEACB"
//             color2="brown"
//           />

//           <Table />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

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
import CertifyDetails from '../../../components/Struct/HomeStruct/CertifyDetails';
import AlertBox from '../../../components/Struct/HomeStruct/AlertBox';
import Table from '../../../components/Struct/HomeStruct/Table';
import ELDLogChart from '../../../components/Charts/ELDLogChart';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />
      <HomeHeader title="Home" rightButton={<NotificationSVG />} />
      <View style={{height: mvs(2), backgroundColor: colors.border}} />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: mvs(14),
          paddingBottom: mvs(20), // Add this
        }}>
        <View style={{flex: 1, alignItems: 'center'}}>
          {/* this is the whole container which I want to divide into two section in row with the width of 70% and 30% but height of both should be same*/}
          <View
            style={{flexDirection: 'row', gap: mvs(10), marginBottom: mvs(20)}}>
            {/* Left Section (70%) */}
            <View style={{flex: 0.69, gap: mvs(10)}}>
              {/* Upper 80% Section */}
              <View style={{flex: 4}}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: mvs(10),
                    flex: 4,
                    justifyContent: 'space-between',
                  }}>
                  {/* 40% - ELD + Buttons */}
                  <View style={{flex: 0.4, gap: mvs(10)}}>
                    <EldStatus />
                    <StatusButtons />
                  </View>

                  {/* 60% - Service Hours */}
                  <TouchableOpacity
                    onPress={() => navigation.navigate('DriveStatusScreen')}
                    style={{flex: 0.6, justifyContent: 'center'}}>
                    <ServiceHours />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Lower 20% Section */}
              <View style={{flex: 1}}>
                <TripDetails />
              </View>
            </View>

            {/* Right Section (30%) */}
            <View
              style={{
                flex: 0.29,
                gap: mvs(10),
              }}>
              {/* Upper 80% */}
              <View style={{flex: 4}}>
                <DriverDashboard />
              </View>

              {/* Lower 20% */}
              <View
                style={{
                  flex: 1,
                  // justifyContent: 'flex-end',
                  // alignContent: 'space-around',
                }}>
                <CertifyDetails />
              </View>
            </View>
          </View>
          <View>
            <ELDLogChart />
          </View>
        </View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
