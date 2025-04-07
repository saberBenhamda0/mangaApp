import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import {  Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_600SemiBold, Roboto_300Light } from '@expo-google-fonts/roboto';
import setDefaultFont from '@/app/override/setupFont.js'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_600SemiBold,
    Roboto_300Light
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  setDefaultFont('Roboto_400Regular'); // 👈 set once fonts are ready


  if (!loaded) {
    return null;
  }

  return (
      <Tabs initialRouteName='(auth)'>
        <Tabs.Screen  name="(auth)" options={{ headerShown: false, tabBarStyle:{display:'none'} }} />
        <Tabs.Screen  name="(home)" options={{ headerShown: false, tabBarStyle:{display:'none'} }} />
        <Tabs.Screen  name="manga" options={{ headerShown: false, tabBarStyle:{display:'none'} }} />
        <Tabs.Screen name="+not-found" />
      </Tabs>
  );
}
