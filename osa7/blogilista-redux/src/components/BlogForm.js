/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../actions/blogAction'
import { createNotificationOfNew, hideNotification } from '../actions/notificationAction'

import Togglable from './Togglable'


const BlogForm = (props) => {
  const dispatch = useDispatch()

  const blogFormRef = React.createRef()

  const addBlog = async (event) => {
    event.preventDefault()
    blogFormRef.current.toggleVisibility()
    const title = event.target.title.value
    const author = event.target.author.value
    const url = event.target.url.value
    event.target.title.value = ''
    event.target.author.value = ''
    event.target.url.value = ''
    dispatch(createBlog(title, author, url))
    console.log('title', title)
    dispatch(createNotificationOfNew(`New blog '${title}' added`))
    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
  }

  return (
    <div>
      <Togglable buttonLabel="create new" ref={blogFormRef}>
        <h2>Create a new blog</h2>
        <form onSubmit={addBlog}>
          <div>
          title:
            <input
              id='title'
              type='title'
              name='title'
            />
          </div>
          <div>
          author:
            <input
              id='author'
              type='author'
              name='author'
            />
          </div>
          <div>
          url:
            <input
              id='url'
              name='url'
            />
          </div>
          <button type='submit'>save</button>
        </form>
      </Togglable>
    </div >
  )
}

export default BlogForm
