import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import {mvs} from '../../../util/metrices';

// ---------- small helpers ----------
const MONTHS = [
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
function pad(n) {
  return String(n).padStart(2, '0');
}
function formatStart(value) {
  // Accept Date or string. If string, show as-is.
  if (!(value instanceof Date)) return String(value ?? '');
  const h = value.getHours();
  const hours12 = ((h + 11) % 12) + 1;
  const ampm = h >= 12 ? 'PM' : 'AM';
  return `${pad(hours12)}:${pad(value.getMinutes())}:${pad(
    value.getSeconds(),
  )} ${ampm}, ${pad(value.getDate())} ${MONTHS[value.getMonth()]}`;
}

function statusPillColor(status) {
  // tweak to your palette; teal for ON, gray for OFF, green for DRIVING, orange for IDLE
  const s = String(status ?? '').toUpperCase();
  if (s === 'ON') return '#2dd4bf';
  if (s === 'OFF') return '#9ca3af';
  if (s === 'DRIVING') return '#22c55e';
  if (s === 'IDLE') return '#f59e0b';
  return '#64748b';
}

const Row = ({label, children}) => (
  <View style={styles.row}>
    <Text style={styles.rowLabel}>{label}</Text>
    <View style={{flex: 1}}>{children}</View>
  </View>
);

const StatusPill = ({status = 'ON'}) => (
  <View style={[styles.pill, {backgroundColor: statusPillColor(status)}]}>
    <Text style={styles.pillText}>{String(status).toUpperCase()}</Text>
  </View>
);

// ---------- main component ----------
export default function LogDetailModal({visible, onClose, data = {}}) {
  const {width} = Dimensions.get('window');
  const cardWidth = Math.min(width - 48, 720);

  const {
    status = 'ON',
    start = '',
    duration = '',
    location = '',
    odometer = '',
    engineHours = '',
    notes = '',
  } = data || {};

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropOpacity={0.35}
      useNativeDriver
      style={styles.centeredModal}>
      <View style={[styles.card, {width: cardWidth}]}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={onClose}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Log Detail</Text>
          {/* spacer to keep title centered */}
          <View style={{width: 20}} />
        </View>

        <View style={styles.divider} />

        {/* Inner panel (rounded border like screenshot) */}
        <View style={styles.panel}>
          <Row label="Status">
            <StatusPill status={status} />
          </Row>

          <Row label="Start">
            <Text style={styles.value}>{formatStart(start)}</Text>
          </Row>

          <Row label="Duration">
            <Text style={styles.value}>{String(duration || '--:--:--')}</Text>
          </Row>

          <Row label="Location">
            <Text style={styles.value}>{String(location || '-')}</Text>
          </Row>

          <Row label="Odometer">
            <Text style={styles.value}>{String(odometer || '-')}</Text>
          </Row>

          <Row label="Engine hours">
            <Text style={styles.value}>{String(engineHours || '-')}</Text>
          </Row>

          <Row label="Notes">
            <Text style={styles.value}>{String(notes || '-')}</Text>
          </Row>
        </View>
      </View>
    </Modal>
  );
}

// ---------- styles ----------
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
    paddingVertical: 14,
    paddingHorizontal: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 12,
        shadowOffset: {width: 0, height: 6},
      },
      android: {elevation: 8},
    }),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  backArrow: {
    fontSize: 28,
    color: '#111827',
    lineHeight: 24,
    fontWeight: '700',
    marginLeft: mvs(10),
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#e5e7eb',
    marginTop: 10,
    marginBottom: 12,
  },
  panel: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 14,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
  },
  rowLabel: {
    width: 120, // left column width, adjust for localization
    color: '#6b7280',
    fontWeight: '600',
    fontSize: 14,
  },
  value: {
    color: '#111827',
    fontSize: 15,
    lineHeight: 22,
  },
  pill: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  pillText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.4,
  },
});
