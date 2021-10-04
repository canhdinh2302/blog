const reducer = (state = { currentUser: {} }, action) => {
  if (action.type === 'SET_CURRENT_USER') {
    const newState = { ...state }
    newState.currentUser = action.payload
    return newState
  }
  return state
}

export default reducer
