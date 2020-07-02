import React from 'react'
import { connect } from 'react-redux'
// import Togglable from './components/Togglable'


const User = (props) => {
  if (props.user === undefined) {
    return null
  }
  const blogs = props.user.blogs
  const name = props.user.name
  return (
    <div>
      <h2>{name}</h2>
      {/* <Togglable buttonLabel='blogs added'>added blogs */}
      {/* </Togglable> */}
      {blogs.map(blog =>
        <div key={blog.id}>{blog.title}</div>)}
    </div>
  )
}

export default connect()(User)