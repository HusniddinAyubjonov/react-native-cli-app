import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../app-screens/home-screen/home-screen-component';
import { LoginScreen } from '../../app-screens/login-screen/login-screen-component';
import { RegisterScreen } from '../../app-screens/register-screen/register-screen-component';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen component={LoginScreen} name="Login" />
      <Stack.Screen component={RegisterScreen} name="Register" />
      <Stack.Screen component={HomeScreen} name="Home" />
    </Stack.Navigator>
  );
}
