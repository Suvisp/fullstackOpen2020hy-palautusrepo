const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

//GET all blogs
blogsRouter.get('/', async (request, response) => {
    // const blogs = await Blog.find({})
    const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })

    response.json(blogs)  
  })

//POST new blog with a valid token
 blogsRouter.post('/', async (request, response, next) => {
    const body = request.body

  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    
    if (!request.token || !decodedToken.id) {
        return response.status(401).send({ error: 'Missing or invalid token' }) 
    }
    const user = await User.findById(decodedToken.id)

    const blog = new Blog({ 
        title: body.title,
        author: body.author,
        user: user,
        url: body.url,
        likes: body.likes || 0
    })

    const savedBlog = await blog.save()
    if (savedBlog) {
        user.blogs = user.blogs.concat(savedBlog._id)
        await user.save()
        response.status(201).json(savedBlog)
    } else {
        response.status(400).end()
    }

} catch (exception) {
    next(exception)
}
})

//DELETE a blog with a valid token
blogsRouter.delete('/:id', async (request, response, next) => {
  const blogToDelete = await Blog.findById(request.params.id)
  // console.log('blog to be deleted', blogToDelete)

  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (!request.token || !decodedToken.id) {
      return response.status(401).send({ error: 'Missing or invalid token' }) 
  }
  const user = await User.findById(decodedToken.id)
  // console.log('user', user)

  if ( blogToDelete.user.toString() != user._id.toString() ) {
    return response.status(401).send({ error: 'Only valid user can delete blog' })
  }

  blogToDelete.remove()
  response.status(204).end()

  } catch (exception) {
    next(exception)
}
})

//UPDATE a blog
blogsRouter.put('/:id', async (request, response) => {
	const body = request.body

	const blog = {
    title: body.title,
    author: body.author,
    // user: body.user,
    url: body.url,
    likes: body.likes
	}

	const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
	response.json(updatedBlog.toJSON())
})


  module.exports = blogsRouter