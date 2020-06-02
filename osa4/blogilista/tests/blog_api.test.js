const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./test_helper')

const Blog = require('../models/blog')

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

test('id is formatted as id', async () => {
    const response = await api.get('/api/blogs')
    expect('id').toBeDefined()
})

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
      url: 'www.hemmondieetit.fi'
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


afterAll(() => {
  mongoose.connection.close()
})