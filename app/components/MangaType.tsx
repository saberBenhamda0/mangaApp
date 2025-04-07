import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const MangaType = ({tagName} : {tagName:string}) => {
  return (
    <View style={styles.tagsWrapper} >
      <Text style={styles.mangaTagText}>{tagName}</Text>
    </View>
  )
}

export default MangaType

const styles = StyleSheet.create({
    tagsWrapper:{
        alignSelf:'flex-start',
        color:Colors.dark.backgroundSecondaty,
        borderRadius:4,
        boxShadow: `1 1 1 1 ${Colors.dark.backgroundPrimary} `,
        padding:4
    },
    mangaTagText:{
        fontWeight:300,
        fontSize:8,
        color:'white',
    }

})