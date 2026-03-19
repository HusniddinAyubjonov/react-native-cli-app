import React from 'react';
import LottieView from 'lottie-react-native';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { lottieStyles } from './lottie.styles';

const animations = [
  require('../../assets/lottie/pulse-blue.json'),
  require('../../assets/lottie/float-green.json'),
  require('../../assets/lottie/spin-orange.json'),
  require('../../assets/lottie/bounce-purple.json'),
  require('../../assets/lottie/dots-pink.json'),
];

export function Lottie() {
  return (
    <SafeAreaView style={lottieStyles.scene}>
      <ScrollView
        contentContainerStyle={lottieStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={lottieStyles.grid}>
          {animations.map((source, index) => (
            <View key={index} style={lottieStyles.item}>
              <LottieView
                autoPlay
                loop
                source={source}
                style={lottieStyles.animation}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
