import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../app/navigation/types';
import { Button } from '../../ui-components/button/button-component';
import { Input } from '../../ui-components/input/input-component';
import { loginScreenStyles } from './login-screen-styles';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const formInputData = [
  {
    label: 'Email',
    placeholder: 'you@example.com',
  },
  {
    label: 'Password',
    placeholder: 'Enter password',
  },
];

export function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <SafeAreaView style={loginScreenStyles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={loginScreenStyles.keyboardAvoiding}
      >
        <ScrollView
          contentContainerStyle={loginScreenStyles.content}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={loginScreenStyles.card}>
            <Text style={loginScreenStyles.title}>Login</Text>

            {formInputData.map(inputData => (
              <Input
                key={inputData.label}
                label={inputData.label}
                placeholder={inputData.placeholder}
              />
            ))}

            <Button
              onPress={() => navigation.navigate('Home')}
              style={loginScreenStyles.primaryButton}
              title="Sign In"
            />

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
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
