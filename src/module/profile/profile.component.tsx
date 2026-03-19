import React from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../ui-components/button/button.component';
import { profileStyles } from './profile.styles';

export function Profile() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={profileStyles.scene}>
      <View style={profileStyles.content}>
        <Text style={profileStyles.sceneTitle}>Profile</Text>

        <View style={profileStyles.card}>
          <View style={profileStyles.avatar}>
            <Text style={profileStyles.avatarText}>HA</Text>
          </View>
          <Text style={profileStyles.cardTitle}>Husniddin Ayubjonov</Text>
          <Text style={profileStyles.cardMeta}>Frontend Developer</Text>
        </View>

        <View style={profileStyles.infoCard}>
          <Text style={profileStyles.infoLabel}>Email</Text>
          <Text style={profileStyles.cardText}>husniddin@example.com</Text>
          <Text style={profileStyles.infoLabel}>Joined</Text>
          <Text style={profileStyles.cardText}>March 2026</Text>
        </View>

        <Button
          onPress={() => navigation.navigate('SignIn')}
          style={profileStyles.logoutButton}
          title="Log out"
          variant="danger"
        />
      </View>
    </SafeAreaView>
  );
}
