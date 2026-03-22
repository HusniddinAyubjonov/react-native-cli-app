import React from 'react';
import { Platform } from 'react-native';
import {
  createBottomTabNavigator,
  type BottomTabBarButtonProps,
} from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import {
  createNativeBottomTabNavigator,
  type NativeBottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs/unstable';
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

type NativeTabIconProps = {
  focused: boolean;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();
const NativeTab = createNativeBottomTabNavigator<HomeTabParamList>();

const iosMajorVersion =
  Platform.OS === 'ios' ? Number(String(Platform.Version).split('.')[0]) : 0;
const isIos26OrNewer = Platform.OS === 'ios' && iosMajorVersion >= 26;

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

function TasksNativeTabIcon({ focused }: NativeTabIconProps) {
  if (focused) {
    return {
      type: 'sfSymbol' as const,
      name: 'checkmark.circle.fill' as const,
    };
  }

  return {
    type: 'sfSymbol' as const,
    name: 'checkmark.circle' as const,
  };
}

function ChatNativeTabIcon({ focused }: NativeTabIconProps) {
  if (focused) {
    return {
      type: 'sfSymbol' as const,
      name: 'bubble.left.and.bubble.right.fill' as const,
    };
  }

  return {
    type: 'sfSymbol' as const,
    name: 'bubble.left.and.bubble.right' as const,
  };
}

function ProfileNativeTabIcon({ focused }: NativeTabIconProps) {
  if (focused) {
    return {
      type: 'sfSymbol' as const,
      name: 'person.crop.circle.fill' as const,
    };
  }

  return {
    type: 'sfSymbol' as const,
    name: 'person.crop.circle' as const,
  };
}

function LottieNativeTabIcon({ focused }: NativeTabIconProps) {
  if (focused) {
    return {
      type: 'sfSymbol' as const,
      name: 'play.circle.fill' as const,
    };
  }

  return {
    type: 'sfSymbol' as const,
    name: 'play.circle' as const,
  };
}

const iosLiquidGlassScreenOptions: NativeBottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: homeColors.active,
  tabBarLabelStyle: homeStyles.tabBarLabel,
  tabBarControllerMode: 'auto',
  tabBarMinimizeBehavior: 'onScrollDown',
};

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
  if (isIos26OrNewer) {
    return (
      <NativeTab.Navigator
        initialRouteName="Tasks"
        screenOptions={iosLiquidGlassScreenOptions}
      >
        <NativeTab.Screen
          name="Tasks"
          component={Tasks}
          options={{
            title: 'Задачи',
            tabBarLabel: 'Задачи',
            tabBarIcon: TasksNativeTabIcon,
          }}
        />
        <NativeTab.Screen
          name="Chat"
          component={Chat}
          options={{
            title: 'Чат',
            tabBarLabel: 'Чат',
            tabBarIcon: ChatNativeTabIcon,
          }}
        />
        <NativeTab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Профиль',
            tabBarLabel: 'Профиль',
            tabBarIcon: ProfileNativeTabIcon,
          }}
        />
        <NativeTab.Screen
          name="Lottie"
          component={Lottie}
          options={{
            title: 'Lottie',
            tabBarLabel: 'Lottie',
            tabBarIcon: LottieNativeTabIcon,
          }}
        />
      </NativeTab.Navigator>
    );
  }

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
          title: 'Lottie',
          tabBarIcon: LottieAndroidTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}
