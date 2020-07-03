import usersService from '../services/users'

export const loggedUser = () => {
  return {
    type: 'LOGGED_USER'
  }
}

export const onLogin = (user) => {
  return {
    type: 'LOGIN',
    data: user
  }
}

export const onLogout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const getAllUsers = () => {
  return async dispatch => {
    const users = await usersService.getAll()
    dispatch ({
      type: 'ALL_USERS',
      data: { allUsers: users }
    })
  }
}
