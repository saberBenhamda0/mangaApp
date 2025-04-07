import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, useWindowDimensions } from "react-native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";


const ChaptersRowComponent = ({ index, number }: { index: number; number: number }) => {
  const isTopBorderExist = index === 0 ? 0 : 0;
  return (
    <View
    key={index}
      style={{
        height: 40,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: Colors.border.primary,
        borderBottomWidth: 2,
      }}
    >
      <Text style={{ color: "white" }}>Chapters - {number} </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 12,
          marginRight: 12,
        }}
      >
        <Image
          style={{ width: 25, height: 25 }}
          source={require("@/assets/images/mangaApp.png")}
        />
        <Image
          style={{ width: 25, height: 25 }}
          source={require("@/assets/images/mangaApp.png")}
        />
      </View>
    </View>
  );
};


const Chapters = () => {
  const chapters_arrays = [1, 2, 3, 4, 5, 6, 7];
  return (
    <ScrollView style={{height:'105%', flex:1}}>
      {chapters_arrays.map((index, chapter) => (
        <ChaptersRowComponent  index={index} number={chapter} />
      ))}
    </ScrollView>
  )
}


const Informations = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>Informations</Text>
    </View>
  );
};

const Comments = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>Comments</Text>
    </View>
  );
};

const renderScene = SceneMap({
  first: Chapters,
  second: Informations,
  third: Comments,
});

const routes = [
  { key: "first", title: "Chapters" },
  { key: "second", title: "Informations" },
  { key: "third", title: "Comments" },
];

const index = () => {
  // In a real app,you would fetch manga details based on the id
  const manga = {
    title: "Manga Title",
    image: "url-to-image",
    description: "Manga description here...",
  };

  const [index, setIndex] = useState<number>(0);
  const layout = useWindowDimensions();
  const width: number = layout.width;

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: Colors.dark.backgroundPrimary,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "40%",
          marginBottom: "25%",
          position: "relative",
        }}
      >
        <Image
          source={require("@/assets/images/mangaApp.png")}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
          }}
        />
        <LinearGradient
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 2,
            top: 0,
            left: 0,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1.5 }}
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
        />
        <View
          style={{
            width: "95%",
            margin: "auto",
            height: "90%",
            top: "40%",
            left: 0,
            zIndex: 3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/mangaApp.png")}
            style={{ width: "45%", height: "100%" }}
          />
          <View
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontWeight: 600,
                fontSize: 24,
                color: "white",
              }}
            >
              Boku no hero academedia
            </Text>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 16,
                color: "gray", // this should change to something i need
              }}
            >
              By Saber ben hamda
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Image
                source={require("@/assets/images/mangaApp.png")}
                style={{ width: 25, height: 25 }}
              />
              <Text style={{ color: "white", fontSize: 16, fontWeight: 500 }}>
                {" "}
                on Going{" "}
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 18,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                <Image
                  source={require("@/assets/images/mangaApp.png")}
                  style={{ width: 25, height: 25 }}
                />
                <Text style={{ fontWeight: 600, fontSize: 18, color: "white" }}>
                  75.00
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                <Image
                  source={require("@/assets/images/mangaApp.png")}
                  style={{ width: 25, height: 25 }}
                />
                <Text style={{ fontWeight: 600, fontSize: 18, color: "white" }}>
                  75.00
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={{
                width: "100%",
                height: 32,
                marginInline: "auto",
                backgroundColor: "red",
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  margin: "auto",
                  color: "white",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Continue Reading
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: Colors.dark.backgroundPrimary,
        }}
      >
        <TabView
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          initialLayout={{ width: width, height: layout.height }}
          renderTabBar={(props) => (
            <TabBar
              indicatorStyle={{ backgroundColor: "white" }}
              style={{ backgroundColor: Colors.dark.backgroundPrimary }}
              {...props}
            />
          )}
        />
      </View>
    </View>
  );
};

export default index;
