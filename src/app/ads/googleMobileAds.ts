import { Platform } from 'react-native';
import mobileAds, { TestIds } from 'react-native-google-mobile-ads';

// Replace these sample ids with your own AdMob ids before publishing.
export const bannerAdUnitId =
  __DEV__
    ? TestIds.ADAPTIVE_BANNER
    : Platform.select({
        android: 'ca-app-pub-3940256099942544/9214589741',
        ios: 'ca-app-pub-3940256099942544/2435281174',
      }) ?? TestIds.ADAPTIVE_BANNER;

let initializationPromise: Promise<unknown> | null = null;

export function initializeGoogleMobileAds() {
  if (!initializationPromise) {
    initializationPromise = mobileAds().initialize();
  }

  return initializationPromise;
}
