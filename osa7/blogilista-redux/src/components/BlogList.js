/* eslint-disable no-irregular-whitespace */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import BlogForm from './BlogForm'


const BlogList = (props) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div>
      <BlogForm />
      <div>
        {props.blogs
          .sort((a, b) => b.likes - a.likes)
          .map(blog =>
            <div style={blogStyle} key={blog.id}>
              <Link className='title' to={`/blogs/${blog.id}`}>
                {blog.title} - {blog.author}
              </Link>
            </div>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    user: state.users.user
  }
}

export default connect(mapStateToProps)(BlogList)