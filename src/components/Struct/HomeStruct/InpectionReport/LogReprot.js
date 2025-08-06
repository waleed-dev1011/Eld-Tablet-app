import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
  if (!(value instanceof Date)) return String(value ?? '');
  const h = value.getHours();
  const hours12 = ((h + 11) % 12) + 1;
  const ampm = h >= 12 ? 'PM' : 'AM';
  return `${pad(hours12)}:${pad(value.getMinutes())}:${pad(
    value.getSeconds(),
  )} ${ampm}, ${pad(value.getDate())} ${MONTHS[value.getMonth()]}`;
}

function statusPillColor(status) {
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

export default function LogDetailContent({data = {}}) {
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
  );
}

const styles = StyleSheet.create({
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
    width: 120,
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
