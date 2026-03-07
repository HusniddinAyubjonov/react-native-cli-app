import { StyleSheet } from 'react-native';

export const profileScreenStyles = StyleSheet.create({
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
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatarText: {
    color: '#2563eb',
    fontSize: 20,
    fontWeight: '700',
  },
  infoCard: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
    padding: 14,
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
  cardMeta: {
    color: '#6b7280',
    fontSize: 13,
  },
  infoLabel: {
    color: '#6b7280',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 2,
    textTransform: 'uppercase',
  },
  logoutButton: {
    marginTop: 16,
  },
});
