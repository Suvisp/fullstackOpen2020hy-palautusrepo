import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import loginService from '../services/login'
import { createErrorMessage, hideErrorMessage } from '../actions/errorAction'
import { onLogin } from '../actions/userAction'

import { Form, Button } from 'react-bootstrap'


const LoginForm = (props) => {
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      props.onLogin(user)
      setUsername('')
      setPassword('')
      history.push('/blogs')
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
      <h4>Log in to application</h4>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>username</Form.Label>
          <Form.Control
            id='username'
            name='username'
            type='username'
            value={username}
            onChange={handleUsernameChange}
          />
          <Form.Label>password</Form.Label>
          <Form.Control
            id='password'
            name='password'
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
          <Button variant="primary" id='login-button' type='submit'>login</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

const mapDispatchToProps = {
  createErrorMessage,
  hideErrorMessage,
  onLogin
}

export default connect(null, mapDispatchToProps)(LoginForm)