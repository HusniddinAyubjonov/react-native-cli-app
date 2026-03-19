import { StyleSheet } from 'react-native';

export const lottieStyles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 32,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '48%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  animation: {
    width: 150,
    height: 150,
  },
});
