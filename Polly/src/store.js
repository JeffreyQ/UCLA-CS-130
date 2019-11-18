import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import Auth from './reducers/auth'

const rootReducer = combineReducers({
  Auth
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export const dummyPoll = {
  question: 'What do i wear tomorrow',
  owner: 'Stephanie',
  expiration: 'Tomorrow',
  answers: '12 answers so far'
}

export const myPoll = {
  question: 'What kind of dog should I get?',
  owner: 'Sample User',
  expiration: 'Tomorrow',
  answers: '7 answers so far'
}

export default store
