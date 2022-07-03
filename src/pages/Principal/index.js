import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Animated,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text'; //Masked Text Box
import Perfil from '../Perfil/index';
import Pedidos from '../Pedidos/index';
import Home from '../Home/index';
import { StatusBar } from 'expo-status-bar';

const Tab = createMaterialBottomTabNavigator();

export default function Principal() {
  <StatusBar barStyle="light-content" backgroundColor="#000000" />
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: '#ffffff' }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="truck-delivery"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
