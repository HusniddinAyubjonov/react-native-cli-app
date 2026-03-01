import React from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { profileTabStyles } from './profile-screen-styles';

export function ProfileTab() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={profileTabStyles.scene}>
      <Text style={profileTabStyles.sceneTitle}>Profile</Text>
      <View style={profileTabStyles.card}>
        <Text style={profileTabStyles.cardTitle}>Husniddin Ayubjonov</Text>
        <Text style={profileTabStyles.cardText}>Role: Frontend Developer</Text>
        <Text style={profileTabStyles.cardText}>
          Email: husniddin@example.com
        </Text>
      </View>

      <Pressable
        onPress={() => navigation.navigate('Login')}
        style={profileTabStyles.logoutButton}
      >
        <Text style={profileTabStyles.logoutButtonText}>Log out</Text>
      </Pressable>
    </SafeAreaView>
  );
}
