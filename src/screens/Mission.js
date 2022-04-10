import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default function Mission ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={
      {
      fontFamily: 'Inter_300Light',
      letterSpacing: 3,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 48,
      bottom: 180,
      color: '#70cacd'
      }
      }>Our Mission.
      </Text>
    </View>   
  );
}