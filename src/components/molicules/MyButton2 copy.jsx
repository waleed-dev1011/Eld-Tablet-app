import React from 'react';
import { View } from 'react-native';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const MyButton2 = ({title,icon,style}) => {
  
  return (
    <TouchableOpacity
      disabled={true}
      style={[
        styles.container,style,
        {
          height:40,
          alignSelf: 'flex-start',
          paddingHorizontal:20,
        },
      ]}
    >
        <View style={styles.view1}>
          {icon&&
          <Image 
          source={icon}
          style={styles?.image1}/>
          }
        <Text style={[styles.text,{color:title=="Instant Ride"?'#E49B0F':(title =="Schedule Ride" || title=='Cancelled Ride')?"#9A0B09":'grey'}]}>{title}</Text>
        </View>
     
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth:2,
   
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
  },
  view1:{
    flexDirection:'row',
    gap:5,
    alignItems:'center'
  },
  image1:{
    width:20,
    height:20,
    resizeMode:'contain'
  }
});

export {MyButton2};
