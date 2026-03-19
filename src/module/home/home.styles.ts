import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  scene: {
    backgroundColor: '#ffffff',
  },
  tabBarLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  nativeTabBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.72)',
    shadowColor: 'rgba(15, 23, 42, 0.12)',
  },
  tabBar: {
    height: 78,
    paddingTop: 8,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  tabBarItem: {
    paddingVertical: 2,
  },
});

export const homeColors = {
  active: '#2563eb',
  activeBackground: '#ffffff',
  inactive: '#6b7280',
  ripple: 'rgba(255, 255, 255, 0.95)',
  surface: '#ffffff',
};
