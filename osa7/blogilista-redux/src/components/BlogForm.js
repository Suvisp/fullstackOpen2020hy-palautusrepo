/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'

import Togglable from './Togglable'
import { createBlog } from '../actions/blogAction'
import { createNotificationOfNew, hideNotification } from '../actions/notificationAction'


import { Form, Button } from 'react-bootstrap'


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
        <h4>Create a new blog</h4>
        <Form onSubmit={addBlog}>
          <Form.Group>
            <Form.Label>title</Form.Label>
            <Form.Control
              id='title'
              type='title'
              name='title'
            />
            <Form.Label>author</Form.Label>
            <Form.Control
              id='author'
              type='author'
              name='author'
            />
            <Form.Label>url</Form.Label>
            <Form.Control
              id='url'
              type='url'
              name='url'
            />
            <Button variant="primary" type="submit">save</Button>
          </Form.Group>
        </Form>
      </Togglable>
    </div >
  )
}

export default BlogForm
