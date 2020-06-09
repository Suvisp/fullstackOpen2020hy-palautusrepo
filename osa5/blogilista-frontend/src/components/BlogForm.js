import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleTitleChange = (event) => setTitle(event.target.value)
  const handleAuthorChange = (event) => setAuthor(event.target.value)
  const handleUrlChange = (event) => setUrl(event.target.value)

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: title,
      author: author,
      url: url
    })

    setNewBlog('')
  }


  return (
    <div>
      <h2>Create a new blog</h2>

      <form onSubmit={addBlog}>

        <div>
          title:
          <input
            type="title"
            value={title}
            name="title"
            onChange={handleTitleChange}
          />
        </div>
        <div>
          author:
          <input
            type="author"
            value={author}
            name="author"
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          url:
          <input
            // type="url"
            value={url}
            name="url"
            onChange={handleUrlChange}
          />
        </div>

        <button type="submit">save</button>
      </form>
    </div >
  )
}

export default BlogForm
