/* eslint-disable no-irregular-whitespace */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import BlogForm from './BlogForm'

import { Table } from 'react-bootstrap'


const BlogList = (props) => {

  return (
    <div>
      <BlogForm />
      <div>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Blogs</th>
            </tr>
          </thead>
          <tbody>
            {props.blogs
              .sort((a, b) => b.likes - a.likes)
              .map(blog =>
                <tr key={blog.id}>
                  <td>
                    <Link to={`/blogs/${blog.id}`}>{blog.title} - {blog.author}</Link>
                  </td>
                </tr>
              )}
          </tbody>
        </Table>
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