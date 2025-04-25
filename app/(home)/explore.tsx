import { View, Text, TextInput, TouchableOpacity, ScrollView, ImageSourcePropType } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Image } from "react-native";
import MangaWideComponent from "../components/mangaWideComponent";
import SearshBar from "../components/searshBar";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the dataProps interface correctly
interface dataProps {
  title: string;
  description: string;
  rating: number;
  imageUrl: ImageSourcePropType;
}

const Explore = () => {
  const [data, setData] = useState<dataProps[]>([]); // Corrected the state type

  useEffect(() => {
    return () => {
      AsyncStorage.setItem("previousPage", "explore")
    }

  }, [])

  // Fetch data on mount
  useEffect(() => {
    const handleGetData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setData([
        {
          "title": "The Great Adventure",
          "description": "An epic tale of heroism and discovery.",
          "rating": 4.8,
          "imageUrl": require("@/assets/mangas/manga1.jpeg")
        },
        {
          "title": "Mystery in the Dark",
          "description": "A suspenseful thriller that keeps you guessing.",
          "rating": 4.5,
          "imageUrl": require("@/assets/mangas/manga2.jpeg")
        },
        {
          "title": "Romance by the Lake",
          "description": "A heartfelt love story set in a tranquil lakeside town.",
          "rating": 4.2,
          "imageUrl": require("@/assets/mangas/manga3.jpeg")
        }
      ]
      );
    };
    handleGetData();
  }, []); // Empty dependency array to fetch only once when the component mounts

  return (
    <ScrollView
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: Colors.dark.backgroundPrimary,
        position: "relative",
      }}
    >
      <SearshBar />
      {/* Map over the data array */}
      {data?.map((product, index) => (
        <MangaWideComponent
          key={index} // Always provide a unique key when mapping over components
          title={product.title}
          description={product.description}
          rating={product.rating}
          imageUrl={product.imageUrl} // Use the correct image URL
        />
      ))}
    </ScrollView>
  );
};

export default Explore;
