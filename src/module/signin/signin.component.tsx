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
import { signinStyles } from './signin.styles';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

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

export function SignIn({ navigation }: SignInProps) {
  return (
    <SafeAreaView style={signinStyles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={signinStyles.keyboardAvoiding}
      >
        <ScrollView
          contentContainerStyle={signinStyles.content}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={signinStyles.card}>
            <Text style={signinStyles.title}>Sign In</Text>

            {formInputData.map(inputData => (
              <Input
                key={inputData.label}
                label={inputData.label}
                placeholder={inputData.placeholder}
              />
            ))}

            <Button
              onPress={() => navigation.navigate('Home')}
              style={signinStyles.primaryButton}
              title="Sign In"
            />

            <View style={signinStyles.bottomRow}>
              <Text style={signinStyles.bottomText}>No account? </Text>
              <Text
                onPress={() => navigation.navigate('SignUp')}
                style={signinStyles.bottomLink}
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
