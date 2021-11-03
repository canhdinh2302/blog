import { createAction } from 'redux-actions'

export const actionTypes = {
  LOGIN_START: '@login/login-start',
  LOGIN_SUCCESS: '@login/login-success',
  LOGIN_FAIL: '@login/login-fail',
}

export const loginAction = createAction(actionTypes.LOGIN_START)
