import { StyleSheet } from 'react-native';

export const profileTabStyles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  sceneTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 14,
  },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
    padding: 14,
    gap: 8,
  },
  cardTitle: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardText: {
    color: '#4b5563',
    fontSize: 15,
  },
  logoutButton: {
    marginTop: 16,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#ef4444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
