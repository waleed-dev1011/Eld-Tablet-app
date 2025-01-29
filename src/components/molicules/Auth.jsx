import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

const Auth = ({title , title2}) => {
  const navigation = useNavigation()

  const hanldePress=()=>{
    if (title==='Register'){
      navigation.navigate('Screen3')
    }
    if (title==='Login'){
      navigation.navigate('Screen1')
    }
  }
  return (
    <TouchableOpacity onPress={hanldePress}>
       <Text style={styles.text}>{title2} <Text style={styles.second}>{title}</Text></Text> 
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop:100
  },
  text: {
    color: 'black',
    fontSize:15
  },
  image: {
    width: 230,
    height: 230,
    resizeMode: 'contain',
  },
  second:{
    color:'#9A0B09',
    fontSize:16
  }
})

export {Auth}
