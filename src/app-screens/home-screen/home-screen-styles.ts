import { StyleSheet } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 14,
    fontWeight: '600',
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

export const homeScreenColors = {
  active: '#2563eb',
  inactive: '#6b7280',
};
