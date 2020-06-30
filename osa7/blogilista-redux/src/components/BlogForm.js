/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNotificationOfNew, hideNotification } from '../actions/notificationAction'
// import { showNotificationOfNewBlog } from '../actions/notificationAction'


const BlogForm = ({ createBlog }) => {
  const dispatch = useDispatch()

  const [newBlog, setNewBlog] = useState('')
  const [newTitle, setTitle] = useState('')
  const [newAuthor, setAuthor] = useState('')
  const [newUrl, setUrl] = useState('')

  const handleTitleChange = (event) => setTitle(event.target.value)
  const handleAuthorChange = (event) => setAuthor(event.target.value)
  const handleUrlChange = (event) => setUrl(event.target.value)

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl,
    })

    setNewBlog('')

    // showNotificationOfNewBlog(`New blog '${newTitle}' added`, 5)
    console.log('newTitle', newTitle)
    dispatch(createNotificationOfNew(`New blog '${newTitle}' added`))
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
            value={newTitle}
            name='title'
            onChange={handleTitleChange}
          />
        </div>
        <div>
          author:
          <input
            id='author'
            type='author'
            value={newAuthor}
            name='author'
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          url:
          <input
            id='url'
            // type='url'
            value={newUrl}
            name='url'
            onChange={handleUrlChange}
          />
        </div>
        <button type='submit'>save</button>
      </form>
    </div >
  )
}

export default BlogForm
