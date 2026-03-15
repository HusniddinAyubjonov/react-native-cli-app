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
import { registerScreenStyles } from './register-screen-styles';

type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

const formInputData = [
  {
    label: 'Full Name',
    placeholder: 'Full name',
  },
  {
    label: 'Email',
    placeholder: 'example@example.com',
  },
  {
    label: 'Username',
    placeholder: 'user_name',
  },
  {
    label: 'Password',
    placeholder: 'Enter password',
  },
];

export function RegisterScreen({ navigation }: RegisterScreenProps) {
  return (
    <SafeAreaView style={registerScreenStyles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={registerScreenStyles.keyboardAvoiding}
      >
        <ScrollView
          contentContainerStyle={registerScreenStyles.scrollContent}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={registerScreenStyles.card}>
            <Text style={registerScreenStyles.title}>Register</Text>
            <Text style={registerScreenStyles.subtitle}>
              Create account.
            </Text>

            {formInputData.map(inputData => (
              <Input
                key={inputData.label}
                label={inputData.label}
                placeholder={inputData.placeholder}
              />
            ))}

            <Button
              onPress={() => navigation.navigate('Home')}
              style={registerScreenStyles.primaryButton}
              title="Sign Up"
            />

            <View style={registerScreenStyles.bottomRow}>
              <Text style={registerScreenStyles.bottomText}>
                Already have an account?{' '}
              </Text>
              <Text
                onPress={() => navigation.navigate('Login')}
                style={registerScreenStyles.bottomLink}
              >
                Sign In
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
