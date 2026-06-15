import React from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { lottieStyles } from './lottie.styles';

const flow2Animation = require('../../assets/lottie/Flow 2.json');

export function Lottie() {
  return (
    <SafeAreaView style={lottieStyles.scene}>
      <View style={lottieStyles.content}>
        <LottieView
          autoPlay
          loop
          source={flow2Animation}
          style={lottieStyles.animation}
        />
      </View>
    </SafeAreaView>
  );
}
