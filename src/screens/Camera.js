//core

import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
//utils
import processor from '../services/processor';

export default function CameraScreen ({ navigation }) {
  const ref = useRef(null);

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  //display result component (temporary)
  const [result, setResult] = useState('');

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

  const _submit = async () => {
    try {
      await _takePhoto();
      navigation.navigate('Result');
    } catch (error) {
      console.log(error)
      //ai data not loaded
    }
  }

  const _takePhoto = async () => {
    try {
      const photo = await ref.current.takePictureAsync({base64: true})
      console.log(processor(photo))
      setResult(processor(photo))
      console.debug(photo)
    } catch (error) {
      console.log(error)
      //ai data not loaded
    }
  }

  return (
    <View style={styles.container}>
      <Text style={
        {
        fontFamily: 'Inter_300Light',
        letterSpacing: 2,
        textAlign: 'top',
        fontWeight: 'bold',
        fontSize: 48,
        top: 40,
        color: '#70cacd'
        }
      }>Hmm.. I think this is:</Text>
      <Text style={
        {
        fontFamily: 'Inter_300Light',
        letterSpacing: 2,
        textAlign: 'top',
        fontWeight: 'bold',
        fontSize: 48,
        top: 60,
        color: '#70cacd'
        }
      }>{result}</Text>
      <Camera style={styles.camera} type={type} ref={ref}>
        <View >
          <TouchableOpacity           
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
              navigation.navigate('Result')
            }}>
            <Text > Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <View>
        {/*this can be fa icon later*/}

      <TouchableOpacity onPress={_submit}
        style={{
            borderWidth:2,
            borderColor:'#70cacd',
            alignItems:'center',
            justifyContent:'center',
            width:130,
            height:40,
            backgroundColor:'black',
            borderRadius:50,
            color: '#70cacd'
          }}
      >
      <Text>Analyze Now!</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}