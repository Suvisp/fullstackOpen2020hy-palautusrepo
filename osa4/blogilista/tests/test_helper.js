const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title: 'Unelmapuutarha',
    author: 'Puutarha-mimmi',
    url: 'www.mimminunelmapuutarha.fi',
    likes: 10
  },
  {
    title: 'Kallen sopat',
    author: 'Kalle',
    url: 'www.kallensopat.fi',
    likes: 5
  }
]


const initialUsers = [
  {
    username: 'testaaja',
    name: 'testaaja',
    password: 'salainensana'
  }
]

const auth_token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJsb2dpdGVzdGFhamEiLCJpZCI6IjVlZGI5NzEzMGIwNGI2MTJmODM0NzRlNSIsImlhdCI6MTU5MTUzNjEyNX0.DrNQMl21u0MI6cT6dr9joyvt8XBxPKomMMgELwBjggg'

// const nonExistingId = async () => {
//   const blog = new Blog({ title: 'willremovethissoon' })
//   await blog.save()
//   await blog.remove()

//   return blog._id.toString()
// }

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs, 
  initialUsers,
  auth_token,
//   nonExistingId, 
  blogsInDb,
  usersInDb,
}