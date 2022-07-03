import React from 'react';

import { NavigationContainer } from '@react-navigation/native'; //Navegação entre telas
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/Login/index';
import Principal from './src/pages/Principal/index';
import Cadastro from './src/pages/Cadastro/index';
import InfoHeadset from './src/pages/InfoHeadset/index';
import InfoMeia from './src/pages/InfoMeia/index';
import MicroStart from './src/pages/PagsWeb/microStart.js';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Informação Headset" component={InfoHeadset} />
        <Stack.Screen name="Informação Meia" component={InfoMeia} />
        <Stack.Screen name="MicroStart" component={MicroStart}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

