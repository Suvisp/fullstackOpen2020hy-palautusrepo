import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

import BlogList from './components/BlogList'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'
import LoginForm from './components/Loginform'
import BlogForm from './components/BlogForm'
// import Togglable from './components/Togglable'
import UserList from './components/UserList'
import User from './components/User'

import { initializeBlogs } from './actions/blogAction'
import { isLoggedIn, login, logout, getAllUsers } from './actions/userAction'


const App = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  useEffect(() => {
    props.isLoggedIn()
  }, [])

  useEffect(() => {
    props.getAllUsers()
  }, [props.blogs])


  return (
    <div className="App">
      <Notification />
      <ErrorMessage />
      <LoginForm />
      <BlogForm />
      <h2>Blogs</h2>
      <BlogList />
      <User />
      <UserList />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    user: state.users.user,
    users: state.users.allUsers
  }
}

const mapDispatchToProps = {
  initializeBlogs,
  isLoggedIn,
  login,
  logout,
  getAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(App)