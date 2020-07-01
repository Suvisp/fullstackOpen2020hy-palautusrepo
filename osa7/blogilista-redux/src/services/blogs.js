import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  // return request.then(response => response.data)
  return response.data
}

// const createOne = async newObject => {
//   const config = {
//     headers: { Authorization: token },
//   }

//   const response = await axios.post(baseUrl, newObject, config)
//   return response.data
// }

const createOne = async (title, author, url, votes ) => {
  const config = {
    headers: { Authorization: token },
  }
  const object = { title, author, url, votes: 0 }

  const response = await axios.post(baseUrl, object, config)
  return response.data
}

const updateOne = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteOne = async (id) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = await axios.delete(`${baseUrl}/${id}`, config)
  // return request.then(response => response.data)
  return request.data
}

export default { getAll, createOne, updateOne, deleteOne, setToken }