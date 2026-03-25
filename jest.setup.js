import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-google-mobile-ads', () => {
  const ReactNative = require('react-native');

  return {
    __esModule: true,
    BannerAd: ReactNative.View,
    BannerAdSize: {
      ANCHORED_ADAPTIVE_BANNER: 'ANCHORED_ADAPTIVE_BANNER',
    },
    TestIds: {
      ADAPTIVE_BANNER: 'test-banner-id',
    },
    default: () => ({
      initialize: jest.fn().mockResolvedValue([]),
      setRequestConfiguration: jest.fn(),
      openAdInspector: jest.fn(),
      openDebugMenu: jest.fn(),
    }),
  };
});

jest.mock('@react-native-vector-icons/ionicons', () => {
  const React = require('react');
  const { View } = require('react-native');

  return {
    __esModule: true,
    Ionicons: props => React.createElement(View, props),
    default: props => React.createElement(View, props),
  };
});

jest.mock('react-native-worklets', () => ({
  __esModule: true,
  RuntimeKind: {
    RN: 'rn',
    UI: 'ui',
  },
  WorkletsModule: {},
  callMicrotasks: jest.fn(),
  createSerializable: jest.fn(value => value),
  createSynchronizable: jest.fn(value => value),
  createWorkletRuntime: jest.fn(),
  executeOnUIRuntimeSync: jest.fn(),
  getRuntimeKind: jest.fn(() => 'rn'),
  isWorkletFunction: jest.fn(() => false),
  makeShareable: jest.fn(value => value),
  makeShareableCloneOnUIRecursive: jest.fn(value => value),
  makeShareableCloneRecursive: jest.fn(value => value),
  registerCustomSerializable: jest.fn(),
  runOnJS: jest.fn(fn => fn),
  runOnRuntime: jest.fn(fn => fn),
  runOnUI: jest.fn(fn => fn),
  runOnUIAsync: jest.fn(fn => fn),
  runOnUISync: jest.fn(fn => fn),
  scheduleOnRN: jest.fn(),
  scheduleOnRuntime: jest.fn(),
  scheduleOnUI: jest.fn(),
  serializableMappingCache: new Map(),
  shareableMappingCache: new Map(),
}));

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = () => {};

  return Reanimated;
});
