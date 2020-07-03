const blogReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
  case 'INIT_BLOGS':
    return action.data
  case 'NEW_BLOG':
    action.data.votes = 0
    return [...state, action.data]
  case 'ADD_LIKE':
    return state.map(blog =>
      blog.id !== action.data.id ? blog : action.data
    )
  case 'DELETE_BLOG':
    return state.filter(blog => blog.id !== action.data.id)
  default: return state
  }
}


export default blogReducer