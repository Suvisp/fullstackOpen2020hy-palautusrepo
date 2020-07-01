import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createOne = async (title, author, url, votes ) => {
  const config = {
    headers: { Authorization: token },
  }
  const object = { title, author, url, votes: 0 }

  const response = await axios.post(baseUrl, object, config)
  return response.data
}

const updateOne = async (blog) => {
  const response = await axios.put(`${baseUrl}/${blog.id}`, blog)
  return response.data
}


const deleteOne = async (id) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = await axios.delete(`${baseUrl}/${id}`, config)
  return request.data
}

export default { getAll, createOne, updateOne, deleteOne, setToken }