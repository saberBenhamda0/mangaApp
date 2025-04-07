import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {

  return (
    <Stack screenOptions={{headerShadowVisible:false,headerTitleStyle:{color:'white'}}} initialRouteName='index'>
      <Stack.Screen
      
        name="login"
      />
      <Tabs.Screen
        name="signup"
      />
      <Tabs.Screen
        name="index"
      />
    </Stack>
  );
}
