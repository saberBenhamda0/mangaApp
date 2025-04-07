import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors';

const HomeLayout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarStyle:{
        backgroundColor:Colors.dark.backgroundPrimary
      }
      
    }}
    > 
      <Tabs.Screen 
        name="home" 
        options={{
          headerShown: false,
          tabBarInactiveTintColor:'gray',
          tabBarActiveTintColor:'white',
          tabBarIcon: ({ color, size }) => (
            <Image source={require("@/assets/home_icon.png")} style={{ width: size, height: size, tintColor: color }} />
          )
        }} 
      />
      <Tabs.Screen 
        name="explore" 
        options={{
          headerShown: false,
          tabBarInactiveTintColor:'gray',
          tabBarActiveTintColor:'white',
          tabBarIcon: ({ color, size }) => (
            <Image source={require("@/assets/explore_icon.png")} style={{ width: size, height: size, tintColor: color }} />
          )
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          headerShown: false,
          tabBarInactiveTintColor:'gray',
          tabBarActiveTintColor:'white',
          tabBarIcon: ({ color, size }) => (
            <Image source={require("@/assets/profile_icon.png")} style={{ width: size, height: size, tintColor: color }} />
          )
        }} 
      />
    </Tabs>
  );
};

export default HomeLayout;
