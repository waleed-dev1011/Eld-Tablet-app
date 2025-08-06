// components/TabButtons.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {mvs} from '../../../../util/metrices';
import {colors} from '../../../../util/color';

const TabButtons = ({activeTab, onTabChange}) => {
  const tabs = ['Main', 'Logs', 'DVIR'];

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tabButton,
            activeTab === tab && styles.activeTabButton,
          ]}
          onPress={() => onTabChange && onTabChange(tab)}>
          <Text
            style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.base.grayBg,
    borderRadius: mvs(8),
    padding: mvs(4),
    marginBottom: mvs(20),
  },
  tabButton: {
    flex: 1,
    paddingVertical: mvs(10),
    borderRadius: mvs(7),
    alignItems: 'center',
  },
  activeTabButton: {
    backgroundColor: colors.white,
  },
  tabText: {
    fontSize: mvs(16),
    color: colors.text.primary,
    fontWeight: '700',
  },
  activeTabText: {
    color: colors.black,
    fontWeight: '500',
  },
});

export default TabButtons;
