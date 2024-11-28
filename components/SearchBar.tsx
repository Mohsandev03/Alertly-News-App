import {StyleSheet, View, Text, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'
type Props = {}
const SearchBar = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <Ionicons name='search-outline' size={20} color={Colors.lightGrey}/>
        <TextInput placeholder='Search ...' placeholderTextColor={Colors.lightGrey}
        style={styles.searchTxt} autoCapitalize='none' />
      </View>
    </View>
  )
}
export default SearchBar
const styles = StyleSheet.create({
    container:{
      marginHorizontal: 0,
    },
    searchbar:{
       backgroundColor: '#E4E4E4',
       paddingHorizontal: 20,
       paddingVertical:6,
       borderRadius: 10,
       flexDirection: 'row',
       textAlign:'center',
       alignItems:'center',
       gap: 10,
    },
    searchTxt:{
        fontSize: 14,
        flex: 1,
        color: Colors.darkGrey,
    }
})