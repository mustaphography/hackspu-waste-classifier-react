import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import CameraComponent from '../components/Camera/camera';

export default function Home ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CameraComponent />
    </View>
  );
}