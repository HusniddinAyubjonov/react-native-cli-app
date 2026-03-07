import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { ChatScreen } from '../chat-screen/chat-screen-component';
import { ProfileScreen } from '../profile-screen/profile-screen-component';
import { TasksScreen } from '../tasks-screen/tasks-screen-component';
import { homeScreenColors, homeScreenStyles } from './home-screen-styles';

type HomeTabParamList = {
  Tasks: undefined;
  Chat: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

const iconByRoute = {
  Tasks: {
    active: 'list',
    inactive: 'list-outline',
  },
  Chat: {
    active: 'chatbubble',
    inactive: 'chatbubble-outline',
  },
  Profile: {
    active: 'person',
    inactive: 'person-outline',
  },
} as const;

type TabIconProps = {
  color: string;
  size: number;
};

const renderTasksIcon = ({ color, size, focused }: TabIconProps & { focused: boolean }) => (
  <Ionicons
    name={focused ? iconByRoute.Tasks.active : iconByRoute.Tasks.inactive}
    size={size}
    color={color}
  />
);

const renderChatIcon = ({ color, size, focused }: TabIconProps & { focused: boolean }) => (
  <Ionicons
    name={focused ? iconByRoute.Chat.active : iconByRoute.Chat.inactive}
    size={size}
    color={color}
  />
);

const renderProfileIcon = ({
  color,
  size,
  focused,
}: TabIconProps & { focused: boolean }) => (
  <Ionicons
    name={focused ? iconByRoute.Profile.active : iconByRoute.Profile.inactive}
    size={size}
    color={color}
  />
);

export function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Tasks"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: homeScreenColors.active,
        tabBarInactiveTintColor: homeScreenColors.inactive,
        tabBarLabelStyle: homeScreenStyles.tabBarLabel,
        tabBarStyle: homeScreenStyles.tabBar,
        tabBarItemStyle: homeScreenStyles.tabBarItem,
      }}
    >
      <Tab.Screen
        name="Tasks"
        component={TasksScreen}
        options={{ title: 'Задачи', tabBarIcon: renderTasksIcon }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{ title: 'Чат', tabBarIcon: renderChatIcon }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Профиль', tabBarIcon: renderProfileIcon }}
      />
    </Tab.Navigator>
  );
}
