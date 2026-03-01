import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../app/navigation/types';
import { loginScreenStyles } from './login-screen-styles';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <SafeAreaView style={loginScreenStyles.screen}>
      <View style={loginScreenStyles.content}>
        <View style={loginScreenStyles.card}>
          <Text style={loginScreenStyles.title}>Login</Text>

          <Text style={loginScreenStyles.formLabel}>Email</Text>
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="you@example.com"
            placeholderTextColor="#94a3b8"
            style={loginScreenStyles.input}
          />

          <Text style={loginScreenStyles.formLabel}>Password</Text>
          <TextInput
            placeholder="Enter password"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            style={loginScreenStyles.input}
          />

          <Pressable
            onPress={() => navigation.navigate('Home')}
            style={loginScreenStyles.primaryButton}
          >
            <Text style={loginScreenStyles.primaryButtonText}>Sign In</Text>
          </Pressable>

          <View style={loginScreenStyles.bottomRow}>
            <Text style={loginScreenStyles.bottomText}>No account? </Text>
            <Text
              onPress={() => navigation.navigate('Register')}
              style={loginScreenStyles.bottomLink}
            >
              Create account
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
