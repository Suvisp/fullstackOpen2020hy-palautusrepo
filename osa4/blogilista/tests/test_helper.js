const Blog = require('../models/blog')

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

module.exports = {
  initialBlogs, 
//   nonExistingId, 
  blogsInDb
}