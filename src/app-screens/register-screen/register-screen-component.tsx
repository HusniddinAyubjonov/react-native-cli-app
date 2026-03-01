import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../app/navigation/types';
import { registerScreenStyles } from './register-screen-styles';

type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

export function RegisterScreen({ navigation }: RegisterScreenProps) {
  return (
    <SafeAreaView style={registerScreenStyles.screen}>
      <ScrollView
        contentContainerStyle={registerScreenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={registerScreenStyles.card}>
          <Text style={registerScreenStyles.title}>Register</Text>
          <Text style={registerScreenStyles.subtitle}>Create account for demo app.</Text>

          <Text style={registerScreenStyles.formLabel}>Full Name</Text>
          <TextInput
            placeholder="Full name"
            placeholderTextColor="#94a3b8"
            style={registerScreenStyles.input}
          />

          <Text style={registerScreenStyles.formLabel}>Email</Text>
          <TextInput
            keyboardType="email-address"
            placeholder="example@example.com"
            placeholderTextColor="#94a3b8"
            style={registerScreenStyles.input}
          />

          <Text style={registerScreenStyles.formLabel}>Username</Text>
          <TextInput
            placeholder="user_name"
            placeholderTextColor="#94a3b8"
            style={registerScreenStyles.input}
          />

          <Text style={registerScreenStyles.formLabel}>Password</Text>
          <TextInput
            secureTextEntry
            placeholder="Enter password"
            placeholderTextColor="#94a3b8"
            style={registerScreenStyles.input}
          />

          <Pressable
            onPress={() => navigation.navigate('Home')}
            style={registerScreenStyles.primaryButton}
          >
            <Text style={registerScreenStyles.primaryButtonText}>Sign Up</Text>
          </Pressable>

          <View style={registerScreenStyles.bottomRow}>
            <Text style={registerScreenStyles.bottomText}>Already have an account? </Text>
            <Text
              onPress={() => navigation.navigate('Login')}
              style={registerScreenStyles.bottomLink}
            >
              Sign In
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
