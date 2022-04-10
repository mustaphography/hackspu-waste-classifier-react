import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default function Result ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={
        {
        fontFamily: 'Inter_900Black',
        letterSpacing: 3,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        color: '#3a6ce0'
        }
      }>Results:</Text>
    </View>
  );
}