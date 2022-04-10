import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//screens
import Home from './src/screens/Home';
import Camera from './src/screens/Camera';
import Result from './src/screens/Result';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='dashboard'
    screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: 'black' }
    }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
