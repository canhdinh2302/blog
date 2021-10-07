import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 3000,
})

axiosClient.interceptors.response.use(
  (response) => response?.data,
  (error) => Promise.reject(error)
)

axiosClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.jwt : ''
  const headers = token ? { ...config.headers, Authorization: `Bearer ${token}` } : config.headers
  return { ...config, headers }
})

export default axiosClient
