import { StyleSheet } from 'react-native';

export const chatScreenStyles = StyleSheet.create({
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
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  badge: {
    color: '#ffffff',
    backgroundColor: '#2563eb',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '700',
  },
  badgeMuted: {
    color: '#6b7280',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '600',
  },
});
