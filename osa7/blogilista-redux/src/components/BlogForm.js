/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../actions/blogAction'
import { createNotificationOfNew, hideNotification } from '../actions/notificationAction'


const BlogForm = (props) => {
  const dispatch = useDispatch()

  const addBlog = async (event) => {
    event.preventDefault()
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
      <h2>Create a new blog</h2>
      <form onSubmit={addBlog}>
        <div>
          title:
          <input
            id='title'
            type='title'
            // value={newTitle}
            name='title'
            // onChange={handleTitleChange}
          />
        </div>
        <div>
          author:
          <input
            id='author'
            type='author'
            // value={newAuthor}
            name='author'
            // onChange={handleAuthorChange}
          />
        </div>
        <div>
          url:
          <input
            id='url'
            // type='url'
            // value={newUrl}
            name='url'
            // onChange={handleUrlChange}
          />
        </div>
        <button type='submit'>save</button>
      </form>
    </div >
  )
}

export default BlogForm
