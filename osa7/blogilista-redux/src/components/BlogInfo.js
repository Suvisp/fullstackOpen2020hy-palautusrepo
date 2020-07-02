/* eslint-disable indent */
import React from 'react'
import { connect } from 'react-redux'

import { addLikes, deleteBlog } from '../actions/blogAction'
import { createNotificationOfLike, createNotificationOfDelete, hideNotification } from '../actions/notificationAction'


const BlogInfo = (props) => {
  const blog = props.blog
  const username = blog.user.username
  const userLoggedIn = props.user.username

  console.log('user.username', props.user.username)

  const removeVisibility = { display: userLoggedIn === username ? '' : 'none' }

  const handleLike = (blog) => {
    props.addLikes(blog)
    props.createNotificationOfLike(`you liked '${blog.title}'`)
    setTimeout(() => {
      props.hideNotification()
    }, 5000)
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
      <h2>{blog.title} - {blog.author}</h2>
      <div>{blog.url}</div>
      <div>
        {blog.likes} likes
        <button onClick={() => handleLike(blog)}>like</button>
      </div>
      <div>added by {username}</div>
      <button style={removeVisibility} onClick={() => handleDelete(blog)}>remove</button>
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
  hideNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogInfo)