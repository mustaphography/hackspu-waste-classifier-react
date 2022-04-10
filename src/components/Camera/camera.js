import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { useFonts, Inter_300Light } from '@expo-google-fonts/inter';

export default function CameraComponent() {
  const ref = useRef(null);

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const styles = StyleSheet.create({  
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    camera: {
    height:700,
    width:450,
    },
  }); 

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const _takePhoto = async () => {
    try {
      const photo = await ref.current.takePictureAsync()
      console.debug(photo)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={ref} >
        <View >
          <TouchableOpacity           
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
              navigation.navigate('Camera')
            }}>
            <Text > Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <View>
        {/*this can be fa icon later*/}
        <TouchableOpacity onPress={_takePhoto} >
          <Text style={
            {
            fontFamily: 'Inter_300Light',
            letterSpacing: 3,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 40,
            color: '#70cacd',
            marginTop: 15
            }
      }>Analyze!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}