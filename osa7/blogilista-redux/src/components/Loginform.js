import React, { useState } from 'react'
import { connect } from 'react-redux'

import loginService from '../services/login'
import { createErrorMessage, hideErrorMessage } from '../actions/errorAction'
import { login } from '../actions/userAction'


const LoginForm = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      props.login(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      props.createErrorMessage('Wrong credentials')
      setTimeout(() => {
        props.hideErrorMessage()
      }, 5000)
    }
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div>
      <h2>Log in to application</h2>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            id='username'
            name='username'
            type='username'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          password
          <input
            id='password'
            name='password'
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button id='login-button' type='submit'>login</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createErrorMessage,
  hideErrorMessage,
  login
}

export default connect(null, mapDispatchToProps)(LoginForm)