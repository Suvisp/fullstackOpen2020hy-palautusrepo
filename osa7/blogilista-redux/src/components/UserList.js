import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Table } from 'react-bootstrap'


const UsersList = (props) => {
  const numberOfBlogsByUser = (user) => {
    return user.blogs.length
  }

  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Users</th>
            <th>Blogs created</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map(user =>
            <tr key={user.id}>
              <td>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </td>
              <td>
                {numberOfBlogsByUser(user)}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users.allUsers,
  }
}

export default connect(mapStateToProps)(UsersList)