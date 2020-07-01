/* eslint-disable no-irregular-whitespace */
import React from 'react'
import { connect } from 'react-redux'
import { addLikes, deleteBlog } from '../actions/blogAction'
import { createNotificationOfLike, createNotificationOfDelete } from '../actions/notificationAction'


const BlogList = (props) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const handleLike = (blog) => {
    props.addLikes(blog)
    props.createNotificationOfLike(`you liked '${blog.title}'`, 5)
  }

  const handleDelete = (blog) => {
    props.deleteBlog(blog.id)
    props.createNotificationOfDelete(`you removed '${blog.title}'`, 5)
  }

  // console.log('user.username', props.user.username)
  // console.log('blog.user.username', props.blog.user.username)
  // if (user.username === blog.user.username) {
  // if (user ? user.username === blog.user.username : false) {
  // Tai (user && user.username === blog?.user?.username)
  if (props.user && props.blog.user && props.user.username === props.blog.user.username) {
    return (
      <div style={blogStyle} className='blogs'>
        {props.blogs
          .sort((a, b) => b.likes - a.likes)
          .map(blog =>
            <div key={blog.id}>
              <div>
                {blog.title} - {blog.author}
              </div>
              {/* blog={blog} user={user} addLikes={() => addLikes(blog.id)} deleteBlog={() => removeBlog(blog.id)} */}
              {/* {props.blog.title} - {props.blog.author} */}
              {/* <button onClick={() => setVisible(!visible)} className='viewButton'>{label}</button> */}
              {/* </div> */}
              <div>
                {blog.url}
                < br />
likes: {blog.likes}
                <button onClick={() => handleLike(blog)} className='likeButton'>like</button>
                {blog.user.username}
                <button id='delete-button' onClick={() => handleDelete(blog)}>remove</button>
              </div>
            </div>
          )}
      </div>
    )
  } else {
    return (
      <div style={blogStyle}>
        {props.blogs
          .sort((a, b) => b.likes - a.likes)
          .map(blog =>
            <div key={blog.id}>
              <div>
                {blog.title} - {blog.author}
              </div>
              <div>
                {blog.url}
                < br />
likes {blog.likes}
                {/* <button onClick={() => props.addLikes(props.blog.id)}>like</button> */}
                {/* <button onClick={() => props.handleLike(blog.id)} className='likeButton'>like</button> */}
                <button onClick={() => handleLike(blog)} className='likeButton'>like</button>
                <br />
                {blog.user.username}
                <br />
                <button id='delete-button' onClick={() => handleDelete(blog)}>remove</button>
              </div>
            </div>
          )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

const mapDispatchToProps = {
  addLikes,
  createNotificationOfLike,
  deleteBlog,
  createNotificationOfDelete
}

const ConnectedBlogs = connect(mapStateToProps, mapDispatchToProps)(BlogList)

export default ConnectedBlogs