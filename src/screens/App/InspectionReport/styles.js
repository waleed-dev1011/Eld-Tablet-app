import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../util/color';
import {mvs} from '../../../util/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  content: {
    flex: 1,
    paddingHorizontal: mvs(16),
    paddingTop: mvs(30),
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 10,
  },

  header: {
    fontSize: mvs(20),
    fontWeight: '700',
    paddingHorizontal: mvs(20),
  },
  section: {
    backgroundColor: colors.base.grayBg,
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    borderColor: colors.border,
    marginBottom: mvs(16),
  },
  sectionTitle: {
    fontSize: mvs(18),
    fontWeight: 'bold',
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: mvs(8),
  },
  sectionSubtitle: {
    fontSize: mvs(14),
    color: colors.text.placeholder,
    textAlign: 'center',
    marginBottom: mvs(20),
    lineHeight: mvs(20),
  },
  button: {
    borderRadius: mvs(5),
    paddingVertical: mvs(10),
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#000',
  },
  secondaryButton: {
    backgroundColor: colors.white,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  primaryButtonText: {
    color: '#fff',
  },
  secondaryButtonText: {
    color: '#000',
  },
});
export default styles;
