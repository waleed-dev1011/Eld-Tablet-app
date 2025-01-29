import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { HomeHeader } from '../../../components/molicules/home-header';
import Bold from '../../../typography/bold-text';
import Regular from '../../../typography/regular-text';
import { colors } from '../../../config/colors';
import { DateSvg } from '../../../assets/icons/user';
import { mvs } from '../../../config/metrices';
import Line from '../../../components/atoms/line';

const TicketDetailView = ({ route }) => {
  const { ticketNumber, status, subject, description, date } = route.params;

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'resolved':
        return {
          backgroundColor: '#e8f5e9',
          color: '#2e7d32',
        };
      case 'in progress':
        return {
          backgroundColor: '#fff3e0',
          color: '#e65100',
        };
      case 'pending':
        return {
          backgroundColor: '#e3f2fd',
          color: '#1976d2',
        };
      default:
        return {
          backgroundColor: '#f5f5f5',
          color: '#757575',
        };
    }
  };

  const statusStyles = getStatusColor(status);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader back title={`Ticket#${ticketNumber}`} noti />

      <View style={styles.content}>
        <View style={[styles.statusBadge, { backgroundColor: statusStyles.backgroundColor }]}>
          <Regular style={[styles.statusText, { color: statusStyles.color }]}>{status}</Regular>
        </View>

        <Bold style={styles.title}>{subject}</Bold>  
        
        <Regular style={styles.description}>{description}</Regular>  
<Line/>
        <View style={styles.dateContainer}>
          <DateSvg />
          <Bold style={styles.dateText}>{`Created on ${date}`}</Bold>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    padding: mvs(16),
    marginTop:mvs(10)
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: mvs(8),
    paddingVertical: mvs(4),
    borderRadius: mvs(4),
    marginBottom: mvs(8),
  },
  statusText: {
    fontSize: mvs(14),

  },
  title: {
    fontSize: mvs(18),
  },
  description: {
    fontSize: mvs(14),
    color: colors.black + "60%",
    marginTop:mvs(5),


 
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: mvs(8),
  },
  dateText: {
    fontSize: mvs(15),
    color: colors.grey,
    marginLeft: mvs(6),
  },
});

export default TicketDetailView;
