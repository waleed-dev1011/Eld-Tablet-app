import {reserve_table} from 'assets/images';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';

const TableSwiper = () => {
  const data = [reserve_table, reserve_table, reserve_table, reserve_table];
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        scrollEnabled={true}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        style={styles.wrapper}
        showsButtons={false}>
        {data.map((item, index) => (
          <ImageBackground
            key={index}
            source={item ? item : reserve_table}
            style={styles.slide}></ImageBackground>
        ))}
      </Swiper>
    </View>
  );
};
export default TableSwiper;

const styles = StyleSheet.create({
  container: {
    height: mvs(250),
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    // borderRadius: mvs(10),

    resizeMode: 'cover',
  },
  dotStyle: {backgroundColor: colors.gray},
  activeDotStyle: {
    backgroundColor: colors.white,
    width: mvs(10),
    height: mvs(10),
    borderRadius: mvs(5),
  },
  wrapper: {},
  slide: {
    flex: 1,
  },

  heartIcon: {
    alignSelf: 'flex-end',
    paddingRight: mvs(20),
    marginTop: mvs(20),
  },
});
