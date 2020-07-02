import usersService from '../services/users'

export const isLoggedIn = () => {
  return {
    type: 'IS_LOGGED_IN'
  }
}

export const login = (user) => {
  return {
    type: 'LOGIN',
    data: user
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const getAllUsers = () => {
  return async dispatch => {
    const users = await usersService.getAll()
    dispatch ({
      type: 'GET_ALL_USERS',
      data: { allUsers: users }
    })
  }
}
