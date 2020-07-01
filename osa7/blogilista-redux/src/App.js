import React, { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import Notification from './components/Notification'
import LoginForm from './components/Loginform'
import BlogForm from './components/BlogForm'
import ErrorMessage from './components/ErrorMessage'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'
import { initializeBlogs } from './actions/blogAction'
import { useDispatch } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()

  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)


  //GET ALL
  useEffect(() => {
    dispatch(initializeBlogs())
  },[dispatch])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  //REMOVE A BLOG - DELETE
  // const removeBlog = (id) => {
  //   const deleteId = blogs.filter(b => b.id === id)
  //   if (deleteId.length === 1) {
  //     if (window.confirm(`Do you want to delete ${deleteId[0].title}?`)) {
  //       blogService
  //         .deleteOne(id)
  //       // .then(returnedBlogs => {
  //       // .then() {
  //       setBlogs(blogs.filter(b => b.id !== id))
  //       // setNewPeople(people.concat(returnedPeople))
  //       // setNotification(`'${deleteId[0].title}' deleted`)
  //       // setTimeout(() => {
  //       //   setNotification(null)
  //       // }, 5000)
  //       // })
  //     }
  //   }
  // }

  //LOGIN
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  //LOGOUT
  const handleLogout = event => {
    event.preventDefault()
    window.localStorage.clear()
    setUser(null)
  }

  const blogFormRef = React.createRef()


  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <ErrorMessage id='error' message={errorMessage} />
        <br />
        <Togglable buttonLabel='login'>
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
        </Togglable>
      </div>
    )
  }

  return (
    <div>
      <h2>Blogs</h2>
      <Notification />
      {user.name} logged in {'  '}
      <button onClick={handleLogout}> logout</button>
      <br />
      <Togglable buttonLabel='new blog' ref={blogFormRef}>
        <BlogForm />
      </Togglable>
      <br />
      <BlogList />
    </div>
  )
}


export default App