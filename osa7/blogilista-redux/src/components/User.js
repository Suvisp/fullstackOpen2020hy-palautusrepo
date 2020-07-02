import React from 'react'
import { connect } from 'react-redux'


const User = (props) => {
  if (props.user === undefined) {
    return null
  }
  const blogs = props.user.blogs
  const name = props.user.name
  return (
    <div>
      <h2>{name}</h2>
      <h4>blogs added</h4>
      {blogs.map(blog =>
        <div key={blog.id}>
          {blog.title}</div>)}
    </div>
  )
}

export default connect()(User)