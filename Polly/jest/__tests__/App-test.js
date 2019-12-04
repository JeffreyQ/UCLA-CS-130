/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme';
import { View, StyleSheet } from 'react-native'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// import App from '../../App'
import { CreatePollScreen } from '../../src/scenes/CreatePoll/CreatePollScreen'
import { exportAllDeclaration } from '@babel/types';

// jest.mock('react-native', () => ({
//   NativeEventEmitter: {
//       addEventListener: jest.fn(),
//   },
//   NativeModules: {
//       RNPasscodeStatus: {
//           supported: jest.fn(),
//           status: jest.fn(),
//           get: jest.fn()
//       }
//   },
//   Dimensions: {
//       get: () => ({
//           width: jest.fn(),
//           height: jest.fn()
//       })
//   },
//   StyleSheet: {
//     create: () => ({})
//   },
// }));

// jest.mock('react-native-elements', () => {
//   return {
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     openURL: jest.fn(),
//     canOpenURL: jest.fn(),
//     getInitialURL: jest.fn(),
//   }
// })

// jest.mock('react-native-status-bar-height', () => {
//   return {
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     openURL: jest.fn(),
//     canOpenURL: jest.fn(),
//     getInitialURL: jest.fn(),
//   }
// })


// it('renders correctly', () => {
//   renderer.create(<App />);
// });

// it('renders our Create Poll Page using snapshots', () => {
//   const navigation = { navigate: jest.fn() };
//   shallow.create(
//     <CreatePollScreen navigation={navigation}/>
//   )//.toMatchSnapshot();
// });
const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe('Create Poll Component', () => {
  let wrapper;
  beforeEach(() => {
    props = createTestProps({});
    wrapper = shallow(<CreatePollScreen {...props}/>)
  })

  it('renders our Create Poll Page without error', () => {
    const navigation = { navigate: jest.fn() };
    expect(wrapper.find(View)).toHaveLength(1)
  })
})
