import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

const UsersList = (props) => {
  const numberOfBlogsByUser = (user) => {
    return user.blogs.length
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>blogs created</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map(user =>
            <tr key={user.id}>
              <td>
                {user.name}
              </td>
              <td>
                {numberOfBlogsByUser(user)}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users.allUsers
  }
}

export default connect(mapStateToProps)(UsersList)