const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./test_helper')
const Blog = require('../models/blog')
const bcrypt = require('bcrypt')
const User = require('../models/user')

describe('when there is initially some blogs saved', () => {

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.initialBlogs)
  })

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there are 2 blogs', async () => {
    const response = await api.get('/api/blogs')
  
    expect(response.body).toHaveLength(2)
  })

describe('viewing a specific blog', () => {

test('succeeds with a valid id', async () => {
    const response = await api.get('/api/blogs')
    expect('id').toBeDefined()
})
})

describe('addition of a new blog', () => {

test('a valid blog can be added ', async () => {
    const newBlog = {
      title: 'Koodi tutoriaalit',
      author: 'koodiguru',
      url: 'www.koodiguruntutoriaalit.fi',
      likes: 1    
}
  
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  
    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
  
    const titles = blogsAtEnd.map(b => b.title)
    expect(titles).toContain(
      'Koodi tutoriaalit'
    )
  })
  
  test('if no likes defined, likes is zero', async () => {
    const newBlog = {
      title: 'Rasvatonsokeritonmautondieetti',
      author: 'Dieettihemmo',
      url: 'www.hemmondieetit.fi',
    }
  
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  
    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
  
    const likes = blogsAtEnd.map(b => b.likes)
    expect(likes).toContain(
      0
    )
  })

  test('blog without title or url is not added', async () => {
    const badRequest = {
      author: 'Kiipeily mestari',
      likes: 10
    }
  
    await api
      .post('/api/blogs')
      .send(badRequest)
      .expect(400)
 
    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
  })
})

  describe('deletion of a blog', () => {
	
    test('succeeds with status code 204 if id is valid', async () => {
      const blogsAtStart = await helper.blogsInDb()
      const blogToDelete = blogsAtStart[0]

      await api
        .delete(`/api/blogs/${blogToDelete.id}`)
        .expect(204)

      const blogsAtEnd = await helper.blogsInDb()

      expect(blogsAtEnd).toHaveLength(
        helper.initialBlogs.length - 1
      )

      const titles = blogsAtEnd.map(r => r.title)

      expect(titles).not.toContain(blogToDelete.title)
    })
  })

  describe('updating a specific blog', () => {
	
    test('likes is updated', async () => {
    const blogs = await helper.blogsInDb()
    const blogToUpdate = blogs[1]
 
    blogToUpdate.likes = 13
   
    await api
      .put(`/api/blogs/${blogToUpdate.id}`)
      .send(blogToUpdate)
 
    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(blogs.length)
 
    const blogsWithUpdate = await helper.blogsInDb()   
    expect(blogsWithUpdate[1].likes).toBe(13)

    })
  })
})

  describe('when there is initially one user at db', () => {
    beforeEach(async () => {
      await User.deleteMany({})
  
      const passwordHash = await bcrypt.hash('sekret', 10)
      const user = new User({ username: 'root', passwordHash })
  
      await user.save()
    })
  
    test('creation succeeds with a fresh username', async () => {
      const usersAtStart = await helper.usersInDb()
  
      const newUser = {
        username: 'Suvisp',
        name: 'Suvi Suurenmoinen',
        password: 'salainen',
      }
  
      await api
        .post('/api/users')
        .send(newUser)
        .expect(200)
        .expect('Content-Type', /application\/json/)
  
      const usersAtEnd = await helper.usersInDb()
      expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)
  
      const usernames = usersAtEnd.map(u => u.username)
      expect(usernames).toContain(newUser.username)
    })

    test('creation fails with proper statuscode and message if username already taken', async () => {
      const usersAtStart = await helper.usersInDb()
  
      const newUser = {
        username: 'root',
        name: 'Superuser',
        password: 'salainen',
      }
  
      const result = await api
        .post('/api/users')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)
  
      expect(result.body.error).toContain('`username` to be unique')
  
      const usersAtEnd = await helper.usersInDb()
      expect(usersAtEnd).toHaveLength(usersAtStart.length)
    })

    test('creation fails with proper statuscode and message if username less than 3 characters long', async () => {
      const usersAtStart = await helper.usersInDb()
  
      const newUser = {
        username: 'sp',
        name: 'Suvi',
        password: 'enkerro',
      }
  
      const result = await api
        .post('/api/users')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)
  
      expect(result.body.error).toContain('is shorter than the minimum allowed length (3)')
  
      const usersAtEnd = await helper.usersInDb()
      expect(usersAtEnd).toHaveLength(usersAtStart.length)
    })

    test('creation fails with proper statuscode and message if password less than 3 characters long', async () => {
      const usersAtStart = await helper.usersInDb()
  
      const newUser = {
        username: 'spSuvi',
        name: 'Suvi',
        password: 'en',
      }
  
      const result = await api
        .post('/api/users')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)
  
      expect(result.body.error).toContain('password must be minimum 3 characters long')
  
      const usersAtEnd = await helper.usersInDb()
      expect(usersAtEnd).toHaveLength(usersAtStart.length)
    })
  })

afterAll(() => {
  mongoose.connection.close()
})