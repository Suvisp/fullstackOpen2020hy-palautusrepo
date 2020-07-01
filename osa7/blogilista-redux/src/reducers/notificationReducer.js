const initialState = null

const notificationReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
  case 'NEW_BLOG_NOTIFICATION':
    return action.data
  case 'ADD_LIKE_NOTIFICATION':
    return action.data
  case 'DELETE_BLOG_NOTIFICATION':
    return action.data
  case 'HIDE_NOTIFICATION':
    return initialState
  default: return state
  }
}

export default notificationReducer