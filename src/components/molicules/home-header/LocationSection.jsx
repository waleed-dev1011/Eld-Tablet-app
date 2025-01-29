import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const LocationSection = () => {
  return (
    <View style={styles.container}> 
        <Text style={[styles.text1]}>
          Your current location
        </Text>
        <View style={{flexDirection:'row',gap:10,alignItems:'center',paddingTop:2}}>
            <Image 
            source={require('../../../assets/MapPin.png')}
            style={styles.image1}/>
            <Text style={styles.text2}>Coppel, Virginia</Text>
            <Image 
            source={require('../../../assets/downarrow.png')}
            style={styles.image1}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal:15,
    paddingVertical:10,
    backgroundColor:'#E7E6EB',
  },
  text1: {
    color: '#888990',
    fontWeight: '400',
    fontSize: 13,
  },
  image1: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  text2: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
})

export {LocationSection}
