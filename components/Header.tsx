import {Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
type Props ={}
const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.userinfo}>
      <Image source={{uri: ''}} style = {styles.userImg}/>
      <View style = {{gap: 3}}>
        <Text style = {styles.welcometxt}>Welcome</Text>
        <Text style = {styles.usernametxt}>Areeba Khalid!</Text>
      </View>
      </View>
      <TouchableOpacity onPress={()=> {}}>
      <Ionicons name='notifications-outline' size = {24} color={Colors.black}/>
      </TouchableOpacity>
    </View>
  )
}
export default Header;
const styles = StyleSheet.create({
    container:{
      paddingHorizontal: 20,
      paddingTop:12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    userImg:{
      width: 50,
      height: 50,
      borderRadius: 30,
    },
    userinfo:{
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    welcometxt:{
      fontSize: 14,
      color: Colors.darkGrey,
    },
    usernametxt:{
        fontSize: 16,
        color: Colors.black,
        fontWeight: '700',
    }
})