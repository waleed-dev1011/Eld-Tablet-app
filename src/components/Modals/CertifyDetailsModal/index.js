import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from 'react-native';
import {mvs} from '../../../util/metrices';

import SignatureModal from '../../Modals/DriverSignature';
import DriversDailyLogModal from '../../Modals/DriverLogModal';

// Simple date helpers
const WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function dayId(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
    2,
    '0',
  )}-${String(d.getDate()).padStart(2, '0')}`;
}

function dayLabel(d) {
  return `${WEEK[d.getDay()]}, ${MONTH[d.getMonth()]} ${String(
    d.getDate(),
  ).padStart(2, '0')}`;
}

const Checkbox = ({checked, onPress, disabled}) => (
  <Pressable
    onPress={onPress}
    disabled={disabled}
    style={[
      styles.checkbox,
      checked && styles.checkboxChecked,
      disabled && {backgroundColor: '#777E90', borderColor: '#777E90'},
    ]}
    accessibilityRole="checkbox"
    accessibilityState={{checked, disabled}}>
    {checked ? <Text style={styles.checkmark}>✓</Text> : null}
  </Pressable>
);

const StatusPill = ({certified}) => (
  <View
    style={[styles.pill, {backgroundColor: certified ? '#22c55e' : '#ef4444'}]}>
    <Text style={styles.pillText}>
      {certified ? 'Certified' : 'Uncertified'}
    </Text>
  </View>
);

export default function CertifyModal({
  visible,
  onClose,
  initialCertified = [],
  daysToShow = 8,
  onCertify,
}) {
  const {width} = useWindowDimensions();
  const cardWidth = Math.min(width - 40, 720);

  const makeDays = () => {
    const today = startOfDay(new Date());
    const items = [];
    for (let i = 0; i < daysToShow; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const id = dayId(d);
      items.push({
        id,
        label: dayLabel(d),
        isToday: i === 0,
        certified: initialCertified.includes(id),
        selected: false,
      });
    }
    return items;
  };

  const [days, setDays] = useState(makeDays());
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [showLogModal, setShowLogModal] = useState(false);

  useEffect(() => {
    if (visible) setDays(makeDays());
  }, [visible, initialCertified, daysToShow]);

  const uncertified = days.filter(d => !d.certified);
  const allUncertifiedSelected =
    uncertified.length > 0 && uncertified.every(d => d.selected);
  const anySelected = days.some(d => !d.certified && d.selected);
  const selectedCount = days.filter(d => d.selected && !d.certified).length;

  function toggleRow(id) {
    setDays(prev =>
      prev.map(d =>
        d.id === id && !d.certified ? {...d, selected: !d.selected} : d,
      ),
    );
  }

  function toggleAll() {
    setDays(prev =>
      prev.map(d =>
        !d.certified ? {...d, selected: !allUncertifiedSelected} : d,
      ),
    );
  }

  function handleCertifyToday() {
    setDays(prev =>
      prev.map(d => (d.isToday ? {...d, certified: true, selected: false} : d)),
    );
    const t = days.find(d => d.isToday)?.id;
    if (t) onCertify && onCertify([t]);
  }
  function handleCertifyAction() {
    onClose();
    setTimeout(() => {
      if (!anySelected) {
        setShowLogModal(true);
      } else {
        setShowSignatureModal(true);
      }
    }, 300);
  }

  function confirmSignature() {
    const toCertify = days
      .filter(d => d.selected && !d.certified)
      .map(d => d.id);

    setDays(prev =>
      prev.map(d =>
        d.selected && !d.certified
          ? {...d, certified: true, selected: false}
          : d,
      ),
    );

    onCertify && onCertify(toCertify);
    setShowSignatureModal(false);
  }

  const renderItem = ({item}) => {
    const disabled = item.certified;
    return (
      <View style={styles.row}>
        <Checkbox
          checked={disabled ? true : item.selected}
          onPress={() => (!disabled ? toggleRow(item.id) : undefined)}
          disabled={disabled}
        />
        <Text style={styles.dateText}>
          {item.label}{' '}
          {item.isToday ? <Text style={styles.today}>Today</Text> : null}
        </Text>
        <View style={{flex: 1}} />
        <StatusPill certified={item.certified} />
      </View>
    );
  };

  const buttonText = anySelected
    ? `Certify Selected (${selectedCount})`
    : 'Certify All';

  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onClose}>
        <View style={styles.scrim}>
          <View style={[styles.card, {width: cardWidth}]}>
            {/* Header */}
            <View style={styles.header}>
              <Pressable onPress={onClose} hitSlop={8}>
                <Text style={styles.cancel}>Cancel</Text>
              </Pressable>
              <Text style={styles.title}>
                Certify
                <Text style={styles.muted}>(Last {daysToShow} days)</Text>
              </Text>
              <Pressable onPress={handleCertifyToday} hitSlop={8}>
                <Text style={styles.link}>Certify Today</Text>
              </Pressable>
            </View>

            {/* Select-all row */}
            <View style={[styles.row, {paddingVertical: 6}]}>
              <Checkbox
                checked={allUncertifiedSelected}
                onPress={toggleAll}
                disabled={uncertified.length === 0}
              />
              <Text style={[styles.dateText, {fontWeight: '600'}]}>
                Select all uncertified
              </Text>
            </View>

            <View style={styles.divider} />

            <FlatList
              data={days}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              contentContainerStyle={{paddingVertical: 4}}
            />

            <Pressable
              onPress={handleCertifyAction}
              style={[styles.primaryBtn]}>
              <Text style={styles.primaryBtnText}>{buttonText}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Signature Modal */}
      <SignatureModal
        visible={showSignatureModal}
        onCancel={() => setShowSignatureModal(false)}
        onConfirm={confirmSignature}
      />

      {/* Drivers Log Modal */}
      <DriversDailyLogModal
        visible={showLogModal}
        onClose={() => setShowLogModal(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  scrim: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: mvs(16),
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: mvs(16),
    padding: mvs(16),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: mvs(10),
        shadowOffset: {width: 0, height: mvs(6)},
      },
      android: {elevation: 8},
    }),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: mvs(6),
  },
  title: {fontSize: 18, fontWeight: '700'},
  muted: {color: '#6b7280', fontSize: mvs(14), fontWeight: '400'},
  cancel: {color: '#ef4444', fontWeight: '700'},
  link: {color: '#2563eb', fontWeight: '700'},
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#e5e7eb',
    marginVertical: mvs(18),
  },
  row: {flexDirection: 'row', alignItems: 'center', paddingVertical: mvs(8)},
  dateText: {marginLeft: mvs(10), fontSize: mvs(16), color: '#111827'},
  today: {
    fontSize: mvs(12),
    color: '#6b7280',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: mvs(6),
    paddingVertical: mvs(2),
    borderRadius: mvs(8),
    overflow: 'hidden',
  },
  checkbox: {
    width: mvs(22),
    height: mvs(22),
    borderWidth: mvs(2),
    borderRadius: mvs(4),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  checkboxChecked: {backgroundColor: '#466FF7', borderColor: '#466FF7'},
  checkmark: {color: '#fff', fontWeight: '800'},
  pill: {
    paddingHorizontal: mvs(10),
    paddingVertical: mvs(4),
    borderRadius: mvs(999),
  },
  pillText: {color: '#fff', fontSize: mvs(12), fontWeight: '700'},
  primaryBtn: {
    backgroundColor: '#22c55e',
    paddingVertical: mvs(12),
    borderRadius: mvs(8),
    alignItems: 'center',
    marginTop: mvs(12),
  },
  primaryBtnText: {color: '#fff', fontSize: mvs(16), fontWeight: '700'},
});
