import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../module/home/home.component';
import { SignIn } from '../../module/signin/signin.component';
import { SignUp } from '../../module/signup/signup.component';
import { RootStackParamList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false, animation: 'simple_push' }}
    >
      <Screen component={SignIn} name="SignIn" />
      <Screen component={SignUp} name="SignUp" />
      <Screen component={Home} name="Home" />
    </Navigator>
  );
}
