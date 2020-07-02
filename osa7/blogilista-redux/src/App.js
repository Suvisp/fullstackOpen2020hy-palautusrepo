import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css'

import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'
import LoginForm from './components/Loginform'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'
import BlogInfo from './components/BlogInfo'
import UserList from './components/UserList'
import User from './components/User'
import Navigation from './components/Navigation'

import { initializeBlogs } from './actions/blogAction'
import { loggedUser, getAllUsers } from './actions/userAction'


const App = (props) => {

  useEffect(() => {
    props.initializeBlogs()
  }, [])

  useEffect(() => {
    props.loggedUser()
  }, [])

  useEffect(() => {
    props.getAllUsers()
  }, [props.blogs])

  const userById = (id) => {
    return props.users.find(user => user.id === id)
  }

  const blogById = (id) => {
    return props.blogs.find(blog => blog.id === id)
}

  return (
    <div>
      <Router>
        <Navigation />
        <Notification/>
        <ErrorMessage />
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/createnew">
          <BlogForm />
        </Route>
        <Route path="/users">
          <UserList />
        </Route>
        <Route exact path='/users/:id' render={({ match }) =>
          <User user={userById(match.params.id)} />
        } />
        <Route exact path='/blogs/:id' render={({ match }) =>
          blogById(match.params.id) ?
            <BlogInfo blog={blogById(match.params.id)} />
            : <Redirect to="/blogs" />
        } />
        <Route path="/blogs">
          <BlogList />
        </Route>
      </Router>
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
  loggedUser,
  getAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(App)