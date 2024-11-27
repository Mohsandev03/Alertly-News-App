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
      marginHorizontal: 20,
    },
    searchbar:{
       backgroundColor: '#E4E4E4',
       paddingHorizontal: 10,
       paddingVertical:10,
       borderRadius: 10,
       flexDirection: 'row',
       alignItems: 'center',
       marginBottom: 20,
       gap: 10,
    },
    searchTxt:{
        fontSize: 14,
        flex: 1,
        color: Colors.darkGrey,
    }
})