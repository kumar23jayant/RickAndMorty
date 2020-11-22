/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from "./src/screens/HomeScreen/HomeScreen"
import CharacterScreen from './src/screens/CharacterScreen/CharacterScreen'



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RickAndMorty" screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
        <Stack.Screen name="HOME" component={HomeScreen} options={{ title: 'RickAndMorty' }}/>
        <Stack.Screen name="DETAIL" component={CharacterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App
