import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import { all } from 'redux-saga/effects'

import currentUserSaga from '@modules/loginForm/store/saga'
import currentUserReducer from '@modules/loginForm/store/reducer'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({ currentUser: currentUserReducer })
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))

function* rootSaga() {
  yield all([yield currentUserSaga])
}

sagaMiddleware.run(rootSaga)

export default store
