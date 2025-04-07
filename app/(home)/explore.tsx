import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Image } from "react-native";
import MangaWideComponent from "../components/mangaWideComponent";
import SearshBar from "../components/searshBar";



const Explore = () => {
  return (
    <ScrollView
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: Colors.dark.backgroundPrimary,
        position:'relative'
      }}
    >
      <SearshBar />
      <MangaWideComponent />
      <MangaWideComponent />
      <MangaWideComponent />
      <MangaWideComponent />
      <MangaWideComponent />

    </ScrollView>
  );
};

export default Explore;
