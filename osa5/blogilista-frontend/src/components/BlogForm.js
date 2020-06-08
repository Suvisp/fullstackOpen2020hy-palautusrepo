import React from 'react'

const BlogForm = ({ addBlog, title, author, url, handleTitleChange, handleAuthorChange, handleUrlChange }) => (
  <form onSubmit={addBlog}>
    <h2>Create new</h2>
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
        type="url"
        value={url}
        name="url"
        onChange={handleUrlChange}
      />
    </div>

    <button type="submit">save</button>
  </form>
)

export default BlogForm