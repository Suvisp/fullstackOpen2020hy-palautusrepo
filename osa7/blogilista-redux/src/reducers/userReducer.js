/* eslint-disable no-case-declarations */
import blogService from '../services/blogs'

const userReducer = (state = { user: '', allUsers: [] }, action) => {
  switch (action.type) {
  case 'LOGGED_USER':
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      return { ...state, user }
    }
    return { ...state, user: '' }
  case 'LOGIN':
    const user = action.data
    window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))

    blogService.setToken(user.token)
    return { ...state, user }
  case 'LOGOUT':
    window.localStorage.clear()
    return { ...state, user: '' }
  case 'GET_ALL_USERS':
    return { ...state, allUsers: action.data.allUsers }
  default:
    return state
  }
}

export default userReducer