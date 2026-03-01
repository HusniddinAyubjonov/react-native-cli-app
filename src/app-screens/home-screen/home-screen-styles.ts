import { StyleSheet } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  tabBar: {
    height: 84,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    backgroundColor: '#ffffff',
  },
  tabBarItem: {
    paddingVertical: 2,
  },
});

export const homeScreenColors = {
  active: '#2563eb',
  inactive: '#6b7280',
};
