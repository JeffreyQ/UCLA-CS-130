import MockAsyncStorage from 'mock-async-storage';
const mockImpl = new MockAsyncStorage()
jest.mock('@react-native-community/async-storage', () => mockImpl);
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new EnzymeAdapter() });