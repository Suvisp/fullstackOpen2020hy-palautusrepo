import React from 'react'
import Togglable from './Togglable'


const BlogList = ({ blog, addLikes, deleteBlog, user }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
console.log('blog', blog)
  if (user.username === blog.user.username) {
    return (
      <div style={blogStyle}>
        {blog.title} - {blog.author}
        < Togglable buttonLabel='view' >
          {blog.url}
          < br />
        Likes: {blog.likes}
          <button onClick={addLikes}>like</button>
          <br />
          {blog.user.username}
        </Togglable >
        <button onClick={deleteBlog}>Remove</button>
      </div>
    )
  } else {
    return (
      <div style={blogStyle}>
        {blog.title} - {blog.author}
        < Togglable buttonLabel='view' >
          {blog.url}
          < br />
        likes {blog.likes}
          <button onClick={addLikes}>like</button>
          <br />
          {blog.user.username}
          <br />
        </Togglable >
      </div>
    )
  }
}

  export default BlogList