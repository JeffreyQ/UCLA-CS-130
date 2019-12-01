import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import Auth from './reducers/auth'
import Polls from './reducers/polls'
import User from './reducers/user'

const rootReducer = combineReducers({
  Auth,
  Polls
  User
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

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
