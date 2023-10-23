import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'
const userUrl = 'http://localhost:3003/api/users'
let token = ''

const setToken = (desToken) => {
  token = `Bearer ${desToken}`
}

const getAll = async () => {
  const config = {
    headers: { Authorization: token },
  }
  const request = await axios
    .get(baseUrl, config)
    .then((response) => response.data)
  return request
}

const create = async (blog) => {
  const config = {
    headers: { Authorization: token },
  }
  const result = await axios.post(baseUrl, blog, config).then((res) => res.data)
  return result
}

const incLikes = async (blog) => {
  const config = {
    headers: { Authorization: token },
  }
  const res = await axios
    .put(`${baseUrl}/${blog.id}`, blog, config)
    .then((res) => res.data)
  return res
}

const getUsers = (id) => {
  const res = axios.get(`${userUrl}/${id}`).then((res) => res.data.name)
  return res
}

const User = (id) => {
  const res = axios.get(`${userUrl}/${id}`).then((res) => res.data)
  return res
}

const getAllUsers = async () => {
  return await axios.get(userUrl).then((res) => res.data)
}

const deleteBlog = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  await axios.delete(`${baseUrl}/${id}`, config)
}

export default {
  getAll,
  setToken,
  create,
  getUsers,
  incLikes,
  deleteBlog,
  getAllUsers,
  User,
}
