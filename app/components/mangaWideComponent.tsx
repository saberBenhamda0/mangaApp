  import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
  import React from "react";
  import typographie from "@/constants/Typographie";
  import { Colors } from "@/constants/Colors";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

  const MangaWideComponent = ({title, description, rating, imageUrl} : {title:string, description:string, rating:Float, imageUrl:string}) => {


    if(description.length > 150){
      description = description.substring(0, 149) + "...";
    }

    return (
      <TouchableOpacity
        style={{
          width: "95%",
          height: 200,
          marginTop: 16,
          marginHorizontal: "auto",
          boxShadow:`2 2 10 1 ${Colors.dark.backgroundSecondaty}`,
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        activeOpacity={0.7}
      >
        <Image
          source={{uri:imageUrl}}
          style={{
            width: "100%",
            height: "100%",
            opacity: 0.4,
            zIndex: 1,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <View
          style={{
            width: "65%",
            height: "100%",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              color: typographie.h1.color,
              fontSize:typographie.h1.fontSize,
              fontWeight:700,
            }}
          >
            {title}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap:8
            }}
          >
            <Text
          style={styles.subTitleKey}
            >Type of Content:</Text>
            <Text
              style={styles.subTitlevalue}
            >Movies</Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap:8

            }}
          >
            <Text style={styles.subTitleKey}>Categorie Type: </Text>
            <Text style={styles.subTitlevalue}>mystorie</Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap:8
            }}
          >
            <Text style={styles.subTitleKey}>Rating</Text>
            <Text style={styles.subTitlevalue}>{rating} #####</Text>
          </View>
          <Text style={styles.description}>
            {description}
          </Text>
        </View>

        <View style={{ width: "35%", height: "95%", zIndex: 2 }}>
          <Image
          source={{uri:imageUrl}}
          style={{ width: "100%", height: "100%" }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  export default MangaWideComponent;

  const styles = StyleSheet.create({

    subTitleKey:{
      color:typographie.sub_title_key.color,
      fontSize:typographie.sub_title_key.fontSize
  },

  subTitlevalue:{
    color:typographie.sub_title_value.color,
    fontSize:typographie.sub_title_value.fontSize
  },
  description:{
    color:"white",
    fontSize:14,
  }


  });
