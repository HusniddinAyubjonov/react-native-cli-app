import { StyleSheet } from 'react-native';

export const chatColors = {
  active: '#2563eb',
  activeBackground: '#e0ecff',
  headerTint: '#0f172a',
  inactive: '#64748b',
  scene: '#f8fafc',
  surface: '#ffffff',
};

export const chatStyles = StyleSheet.create({
  drawerScene: {
    backgroundColor: chatColors.scene,
  },
  drawerContent: {
    backgroundColor: 'transparent',
  },
  drawerContentContainer: {
    flexGrow: 1,
    paddingHorizontal: 14,
    paddingBottom: 20,
  },
  drawerHero: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.22)',
    backgroundColor: 'rgba(255, 255, 255, 0.82)',
    padding: 18,
    marginBottom: 14,
    marginTop: 6,
  },
  drawerEyebrow: {
    color: '#64748b',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  drawerTitle: {
    color: '#0f172a',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
  },
  drawerText: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 20,
  },
  drawer: {
    backgroundColor: chatColors.surface,
    width: 292,
  },
  iosDrawer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(148, 163, 184, 0.16)',
    width: 300,
  },
  drawerItem: {
    borderRadius: 16,
    marginVertical: 4,
  },
  drawerLabel: {
    fontSize: 15,
    fontWeight: '700',
  },
  header: {
    backgroundColor: chatColors.surface,
  },
  iosHeader: {
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
  },
  headerTitle: {
    color: '#0f172a',
    fontSize: 18,
    fontWeight: '800',
  },
  headerAction: {
    marginLeft: 14,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(148, 163, 184, 0.12)',
  },
  scene: {
    flex: 1,
    backgroundColor: chatColors.scene,
  },
  unavailableCard: {
    margin: 20,
    marginTop: 24,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: chatColors.surface,
    padding: 18,
    gap: 10,
  },
  unavailableTitle: {
    color: '#0f172a',
    fontSize: 20,
    fontWeight: '800',
  },
  unavailableText: {
    color: '#475569',
    fontSize: 15,
    lineHeight: 22,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 32,
  },
  sceneTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 6,
  },
  sceneSubtitle: {
    color: '#64748b',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 14,
  },
  card: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: chatColors.surface,
    padding: 16,
    gap: 8,
    marginTop: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#0f172a',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },
  cardText: {
    color: '#475569',
    fontSize: 15,
    lineHeight: 22,
  },
  cardMeta: {
    color: '#64748b',
    fontSize: 13,
    fontWeight: '600',
  },
  badge: {
    color: '#ffffff',
    backgroundColor: chatColors.active,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '700',
  },
  badgeMuted: {
    color: '#475569',
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '600',
  },
});
