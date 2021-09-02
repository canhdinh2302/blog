import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 3000,
})

export default axiosClient
