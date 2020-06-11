import React, { useState } from 'react'

const BlogList = ({ blog, addLikes, deleteBlog, user }) => {
  const [visible, setVisible] = useState(false)

  const label = visible ? 'hide' : 'view'

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  if (user.username === blog.user.username) {
    return (
      <div style={blogStyle}>
        <div>
          {blog.title} - {blog.author}
          <button onClick={() => setVisible(!visible)}>{label}</button>
        </div>
        {visible && (
          <div>
            {blog.url}
            < br />
        Likes: {blog.likes}
            <button onClick={addLikes}>like</button>
            <br />
            {blog.user.username}
            <br />
            <button onClick={deleteBlog}>Remove</button>
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div style={blogStyle}>
        <div>
          {blog.title} - {blog.author}
          <button onClick={() => setVisible(!visible)}>{label}</button>
        </div>
        {visible && (
          <div>
            {blog.url}
            < br />
        likes {blog.likes}
            <button onClick={addLikes}>like</button>
            <br />
            {blog.user.username}
            <br />
          </div>
        )}
      </div>
    )
  }
}

export default BlogList