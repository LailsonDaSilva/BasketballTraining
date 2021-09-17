import React from 'react';
import Routes from './src/routes/index';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_700Bold, Inter_400Regular, } from '@expo-google-fonts/inter';
import {  Poppins_300Light } from '@expo-google-fonts/poppins';
import {  Mitr_400Regular, Mitr_700Bold } from '@expo-google-fonts/mitr';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Poppins_300Light,
    Mitr_400Regular,
    Mitr_700Bold
  });

  if (!fontsLoaded) 
    return <AppLoading />;
  return (
      <Routes/>
  );
}
