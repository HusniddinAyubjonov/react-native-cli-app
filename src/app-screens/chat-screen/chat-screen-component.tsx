import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from '../../ui-components/input/input-component';
import { chatScreenStyles } from './chat-screen-styles';

export function ChatScreen() {
  return (
    <SafeAreaView style={chatScreenStyles.scene}>
      <Text style={chatScreenStyles.sceneTitle}>Chat</Text>

      <Input placeholder="Search chat..." />

      <View style={chatScreenStyles.card}>
        <View style={chatScreenStyles.row}>
          <Text style={chatScreenStyles.cardTitle}>Harry</Text>
          <Text style={chatScreenStyles.badge}>2</Text>
        </View>
        <Text style={chatScreenStyles.cardText}>
          Can you check the new design?
        </Text>
        <Text style={chatScreenStyles.cardMeta}>2 min ago</Text>
      </View>

      <View style={chatScreenStyles.card}>
        <View style={chatScreenStyles.row}>
          <Text style={chatScreenStyles.cardTitle}>Team</Text>
          <Text style={chatScreenStyles.badgeMuted}>Read</Text>
        </View>
        <Text style={chatScreenStyles.cardText}>
          Build is green on iOS and Android.
        </Text>
        <Text style={chatScreenStyles.cardMeta}>10 min ago</Text>
      </View>
    </SafeAreaView>
  );
}
