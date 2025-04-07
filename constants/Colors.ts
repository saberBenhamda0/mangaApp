/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */


const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: 'red',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    backgroundPrimary: '#1E1E1E',
    backgroundSecondaty: '#2A2A2A',
    textPrimary:'white',
    textSecondaty:"#B0B0B0",
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: 'gray',
    tabIconSelected: 'white',
  },
  border:{
    primary:"gray",
  },
  typographie:{
    main:"white",
    secondary:'gray'
  }
};
