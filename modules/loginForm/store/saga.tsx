import { put, call, takeEvery } from 'redux-saga/effects'
import { actionTypes } from './actions'
import { loginService } from '../services'

function* login(action: any) {
  try {
    const {
      user: { username: name, email, id },
      jwt,
    } = yield call(loginService, action.payload)
    yield put({ type: actionTypes.LOGIN_SUCCESS, payload: { name, email, id } })
    localStorage.setItem('jwt', jwt)
  } catch {
    yield put({ type: actionTypes.LOGIN_FAIL })
  }
}

const currentUserSaga = takeEvery(actionTypes.LOGIN_START, login)

export default currentUserSaga
