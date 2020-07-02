const initialState = null

const errorReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
  case 'WRONG_CREDENTIALS':
    return action.data
  case 'HIDE_ERRORMESSAGE':
    return initialState
  default: return state
  }
}

export default errorReducer