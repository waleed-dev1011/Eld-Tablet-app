import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {mvs} from '../../../util/metrices';

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: 'center',
    paddingBottom: 50,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 10,
  },

  cancel: {
    color: '#FF3B30',
    fontWeight: '600',
  },
  save: {
    fontWeight: '600',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 8,
  },
  closeButtonText: {
    fontSize: 14,
    color: '#333',
  },
  sliderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  speedValue: {
    fontSize: 420,
    fontWeight: 'bold',
    color: '#fff',
  },
  speedUnit: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  checkButton: {
    backgroundColor: 'black',
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: mvs(60),
  },

  checkButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
});
export default styles;
