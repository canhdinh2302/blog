import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import reducer from '../reducers'
import mySaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(logger, sagaMiddleware),
)
sagaMiddleware.run(mySaga)
export default store
