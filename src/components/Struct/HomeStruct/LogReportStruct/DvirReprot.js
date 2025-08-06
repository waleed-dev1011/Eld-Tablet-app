import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import PlusIcon from '../../../../assets/svg/plusIconSvg';
import {mvs} from '../../../../util/metrices';
import {colors} from '../../../../util/color';
import Regular from '../../../../typography/RegularText';

const DvirReprot = () => {
  return (
    <View>
      <Text style={styles.header}>DIVR Reports</Text>
      <View style={styles.container}>
        <Image
          source={require('../../../../assets/img/Empty_DVIR.png')}
          style={styles.image}
        />
        <Text style={styles.header}>DIVR Reports</Text>
        <Regular
          label="Start to add your first report by clicking button below."
          style={{color: '#667085', marginVertical: 10}}
        />

        <TouchableOpacity
          onPress={() => console.log('button is pressed')}
          style={styles.addButton}>
          <PlusIcon color="#fff" />
          <Text style={styles.btnText}>Add DVIR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DvirReprot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: mvs(18),
    fontWeight: '600',
    color: colors.black,
    paddingHorizontal: mvs(20),
    justifyContent: 'flex-start',
  },
  image: {
    position: 'relative',
    top: 40,
    width: 200,
    height: 200,
    resizeMode: 'contain', // or 'cover', 'stretch', etc.
    marginTop: 30,
  },
  btnText: {
    color: '#fff',
    fontSize: mvs(16),
    fontWeight: '500',
  },
  addButton: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#d97d28',
    gap: 10,
    borderRadius: 5,
  },
});
