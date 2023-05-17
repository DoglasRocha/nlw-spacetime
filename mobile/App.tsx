import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { BaiJamJuree_700Bold} from '@expo-google-fonts/bai-jamjuree'

import blurBg from "./src/assets/bg-blur.png"

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamJuree_700Bold
  })

  if (!hasLoadedFonts) return null

  return (
    <ImageBackground 
      source={blurBg} 
      className="relative bg-gray-900 flex-1 items-center"
      imageStyle={{ position: "absolute", left: "-100%"}}
    >
      <StatusBar style="light" translucent />
    </ImageBackround>
  );
}
