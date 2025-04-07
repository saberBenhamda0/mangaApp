import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '@/constants/Colors'
import React from 'react'

const SearshBar = () => {
  return (
    <View
    style={{
      width: "100%",
      height: 50,
      backgroundColor: Colors.dark.backgroundSecondaty,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      top:0,
      left:0,
      alignItems: "center",
      position:'fixed',
    }}
  >
    <View
      style={{
        borderColor: "red",
        borderWidth: 2,
        height: "100%",
        display: "flex",
        gap: 8,
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
      }}
    >
      <Image
        style={{ width: 25, height: 25, marginVertical: "auto" }}
        source={require("@/assets/images/mangaApp.png")}
      />
      <Text
        style={{
          color: "#F8F9FA",
          fontWeight: 600,
          fontSize: 14,
          marginVertical: "auto",
        }}
      >
        Latest Mangas
      </Text>
    </View>

    <View
      style={{
        borderColor: "red",
        borderWidth: 2,
        width: "20%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
      }}
    >
      <Image
        style={{ width: 25, height: 25, marginVertical: "auto" }}
        source={require("@/assets/images/mangaApp.png")}
      />
      <Image
        style={{ width: 25, height: 25, marginVertical: "auto" }}
        source={require("@/assets/images/mangaApp.png")}
      />
    </View>
  </View>
  )
}

export default SearshBar

const styles = StyleSheet.create({})