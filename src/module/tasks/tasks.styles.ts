import { StyleSheet } from 'react-native';

export const tasksStyles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  sceneTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  summaryCard: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  summaryValue: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '700',
  },
  summaryLabel: {
    color: '#6b7280',
    fontSize: 13,
  },
  formCard: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
    padding: 12,
    marginBottom: 12,
  },
  cancelButton: {
    marginTop: 8,
    backgroundColor: '#e5e7eb',
  },
  cancelButtonText: {
    color: '#374151',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  taskCard: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
    padding: 14,
    marginBottom: 10,
  },
  taskTitle: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  editAction: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#93c5fd',
    backgroundColor: '#eff6ff',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  editActionText: {
    color: '#1d4ed8',
    fontSize: 13,
    fontWeight: '600',
  },
  deleteAction: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#fca5a5',
    backgroundColor: '#fef2f2',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  deleteActionText: {
    color: '#b91c1c',
    fontSize: 13,
    fontWeight: '600',
  },
  bannerContainer: {
    alignItems: 'center',
    paddingTop: 8,
  },
  bannerLabel: {
    alignSelf: 'flex-start',
    color: '#6b7280',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
  },
});
