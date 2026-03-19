import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../module/home/home.component';
import { SignIn } from '../../module/signin/signin.component';
import { SignUp } from '../../module/signup/signup.component';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen component={SignIn} name="SignIn" />
      <Stack.Screen component={SignUp} name="SignUp" />
      <Stack.Screen component={Home} name="Home" />
    </Stack.Navigator>
  );
}
