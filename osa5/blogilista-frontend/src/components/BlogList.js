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
      <div style={blogStyle} className='blogs'>
        <div>
          {blog.title} - {blog.author}
          <button onClick={() => setVisible(!visible)} className='viewButton'>{label}</button>
        </div>
        {visible && (
          <div>
            {blog.url}
            < br />
        Likes: {blog.likes}
            <button onClick={addLikes} className='likeButton'>like</button>
            <br />
            {blog.user.username}
            <br />
            <button id='delete-button' onClick={deleteBlog}>remove</button>
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div style={blogStyle}>
        <div>
          {blog.title} - {blog.author}
          <button onClick={() => setVisible(!visible)} className='viewButton'>{label}</button>
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