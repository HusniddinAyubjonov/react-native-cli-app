import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { chatTabStyles } from './chat-screen-styles';

export function ChatTab() {
  return (
    <SafeAreaView style={chatTabStyles.scene}>
      <Text style={chatTabStyles.sceneTitle}>Chat</Text>
      <View style={chatTabStyles.card}>
        <Text style={chatTabStyles.cardTitle}>Recent Messages</Text>
        <Text style={chatTabStyles.cardText}>- Hello world</Text>
        <Text style={chatTabStyles.cardText}>- Hello world</Text>
        <Text style={chatTabStyles.cardText}>- Hello world</Text>
      </View>
    </SafeAreaView>
  );
}
