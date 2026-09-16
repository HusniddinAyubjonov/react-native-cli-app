import React from 'react';
import {
  createBottomTabNavigator,
  type BottomTabBarButtonProps,
} from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { Chat } from '../chat/chat.component';
import { Lottie } from '../lottie/lottie.component';
import { Profile } from '../profile/profile.component';
import { Tasks } from '../tasks/tasks.component';
import { homeColors, homeStyles } from './home.styles';

type HomeTabParamList = {
  Tasks: undefined;
  Chat: undefined;
  Lottie: undefined;
  Profile: undefined;
};

type AndroidTabIconProps = {
  color: string;
  size: number;
  focused: boolean;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

function AndroidTabBarButton(props: BottomTabBarButtonProps) {
  return <PlatformPressable {...props} pressColor={homeColors.ripple} />;
}

function TasksAndroidTabIcon({ color, size, focused }: AndroidTabIconProps) {
  return (
    <Ionicons
      color={color}
      name={focused ? 'list' : 'list-outline'}
      size={size}
    />
  );
}

function ChatAndroidTabIcon({ color, size, focused }: AndroidTabIconProps) {
  return (
    <Ionicons
      color={color}
      name={focused ? 'chatbubble' : 'chatbubble-outline'}
      size={size}
    />
  );
}

function ProfileAndroidTabIcon({ color, size, focused }: AndroidTabIconProps) {
  return (
    <Ionicons
      color={color}
      name={focused ? 'person' : 'person-outline'}
      size={size}
    />
  );
}

function LottieAndroidTabIcon({ color, size, focused }: AndroidTabIconProps) {
  return (
    <Ionicons
      color={color}
      name={focused ? 'play-circle' : 'play-circle-outline'}
      size={size}
    />
  );
}

const regularScreenOptions = {
  headerShown: false,
  tabBarActiveTintColor: homeColors.active,
  tabBarInactiveTintColor: homeColors.inactive,
  tabBarActiveBackgroundColor: homeColors.activeBackground,
  tabBarInactiveBackgroundColor: homeColors.surface,
  tabBarButton: AndroidTabBarButton,
  tabBarLabelStyle: homeStyles.tabBarLabel,
  sceneStyle: homeStyles.scene,
  tabBarStyle: homeStyles.tabBar,
  tabBarItemStyle: homeStyles.tabBarItem,
};

export function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Tasks"
      screenOptions={regularScreenOptions}
    >
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          title: 'Задачи',
          tabBarIcon: TasksAndroidTabIcon,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'Чат',
          tabBarIcon: ChatAndroidTabIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Профиль',
          tabBarIcon: ProfileAndroidTabIcon,
        }}
      />
      <Tab.Screen
        name="Lottie"
        component={Lottie}
        options={{
          title: 'Flow 2',
          tabBarIcon: LottieAndroidTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}
