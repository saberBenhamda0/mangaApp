import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../components/Card";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import { Colors } from "@/constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";

const Home = () => {
  useFocusEffect(
    useCallback(() => {
      AsyncStorage.setItem("previousPage", "home");
      return () => {};
    }, [])
  );

  return (
    <ScrollView style={styles.mainWrapper}>
      <View style={styles.imageOverlay}>
        <Swiper>
          <View>
            <Image
              source={require("../../assets/images/mangaApp.png")}
              style={styles.image}
            />
            <LinearGradient
              style={styles.linearGradient}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 0, y: 1 }}
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
            />
          </View>
          <View>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.image}
            />
            <LinearGradient
              style={styles.linearGradient}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 0, y: 1 }}
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
            />
          </View>

          <View>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.image}
            />

            <LinearGradient
              style={styles.linearGradient}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 0, y: 1 }}
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
            />
          </View>
          <View>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.image}
            />
            <LinearGradient
              style={styles.linearGradient}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 0, y: 1 }}
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.TopMangaText}>Latest Reads</Text>
        <TouchableOpacity activeOpacity={0.3}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal contentContainerStyle={styles.mangaScroll}>
        {[1, 2, 3, 4].map((id) => (
          <TouchableOpacity key={id}>
            <Card isChapterNumberShown={true} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.textWrapper}>
        <Text style={styles.TopMangaText}>Top mangas</Text>
        <TouchableOpacity activeOpacity={0.3}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal contentContainerStyle={styles.mangaScroll}>
        {[1, 2, 3, 4].map((id) => (
          <TouchableOpacity key={id}>
            <Card isChapterNumberShown={true} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.textWrapper}>
        <Text style={styles.TopMangaText}>Latest releases</Text>
        <TouchableOpacity activeOpacity={0.3}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>{" "}
      </View>

      <ScrollView horizontal contentContainerStyle={styles.mangaScroll}>
        {[1, 2, 3, 4].map((id) => (
          <TouchableOpacity key={id}>
            <Card isChapterNumberShown={true} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  imageOverlay: {
    width: "100%",
    height: 300,
  },
  linearGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textWrapper: {
    width: "100%",
    height: 25,
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  TopMangaText: {
    fontWeight: "600",
    color: "#F8F9FA",
    fontSize: 20,
    fontFamily: "Roboto, sans-serif",
  },
  seeAllText: {
    fontWeight: "400",
    color: Colors.typographie.secondary,
    fontSize: 15,
    fontFamily: "Roboto, sans-serif",
  },
  mangaScroll: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
  },
  detailsText: {
    color: "#F8F9FA",
    fontSize: 22,
    fontWeight: "bold",
  },
});
