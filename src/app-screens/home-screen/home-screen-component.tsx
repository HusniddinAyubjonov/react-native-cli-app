import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { ChatTab } from '../chat-screen/chat-screen-component';
import { homeScreenColors, homeScreenStyles } from './home-screen-styles';
import { ProfileTab } from '../profile-screen/profile-screen-component';
import { TasksTab } from '../tasks-screen/tasks-screen-component';

type HomeTabParamList = {
  Tasks: undefined;
  Profile: undefined;
  Chat: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

const homeTabScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: homeScreenColors.active,
  tabBarInactiveTintColor: homeScreenColors.inactive,
  tabBarLabelStyle: homeScreenStyles.tabBarLabel,
  tabBarStyle: homeScreenStyles.tabBar,
  tabBarItemStyle: homeScreenStyles.tabBarItem,
};

export function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Tasks"
      screenOptions={homeTabScreenOptions}
    >
      <Tab.Screen component={TasksTab} name="Tasks" />
      <Tab.Screen component={ChatTab} name="Chat" />
      <Tab.Screen component={ProfileTab} name="Profile" />
    </Tab.Navigator>
  );
}
