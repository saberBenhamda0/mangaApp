import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

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
