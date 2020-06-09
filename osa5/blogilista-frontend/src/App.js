import React, { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/Loginform'
import BlogForm from './components/BlogForm'
import ErrorMessage from './components/ErrorMessage'
import Togglable from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  // const [newBlog, setNewBlog] = useState('')
  // const [title, setTitle] = useState('')
  // const [author, setAuthor] = useState('')
  // const [url, setUrl] = useState('')
  const [notification, setNotification] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  // const [loginVisible, setLoginVisible] = useState(false)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  // const handleUsernameChange = (event) => setUsername(event.target.value)
  // const handlePasswordChange = (event) => setPassword(event.target.value)
  // const handleTitleChange = (event) => setTitle(event.target.value)
  // const handleAuthorChange = (event) => setAuthor(event.target.value)
  // const handleUrlChange = (event) => setUrl(event.target.value)


  //ADD A NEW BLOG
  const addBlog = (blogObject) => {
    blogFormRef.current.toggleVisibility()
    // event.preventDefault()
    // const blogObject = {
    //   title: title,
    //   author: author,
    //   url: url
    // }  
    blogService
      .createOne(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        // setNewBlog('')
      })
      setNotification(`a new blog ${blogObject.title} by ${blogObject.author} added`)
        setTimeout(() => {
          setNotification(null)
        }, 5000)
  }

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

  const handleLogout = event => {
    event.preventDefault();
    window.localStorage.clear();
    setUser(null);
  }

  const blogFormRef = React.createRef()


  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <ErrorMessage message={errorMessage} />
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

      <Notification notification={notification} />

      {user.name} logged in {"  "}
      <button onClick={handleLogout}> logout</button>
      <br />

      <Togglable buttonLabel='new blog' ref={blogFormRef}>
        <BlogForm
          createBlog={addBlog}
        />
      </Togglable>
      <br />
      {blogs.map(blog =>
        <BlogList key={blog.id} blog={blog} />
      )}
    </div>
  );

}



export default App