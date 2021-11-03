import { actionTypes } from './actions'

const defaultValue = {
  isSubmiting: false,
  name: '',
  email: '',
  id: '',
}

const curentUserReducer = (state = defaultValue, { type, payload }) => {
  switch (type) {
    case actionTypes.LOGIN_START:
      return { ...state, isSubmiting: true }
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, isSubmiting: false, ...payload }
    case actionTypes.LOGIN_FAIL:
      return { ...defaultValue, isSubmiting: false }
    default:
      return state
  }
}

export default curentUserReducer
