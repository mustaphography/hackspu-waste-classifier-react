import React, { Component } from 'react';
import { Text, View , TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import AppLoading from 'expo-app-loading';

import { useFonts, Inter_300Light } from '@expo-google-fonts/inter';
import { Image } from 'react-native';
import { faBorderStyle, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export default function Home ({ navigation }) {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={
        {
        fontFamily: 'Inter_300Light',
        letterSpacing: 3,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 48,
        bottom: 100,
        color: '#70cacd'
        }
      }>Waste Classifier</Text>
      <Text style={
        {
        fontFamily: 'Inter_300Light',
        letterSpacing: 3,
        textAlign: 'center',
        fontWeight: 'bold',
        fontVariant: 'italic',
        fontSize: 20,
        bottom: 80,
        color: '#70cacd'
        }
      }>Your Trash, Our Treasure.</Text>
      
      <TouchableOpacity
        style={{
            borderWidth:2,
            borderColor:'#70cacd',
            alignItems:'center',
            justifyContent:'center',
            width:130,
            height:40,
            backgroundColor:'black',
            borderRadius:50,
          }}
      >
        <Text style={{ 
          color: '#70cacd',
          fontSize: 16,
          fontFamily: 'Inter_300Light'
        }}>
          <Button
            titleStyle={{
              color: '#70cacd',
              marginTop: 3.5,
              fontSize: 16,
              fontFamily: 'Inter_300Light',
              letterSpacing: 1.5
            }}
            buttonStyle={{
              backgroundColor: 'rgb(0, 0, 0, 0)',
            }}
            title="Analyze Now!"
            onPress={() => navigation.navigate('Camera')}
          />
        </Text>
      </TouchableOpacity>

      <Button
        titleStyle={{
          color: '#70cacd',
          marginTop: 3.5,
          fontSize: 16,
          fontFamily: 'Inter_300Light',
          letterSpacing: 2
        }}
        buttonStyle={{
          backgroundColor: 'rgb(0, 0, 0, 0)',
        }}
        title="Learn about our mission."
        onPress={() => navigation.navigate('Mission')}
      />
      
      <Text style={{
        fontFamily: 'Inter_300Light',
        letterSpacing: 2,
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        color: '#70cacd'
      }}>
        Powered by: Junk in the Trunk
      </Text>
    </View>
  );
}