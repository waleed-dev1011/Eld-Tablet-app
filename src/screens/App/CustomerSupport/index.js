import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import PlusIcon from '../../../assets/svg/plusIconSvg';
import {mvs} from '../../../util/metrices';
import {colors} from '../../../util/color';
import Regular from '../../../typography/RegularText';
import {HomeHeader} from '../../../components/Headers';
import TicketTable from '../../../components/Struct/HomeStruct/CustomerSupport/TicketTable';
import AddTicketModal from '../../../components/Modals/AddTicketModal';
import dayjs from 'dayjs';
import {useState} from 'react';

const CustomerSupport = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [tickets, setTickets] = useState([
    {
      id: '#122281',
      subject: 'Support request',
      description:
        'Betty White death, New Year’s Eve and Jean-Marc Vallée were ...',
      datetime: '15 May 2020 11:00 pm',
      contact: 'Email Address',
      status: 'New',
    },
    {
      id: '#122222',
      subject: 'New contact request',
      description:
        'Travel restrictions Canada and Booster shot Ontario were ...',
      datetime: '15 May 2020 11:00 pm',
      contact: 'Email Address',
      status: 'In-Progress',
    },
    {
      id: '#98723',
      subject: 'New contact request',
      description:
        'Vicente Fernandez, Dallas Cowboys and Packers were trending ...',
      datetime: '15 May 2020 9:00 pm',
      contact: 'Email Address',
      status: 'Resolved',
    },
    {
      id: '#145623',
      subject: 'New contact request',
      description:
        'Vicente Fernandez, Dallas Cowboys and Packers were trending ...',
      datetime: '15 May 2020 9:00 pm',
      contact: 'Email Address',
      status: 'Resolved',
    },
    {
      id: '#102223',
      subject: 'New contact request',
      description:
        'Vicente Fernandez, Dallas Cowboys and Packers were trending ...',
      datetime: '15 May 2020 9:00 pm',
      contact: 'Email Address',
      status: 'Resolved',
    },
    {
      id: '#143223',
      subject: 'New contact request',
      description:
        'Vicente Fernandez, Dallas Cowboys and Packers were trending ...',
      datetime: '15 May 2020 9:00 pm',
      contact: 'Email Address',
      status: 'Resolved',
    },
    {
      id: '#122293',
      subject: 'New contact request',
      description:
        'Vicente Fernandez, Dallas Cowboys and Packers were trending ...',
      datetime: '15 May 2020 9:00 pm',
      contact: 'Email Address',
      status: 'Resolved',
    },
    {
      id: '#126523',
      subject: 'New contact request',
      description:
        'Vicente Fernandez, Dallas Cowboys and Packers were trending ...',
      datetime: '15 May 2020 9:00 pm',
      contact: 'Email Address',
      status: 'Resolved',
    },
  ]);

  const handleConfirm = newTicket => {
    const newId = `#${Math.floor(100000 + Math.random() * 900000)}`;
    const currentTime = dayjs().format('DD MMM YYYY hh:mm A');

    const appendedTicket = {
      id: newId,
      subject: newTicket.subject,
      description: newTicket.description,
      datetime: currentTime,
      contact: newTicket.type === 'email' ? 'Email Address' : 'Phone Number',
      status: 'New',
    };

    setTickets(prev => [appendedTicket, ...prev]);
    setModalVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <HomeHeader />
      <View style={styles.divider} />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Contact Support</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.addButtonHeader}>
          <PlusIcon />
          <Text style={styles.btnTextHeader}>Add Ticket</Text>
        </TouchableOpacity>
      </View>
      {tickets.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={require('../../../assets/img/emptyDvir.png')}
            style={styles.image}
          />
          <Text style={styles.header}>No Ticket Added Yet</Text>
          <Regular
            label="Start to add your first ticket by clicking button below."
            style={{color: '#667085', marginVertical: 10}}
          />

          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.addButton}>
            <PlusIcon color="#fff" />
            <Text style={styles.btnText}>Add Ticket</Text>
          </TouchableOpacity>
          <View style={{flex: 0.5}} />
        </View>
      ) : (
        <TicketTable data={tickets} />
      )}

      <AddTicketModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onConfirm={handleConfirm}
      />
    </View>
  );
};

export default CustomerSupport;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whitebg,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(10),
  },
  header: {
    fontSize: mvs(18),
    fontWeight: '600',
    color: colors.black,
  },
  image: {
    position: 'relative',
    top: 10,
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 30,
  },
  btnText: {
    color: '#fff',
    fontSize: mvs(16),
    fontWeight: '500',
  },
  btnTextHeader: {
    fontSize: mvs(16),
    fontWeight: '500',
  },
  addButtonHeader: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: colors.border,
    borderWidth: 1,
  },
  addButton: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#d97d28',
    gap: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
