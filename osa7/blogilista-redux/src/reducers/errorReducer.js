const initialState = null

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'WRONG_CREDENTIALS':
    return action.data
  case 'HIDE_ERRORMESSAGE':
    return initialState
  default: return state
  }
}

export default errorReducer