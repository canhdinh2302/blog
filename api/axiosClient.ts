import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 3000,
})

axiosClient.interceptors.response.use(
  (response) => response?.data,
  (error) => Promise.reject(error)
)

export default axiosClient
