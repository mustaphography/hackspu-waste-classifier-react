import React, { useRef } from 'react';
import { Image } from 'react-native';

export default function ResultComponent({imgSrc}) {
 
    return (
        <Image source={{ uri: imgSrc }} />
    );
  
}