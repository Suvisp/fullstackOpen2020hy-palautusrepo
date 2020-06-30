import React from 'react'
import PropTypes from 'prop-types'

// const LoginForm = (props) => { props tuli määritellä uudestaan erillisiksi, jotta propTypesejä voidaan käyttää
const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password
}) => {

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm
