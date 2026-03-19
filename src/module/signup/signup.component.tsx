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
import { Button } from '../../ui-components/button/button.component';
import { Input } from '../../ui-components/input/input.component';
import { signupStyles } from './signup.styles';

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

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

export function SignUp({ navigation }: SignUpProps) {
  return (
    <SafeAreaView style={signupStyles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={signupStyles.keyboardAvoiding}
      >
        <ScrollView
          contentContainerStyle={signupStyles.scrollContent}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={signupStyles.card}>
            <Text style={signupStyles.title}>Sign Up</Text>
            <Text style={signupStyles.subtitle}>Create account.</Text>

            {formInputData.map(inputData => (
              <Input
                key={inputData.label}
                label={inputData.label}
                placeholder={inputData.placeholder}
              />
            ))}

            <Button
              onPress={() => navigation.navigate('Home')}
              style={signupStyles.primaryButton}
              title="Sign Up"
            />

            <View style={signupStyles.bottomRow}>
              <Text style={signupStyles.bottomText}>
                Already have an account?
              </Text>
              <Text
                onPress={() => navigation.navigate('SignIn')}
                style={signupStyles.bottomLink}
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
