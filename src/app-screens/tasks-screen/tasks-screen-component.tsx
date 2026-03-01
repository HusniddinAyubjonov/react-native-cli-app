import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { tasksTabStyles } from './tasks-screen-styles';

export function TasksTab() {
  return (
    <SafeAreaView style={tasksTabStyles.scene}>
      <Text style={tasksTabStyles.sceneTitle}>Tasks</Text>
      <View style={tasksTabStyles.card}>
        <Text style={tasksTabStyles.cardTitle}>Today</Text>
        <Text style={tasksTabStyles.cardText}>- Hello world</Text>
        <Text style={tasksTabStyles.cardText}>- Hello world</Text>
        <Text style={tasksTabStyles.cardText}>- Hello world</Text>
      </View>
    </SafeAreaView>
  );
}
