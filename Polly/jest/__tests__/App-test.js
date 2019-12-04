/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// import App from '../../App'
import CreatePollScreen from '../../src/scenes/CreatePoll/CreatePollScreen'

jest.mock('react-native', () => ({
  NativeEventEmitter: {
      addEventListener: jest.fn(),
  },
  NativeModules: {
      RNPasscodeStatus: {
          supported: jest.fn(),
          status: jest.fn(),
          get: jest.fn()
      }
  },
  Dimensions: {
      get: () => ({
          width: jest.fn(),
          height: jest.fn()
      })
  },
  StyleSheet: {
    create: () => ({})
  },
}));

jest.mock('react-native-elements', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn(),
  }
})

jest.mock('react-native-status-bar-height', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn(),
  }
})


// it('renders correctly', () => {
//   renderer.create(<App />);
// });

it('renders our Create Poll Page using snapshots', () => {
  renderer.create(
    <CreatePollScreen />
  ).toMatchSnapshot();
});
