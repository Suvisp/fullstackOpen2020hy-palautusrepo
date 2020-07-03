import React from 'react'
import { connect } from 'react-redux'

import { Table } from 'react-bootstrap'


const User = (props) => {
  if (props.user === undefined) {
    return null
  }
  const blogs = props.user.blogs
  const name = props.user.name
  return (
    <div>
      <h5>{name}</h5>
      <Table striped bordered>
        <thead>
          <tr>
            <th>added blogs</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog =>
            <tr key={blog.id}><td>{blog.title}</td></tr>)}
        </tbody>
      </Table>
    </div>
  )
}

export default connect()(User)