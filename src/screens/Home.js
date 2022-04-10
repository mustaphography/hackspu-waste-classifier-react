import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import AppLoading from 'expo-app-loading';

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function Home ({ navigation }) {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={
        {
        fontFamily: 'Inter_900Black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        color: '#3a6ce0'
        }
    }>Waste Classifier</Text>
      <Button
        title="Analyze Now"
        onPress={() => navigation.navigate('Camera')}
      />
    </View>
  );
}