import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "@/constants/Colors";
import React, { useState } from "react";

const SearshBar = () => {
  const [searshBarClicked, setSearshBarClicked] = useState(false);
  const handlePress = () => {
    setSearshBarClicked(true);
  };
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        backgroundColor: Colors.dark.backgroundSecondaty,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        top: 0,
        left: 0,
        alignItems: "center",
        position: "fixed",
      }}
    >
      {!searshBarClicked && (
        <View
          style={{
            height: "100%",
            display: "flex",
            gap: 8,
            flexDirection: "row",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          <TouchableOpacity activeOpacity={0.3}>
            <Image
              style={{
                width: 25,
                height: 25,
                marginVertical: "auto",
                marginLeft: 10,
              }}
              source={require("@/assets/icons/three.png")}
            />
          </TouchableOpacity>
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
      )}

      <View
        style={{
          width: searshBarClicked ? "100%" : "20%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: searshBarClicked ? "flex-start" : "space-around",
          alignContent: "center",
        }}
      >
        {searshBarClicked ? (
          <View
            style={{
              width: "80%",
              height: "80%",
              marginLeft: 10,
              marginVertical: "auto",
              position: "relative",
            }}
          >
            <TextInput
              style={{
                width: "100%",
                height: "100%",
                color: "white",
                borderColor: Colors.border.primary,
                borderBottomWidth: 1,
                borderStyle: "solid",
              }}
              placeholderTextColor={Colors.border.primary}
              placeholder="Entre the searsh term you want "
            />
            <TouchableOpacity
              style={{
                height: 25,
                width: 25,
                zIndex: 2,
                position: "absolute",
                right: 5,
                top: 8,
              }}
              onPress={()=> setSearshBarClicked(false)}
            >
              <Image
                style={{
                  height: 25,
                  width: 25,
                }}
                source={require("@/assets/icons/cancel.png")}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={() => handlePress()} activeOpacity={0.3}>
            <Image
              style={{ width: 25, height: 25, marginVertical: "auto" }}
              source={require("@/assets/icons/searsh.png")}
            />
          </TouchableOpacity>
        )}

        {!searshBarClicked && (
          <TouchableOpacity activeOpacity={0.3}>
            <Image
              style={{
                width: 25,
                height: 25,
                marginVertical: "auto",
                marginRight: 10,
              }}
              source={require("@/assets/icons/types.png")}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearshBar;

const styles = StyleSheet.create({});
