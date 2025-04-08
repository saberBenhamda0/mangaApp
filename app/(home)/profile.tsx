import {
  Image,
  ImageBase,
  ScrollView,
  ScrollViewBase,
  ScrollViewComponent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import typographie from "@/constants/Typographie";
import { withDecay } from "react-native-reanimated";
import Card from "../components/Card";


const StatisticsLabel = () => {
  return (
    <View
      style={{
        width: "30%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Text
        style={{
          fontWeight: 600,
          color: "#F8F9FA",
          fontSize: 16,
        }}
      >
        45
      </Text>
      <Text
        style={{
          fontWeight: 500,
          color: Colors.typographie.secondary,
          fontSize: 12,
        }}
      >
        Anime Watches
      </Text>
    </View>
  );
};



const FavouritesSection = () => { 
  return (
    <View
    style={{
      width: "100%",
      marginTop:15,
      marginBottom:30,
    }}
  >
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
        marginHorizontal: "auto",
      }}
    >
      <Text
        style={{
          color: Colors.typographie.main,
          fontWeight: 400,
          fontSize: typographie.h1.fontSize,
          fontFamily:'Roboto_700Bold'
        }}
      >
        Favorites Shows
      </Text>
      <Text
        style={{
          color: Colors.typographie.secondary,
          fontSize: typographie.h2.fontSize,
        }}
      >
        See all
      </Text>
    </View>
    <ScrollView 
    horizontal
    style={{
      width:"100%",
      marginTop:12,
    }}>
        <Card isChapterNumberShown={false}/>
        <Card isChapterNumberShown={false}/>
        <Card isChapterNumberShown={false}/>
        <Card isChapterNumberShown={false}/>
        <Card isChapterNumberShown={false}/>
        <Card isChapterNumberShown={false}/>

    </ScrollView>
  </View>
  )
}

const Profile = () => {
  return (
    <ScrollView
    
      style={{
        height: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: Colors.dark.backgroundPrimary,
        flex:1
      }}
    >
      <View
        style={{
          width: "100%",
          height: 220,
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          marginBottom: 75,
        }}
      >
        <Image
          source={require("@/assets/images/mangaApp.png")}
          style={{
            width: "100%",
            height: "100%",
            zIndex: 1,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <View
          style={{
            width: 150,
            height: 150,
            borderRadius: 150 / 2,
            borderColor: "red",
            borderTopWidth: 2,
            backgroundColor: Colors.dark.backgroundPrimary,
            zIndex: 2,
            position: "absolute",
            bottom: -75,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/icon.png")}
            style={{
              width: 125,
              height: 125,
              borderRadius: 125 / 2,
              objectFit: "contain",
            }}
          />
        </View>
      </View>

      <Text style={styles.accountName}>Saber ben hamda</Text>
      <Text style={styles.username}>@sabervodka</Text>
      <View
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: "auto",
          marginTop: 10,
        }}
      >
        <StatisticsLabel />
        <StatisticsLabel />
        <StatisticsLabel />
      </View>


      <FavouritesSection />
      
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  accountName: {
    color: typographie.h1.color,
    fontSize: typographie.h1.fontSize,
    fontWeight: 700,
    marginHorizontal: "auto",
  },
  username: {
    color: typographie.h2.color,
    fontSize: typographie.h2.fontSize,
    fontWeight: 400,
    marginHorizontal: "auto",
  },
});
