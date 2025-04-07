import {  Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MangaType from './MangaType'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

const Card = ({isChapterNumberShown} : {isChapterNumberShown:boolean}) => {
    const router = useRouter()
  return (
    <TouchableOpacity onPress={()=> router.push('/manga')} style={styles.cardWrapper}>
        <Image source={require("../../assets/images/mangaApp.png")}  style={styles.image} />
        <Text style={styles.mangaNameStyle}>
            Manga name ok 
        </Text>
        <View style={styles.tagsWrapper}>
            <MangaType tagName="action" />
            <MangaType tagName="thing" />
            <MangaType tagName="drama" />
            <MangaType tagName="love" />
        </View>
        {isChapterNumberShown && 
        <Text style={styles.chapterNumber}>
            Chapter 57
        </Text>
        }
    </TouchableOpacity>

  )
}

export default Card

const styles = StyleSheet.create({
    cardWrapper:{
        height:250,
        width:170,
        borderRadius:5,
        backgroundColor:Colors.dark.backgroundSecondaty,
        boxShadow: '1 1 1 1 black',
        marginHorizontal:5,
    },
    image:{
        width:'100%',
        height:'70%',
    },
    mangaNameStyle:{
        color:'white',
        fontWeight:600,
        fontSize:16,
        marginLeft:10,
        marginTop:4
    },
    tagsWrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        gap:5,
        marginLeft:10,
        marginTop:4
    },
    chapterNumber:{
        fontWeight:500,
        fontSize:12,
        color:"#B0B0B0",
        marginLeft:14,
        marginTop:4,
        marginBottom:2
    }
})