/* eslint-disable no-irregular-whitespace */
import blogService from '../services/blogs'

export const getAllBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs,
    })
  }
}

export const createBlog = (title, author, url) => {
  return async dispatch => {
    const newBlog = await blogService.createOne(title, author, url)
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog
    })
  }
}

export const addLikes = (blog) => {
  return async dispatch => {
    const likedBlog = { ...blog, likes: blog.likes + 1 }
    const updatedBlog = await blogService.updateOne(likedBlog)
    dispatch({
      type: 'ADD_LIKE',
      data: {
        updatedBlog,
      }
    })
  }
}

export const deleteBlog = id => {
  return async dispatch => {
    await blogService.deleteOne(id)
    dispatch({
      type: 'DELETE_BLOG',
      data: { id }
    })
  }
}