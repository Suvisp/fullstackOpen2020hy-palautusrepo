const blogReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
  case 'NEW_BLOG':
    action.data.votes = 0
    return [...state, action.data]
  case 'INIT_BLOGS':
    return action.data
  default: return state
  }
}


export default blogReducer