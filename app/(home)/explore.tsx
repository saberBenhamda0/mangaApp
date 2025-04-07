import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Image } from "react-native";
import MangaWideComponent from "../components/mangaWideComponent";
import SearshBar from "../components/searshBar";

// Define the dataProps interface correctly
interface dataProps {
  title: string;
  description: string;
  rating: number;
  imageUrl: string;
}

const Explore = () => {
  const [data, setData] = useState<dataProps[]>([]); // Corrected the state type

  // Fetch data on mount
  useEffect(() => {
    const handleGetData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setData(data.products.map((product: any) => ({
        title: product.title,
        description: product.description,
        rating: product.rating,
        imageUrl: product.thumbnail, // You can change this to use "images[0]" if you want the full image
      })));
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
