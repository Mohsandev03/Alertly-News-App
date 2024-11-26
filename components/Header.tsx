import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props ={}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://cdn.pixabay.com/photo/2021/07/03/20/06/woman-6384768_1280.jpg'}} style = {styles.userImg}/>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container:{
      paddingHorizontal: 20,
      paddingTop:12,
    },
    userImg:{
      width: 50,
      height: 50,
      borderRadius: 30,
    }
})