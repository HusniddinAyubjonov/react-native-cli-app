import React from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../ui-components/button/button-component';
import { profileScreenStyles } from './profile-screen-styles';

export function ProfileScreen() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={profileScreenStyles.scene}>
      <Text style={profileScreenStyles.sceneTitle}>Profile</Text>

      <View style={profileScreenStyles.card}>
        <View style={profileScreenStyles.avatar}>
          <Text style={profileScreenStyles.avatarText}>HA</Text>
        </View>
        <Text style={profileScreenStyles.cardTitle}>Husniddin Ayubjonov</Text>
        <Text style={profileScreenStyles.cardMeta}>Frontend Developer</Text>
      </View>

      <View style={profileScreenStyles.infoCard}>
        <Text style={profileScreenStyles.infoLabel}>Email</Text>
        <Text style={profileScreenStyles.cardText}>husniddin@example.com</Text>
        <Text style={profileScreenStyles.infoLabel}>Joined</Text>
        <Text style={profileScreenStyles.cardText}>March 2026</Text>
      </View>

      <Button
        onPress={() => navigation.navigate('Login')}
        style={profileScreenStyles.logoutButton}
        title="Log out"
        variant="danger"
      />
    </SafeAreaView>
  );
}
