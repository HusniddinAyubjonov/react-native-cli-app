import React from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../app/navigation/types';
import { splashStyles } from './splash.styles';

const splashAnimation = require('../../assets/lottie/Hello.json');

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export function Splash({ navigation }: Props) {
  return (
    <SafeAreaView style={splashStyles.scene}>
      <View style={splashStyles.content}>
        <LottieView
          autoPlay
          loop={false}
          source={splashAnimation}
          style={splashStyles.animation}
          onAnimationFinish={() => navigation.replace('Home')}
        />
      </View>
    </SafeAreaView>
  );
}
