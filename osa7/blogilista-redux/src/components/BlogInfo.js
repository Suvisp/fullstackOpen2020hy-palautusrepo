/* eslint-disable indent */
import React from 'react'
import { connect } from 'react-redux'

import { addLikes, deleteBlog } from '../actions/blogAction'
import { createNotificationOfLike, createNotificationOfDelete, hideNotification } from '../actions/notificationAction'
import { getAllBlogs } from '../actions/blogAction'

import { Button } from 'react-bootstrap'


const BlogInfo = (props) => {
  const blog = props.blog
  const username = blog.user.username
  const userLoggedIn = props.user.username

  // console.log('user.username', props.user.username)

//ainoastaan blogin lisännyt käyttäjä voi poistaa blogin
  const removeVisibility = { display: userLoggedIn === username ? '' : 'none' }

  const handleLike = (blog) => {
    props.addLikes(blog)
    props.createNotificationOfLike(`you liked '${blog.title}'`)
    setTimeout(() => {
      props.hideNotification()
    }, 5000)
    //päivitä blogit (ja blogien liketys)
    props.getAllBlogs()
  }

  const handleDelete = (blog) => {
    props.deleteBlog(blog.id)
    props.createNotificationOfDelete(`you removed '${blog.title}'`)
    setTimeout(() => {
      props.hideNotification()
      }, 5000)
  }

  return (
    <div>
      <h5>{blog.title} - {blog.author}</h5>
      <a href={blog.url}>{blog.url}</a>
      <div>
        {blog.likes} likes
        <Button variant="primary"  onClick={() => handleLike(blog)}>like</Button>
      </div>
      <div>added by {username}</div>
      <Button variant="danger" style={removeVisibility} onClick={() => handleDelete(blog)}>remove</Button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user
  }
}

const mapDispatchToProps = {
  addLikes,
  deleteBlog,
  createNotificationOfLike,
  createNotificationOfDelete,
  hideNotification,
  getAllBlogs
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogInfo)