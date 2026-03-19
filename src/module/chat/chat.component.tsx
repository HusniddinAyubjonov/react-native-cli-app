import React from 'react';
import { Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  type DrawerContentComponentProps,
  type DrawerNavigationOptions,
  type DrawerNavigationProp,
} from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from '../../ui-components/input/input.component';
import { chatColors, chatStyles } from './chat.styles';

type ChatDrawerParamList = {
  Inbox: undefined;
  Pinned: undefined;
  Team: undefined;
};

type ChatPreview = {
  id: string;
  title: string;
  preview: string;
  meta: string;
  badgeText: string;
  badgeVariant: 'accent' | 'muted';
};

const inboxChats: ChatPreview[] = [
  {
    id: 'harry',
    title: 'Harry',
    preview:
      'Need the final text styles for the onboarding screen before lunch.',
    meta: '2 min ago',
    badgeText: '2',
    badgeVariant: 'accent',
  },
  {
    id: 'support',
    title: 'Support',
    preview: 'User sent a new report with screenshots from Android.',
    meta: '15 min ago',
    badgeText: 'New',
    badgeVariant: 'muted',
  },
];

const pinnedChats: ChatPreview[] = [
  {
    id: 'design',
    title: 'Design Sync',
    preview: 'Pinned notes: use glass tab bar on iOS and keep Android flat.',
    meta: 'Updated today',
    badgeText: 'Pinned',
    badgeVariant: 'accent',
  },
  {
    id: 'release',
    title: 'Release',
    preview: 'Checklist is ready, waiting for the final QA pass.',
    meta: 'Yesterday',
    badgeText: 'Ready',
    badgeVariant: 'muted',
  },
];

const teamChats: ChatPreview[] = [
  {
    id: 'frontend',
    title: 'Frontend Team',
    preview: 'Tabs are stable, next step is drawer polish for the chat flow.',
    meta: '4 members online',
    badgeText: 'Team',
    badgeVariant: 'accent',
  },
  {
    id: 'product',
    title: 'Product',
    preview: 'The new navigation hierarchy was approved for the next build.',
    meta: '1 hour ago',
    badgeText: 'Read',
    badgeVariant: 'muted',
  },
];

const Drawer = createDrawerNavigator<ChatDrawerParamList>();

type ChatSectionScreenProps = {
  title: string;
  placeholder: string;
  chats: ChatPreview[];
};

type ChatIconProps = {
  color: string;
  size: number;
};

function ChatHeaderLeft() {
  const navigation = useNavigation<DrawerNavigationProp<ChatDrawerParamList>>();

  return (
    <Pressable
      accessibilityLabel="Open chat menu"
      hitSlop={10}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      style={chatStyles.headerAction}
    >
      <Ionicons
        color={chatColors.headerTint}
        name="menu-outline"
        size={26}
      />
    </Pressable>
  );
}

function renderChatHeaderLeft() {
  return <ChatHeaderLeft />;
}

function ChatDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={chatStyles.drawerContentContainer}
    >
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function InboxDrawerIcon({ color, size }: ChatIconProps) {
  return <Ionicons color={color} name="mail-outline" size={size} />;
}

function PinnedDrawerIcon({ color, size }: ChatIconProps) {
  return <Ionicons color={color} name="bookmark-outline" size={size} />;
}

function TeamDrawerIcon({ color, size }: ChatIconProps) {
  return <Ionicons color={color} name="people-outline" size={size} />;
}

function ChatSectionScreen({
  title,
  placeholder,
  chats,
}: ChatSectionScreenProps) {
  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={chatStyles.scene}>
      <ScrollView
        contentContainerStyle={chatStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={chatStyles.sceneTitle}>{title}</Text>
        <Text style={chatStyles.sceneSubtitle}>
          Open the menu above to switch between chat sections.
        </Text>

        <Input placeholder={placeholder} />

        {chats.map(chat => (
          <View key={chat.id} style={chatStyles.card}>
            <View style={chatStyles.row}>
              <Text style={chatStyles.cardTitle}>{chat.title}</Text>
              <Text
                style={
                  chat.badgeVariant === 'accent'
                    ? chatStyles.badge
                    : chatStyles.badgeMuted
                }
              >
                {chat.badgeText}
              </Text>
            </View>
            <Text style={chatStyles.cardText}>{chat.preview}</Text>
            <Text style={chatStyles.cardMeta}>{chat.meta}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function InboxScreen() {
  return (
    <ChatSectionScreen
      title="Inbox"
      placeholder="Search inbox..."
      chats={inboxChats}
    />
  );
}

function PinnedScreen() {
  return (
    <ChatSectionScreen
      title="Pinned"
      placeholder="Search pinned chats..."
      chats={pinnedChats}
    />
  );
}

function TeamScreen() {
  return (
    <ChatSectionScreen
      title="Team"
      placeholder="Search team chats..."
      chats={teamChats}
    />
  );
}

const isIos = Platform.OS === 'ios';

const chatScreenOptions: DrawerNavigationOptions = {
  headerShown: true,
  headerShadowVisible: false,
  headerTintColor: chatColors.headerTint,
  headerLeft: renderChatHeaderLeft,
  headerTitleStyle: chatStyles.headerTitle,
  headerStyle: isIos ? chatStyles.iosHeader : chatStyles.header,
  drawerType: isIos ? 'slide' : 'front',
  overlayColor: isIos ? 'rgba(15, 23, 42, 0.08)' : 'rgba(15, 23, 42, 0.22)',
  sceneStyle: chatStyles.drawerScene,
  drawerStyle: isIos ? chatStyles.iosDrawer : chatStyles.drawer,
  drawerContentStyle: chatStyles.drawerContent,
  drawerItemStyle: chatStyles.drawerItem,
  drawerLabelStyle: chatStyles.drawerLabel,
  drawerActiveTintColor: chatColors.active,
  drawerInactiveTintColor: chatColors.inactive,
  drawerActiveBackgroundColor: chatColors.activeBackground,
  swipeEdgeWidth: 28,
};

export function Chat() {
  return (
    <Drawer.Navigator
      drawerContent={ChatDrawerContent}
      initialRouteName="Inbox"
      screenOptions={chatScreenOptions}
    >
      <Drawer.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          title: 'Chat',
          drawerLabel: 'Inbox',
          drawerIcon: InboxDrawerIcon,
        }}
      />
      <Drawer.Screen
        name="Pinned"
        component={PinnedScreen}
        options={{
          title: 'Pinned',
          drawerLabel: 'Pinned',
          drawerIcon: PinnedDrawerIcon,
        }}
      />
      <Drawer.Screen
        name="Team"
        component={TeamScreen}
        options={{
          title: 'Team',
          drawerLabel: 'Team',
          drawerIcon: TeamDrawerIcon,
        }}
      />
    </Drawer.Navigator>
  );
}
