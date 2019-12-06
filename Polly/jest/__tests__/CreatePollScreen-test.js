/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native'

// import App from '../../App'
import { CreatePollScreen } from '../../src/scenes/CreatePoll/CreatePollScreen'

const createTestProps = (props) => ({
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
    expect(wrapper.find(View)).toHaveLength(1)
  })

  it('renders four buttons on our poll creation page', () => {
    expect(wrapper.find(View).children()).toHaveLength(4)
  })
})
